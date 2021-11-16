# ApplicationAPI
Данный API используют наши мобильные приложения для [iOS](https://github.com/rosteleset/SmartYard-iOS) и [Android](https://github.com/rosteleset/SmartYard-Android)

Для просмотра API вы можете [перейти по данной ссылке](https://rosteleset.github.io/ApplicationAPI/) либо клонировать этот репозиторий себе.

API сгенерировано автоматически при помощи [apidoc](https://apidocjs.com/)

# Пример, который поможет вам начать создавать собственный движок для домофонии
Ниже наброски того, как сделать мобильное приложение на базе исходников Linphone, которое будет принимать звонки с вашего Asterisk через push-notifications. 
Данный пример иллюстрирует наш подход, при помощи которого мы делаем интеграцию между SIP-домофонами <-> Asterisk <-> Мобильными приложениями

## Firebase (google)

1) регистрируемся в google firebase (https://firebase.google.com/)

2) потребуется зарегистрировать проект и приложение

![0001](https://lp.lanta.me/0001.png)

![0002](https://lp.lanta.me/0002.png)

потребуется придумать имя приложения

![0003](https://lp.lanta.me/0003.png)

и отключить (а можно и оставить) аналитику

![0004](https://lp.lanta.me/0004.png)

проект готов, надо добавить приложение

![0005](https://lp.lanta.me/0005.png)

![0006](https://lp.lanta.me/0006.png)

![0007](https://lp.lanta.me/0007.png)

3) надо скачать google-services.json

4) теперь надо создать сервисный аккаунт 

![0008](https://lp.lanta.me/0008.png)

![0009](https://lp.lanta.me/0009.png)

и сохранить его ключ в файл serviceAccountKey.json

## Android

1) скачиваем linphone 
   
         git clone https://github.com/BelledonneCommunications/linphone-android

2) файл google-services.json (см выше) надо положить в linphone-android/app (там уже есть от разработчиков linphone, просто перезаписать)

3) в файле google-services.json в секции "client" дублируем содержимое и во втором экземпляре к package_name добавляем .debug

![0012](https://lp.lanta.me/0012.png)

4) в linphone-android/app/build.gradle меняем "org.linphone" на имя которое придумали при создании приложения в firebase

5) генерируем ключи для подписи приложения
   
         keytool -genkey -keystore linphone-android/app/bc-android.keystore -storepass lp1234 -alias lp1234 -keypass lp1234 -dname "CN=Mikhail Ivanov O=StartAndroid C=RU" -validity 10000 -keyalg RSA -keysize 2048

6) подставляем lp1234 в linphone-android/keystore.properties 

![0014](https://lp.lanta.me/0014.png)

7) качаем и ставим Android Studio IDE ```https://developer.android.com/studio#downloads``` (если еще нет)

8) открываем проект linphone-android

9) компилируем, запускаем на устройстве или эмуляторе

![0015](https://lp.lanta.me/0015.png)

10) в настройках приложения включаем пуши, __ОТКЛЮЧАЕМ__ автозапуск и фоновую службу

![0010](https://lp.lanta.me/0010.jpeg)

![0011](https://lp.lanta.me/0011.jpeg)

с андроидом все (релиз, ребрендинг и т.п. - уже сами :))

## iOS
всё аналогично Android:
1) скачиваем https://github.com/BelledonneCommunications/linphone-iphone
2) заменяем название приложения, версию и данные разработчиков
3) Необходимые ключи, провижининг профайлы и сертификаты для подписи приложения XCode должен создать автоматически, либо их можно добавить их вручную из панели разработчика на developer.apple.com
4) заменяем GoogleService-Info.plist на свой, взятый из нашего аккаунта Firebase
5) собираем проект, архивируем, отправляем в AppStore на проверку, публикуем.

## Asterisk

1) диалплан на lua (надо подождать пока не появится extension)

```lua
local timeout = os.time() + 60

local pjsip_extension = ''

push(extension, channel.CALLERID("name"):get(), channel.CALLERID("num"):get())

log_debug("starting loop for: "..extension)
while os.time() < timeout do
   pjsip_extension = channel.PJSIP_DIAL_CONTACTS(extension):get()
   if pjsip_extension ~= "" then
      log_debug("has registration: "..extension.." ["..pjsip_extension.."]")
      app.Dial(pjsip_extension, 60, 'mtT')
   else
      app.Wait(0.5)
   end
end
```

2) надо как-то получать токены пушей и отправлять их, для этого потребуется небольшой скрипт на node.js (прилагается)

3) рядом с lp.js надо положить serviceAccountKey.json

4) скрипту потребуется AMI

5) и некоторое количество зависимостей ```npm i firebase-admin asterisk-manager express redis```

6) ключи будем хранить в redis ```apt-get install redis```

7) у extension желательно поставить транспорт tcp, тогда при отключении телефона астериск сразу поймет что контакт отвалился

Исходный код

1) lp.js (регистрация токенов, отправка пушей)

```javascript
#!/usr/bin/nodejs

const database = 'https://presentation-voxlink.firebaseio.com';

const fs = require('fs');
const path = require('path');
const admin = require('firebase-admin');
const ami = new require('asterisk-manager')('5038', '127.0.0.1', 'asterisk', '881d6256664648e0ebe1ed0e9b1340f2', true);
const app = require('express')();
const redis = require("redis").createClient();

admin.initializeApp({
    credential: admin.credential.cert(require(path.join(__dirname, 'serviceAccountKey.json'))),
    databaseURL: database,
});

ami.keepConnected();

app.use(require('body-parser').urlencoded({ extended: true }));
app.listen(8082, '127.0.0.1');

function pushOk(token, result) {
    if (result && result.successCount && parseInt(result.successCount)) {
        console.log((new Date()).toLocaleString() + " ok: " + token);
    } else {
        pushFail(token, result);
    }
}

function pushFail(token, error) {
    console.log((new Date()).toLocaleString() + " err: " + token);

    let broken = false;
    if (error && error.results && error.results.length && error.results[0] && error.results[0].error && error.results[0].error.code) {
        if (error.results[0].error.code == 'messaging/registration-token-not-registered') {
            for (let i in contacts) {
                if (contacts[i] == token) {
                    delete contacts[i];
                    redis.set('contacts', JSON.stringify(contacts));
                }
            }
            broken = true;
        }
    }

    if (!broken) {
        fs.appendFileSync('/tmp/pushFail.log', (new Date()).toLocaleString() + " err: " + token + "\n" + JSON.stringify(error) + "\n\n");
    }
}

function realPush(msg, data, options, token, type) {

    console.log(token, type, msg, data, options);

    if (parseInt(type) === 0) {

        let message = {
            notification: msg,
            data: data,
        };

        if (options) {
            admin.messaging().sendToDevice(token, message, options).then(r => {
                pushOk(token, r);
            }).catch(e => {
                pushFail(token, e);
            });
        } else {
            admin.messaging().sendToDevice(token, message).then(r => {
                pushOk(token, r);
            }).catch(e => {
                pushFail(token, e);
            });
        }
    } else {

        let http2_server = (parseInt(type) === 2)?'https://api.sandbox.push.apple.com':'https://api.push.apple.com';

        let curl = new Curl();

        curl.setOpt(Curl.option.HTTP_VERSION, 3);
        curl.setOpt(Curl.option.URL, `${http2_server}/3/device/${token}`);
        curl.setOpt(Curl.option.PORT, 443);
        curl.setOpt(Curl.option.HTTPHEADER, [
            `apns-topic: ${app_bundle_id}.voip`,
            `apns-push-type: voip`,
            `User-Agent: ${app_bundle_id}`,
        ]);
        curl.setOpt(Curl.option.POST, true);
        curl.setOpt(Curl.option.POSTFIELDS, JSON.stringify({
            data: data,
        }));
        curl.setOpt(Curl.option.TIMEOUT, 30);
        curl.setOpt(Curl.option.SSL_VERIFYPEER, false);
        curl.setOpt(Curl.option.SSLCERT, cert);
        curl.setOpt(Curl.option.HEADER, true);
        curl.setOpt(Curl.option.VERBOSE, false);

        curl.on('end', code => {
            if (parseInt(code) === 200) {
                pushOk(token, { successCount: 1 });
            } else {
                pushFail(token, { errorCode: code });
            }
            curl.close();
        });

        curl.on('error', () => {
            curl.close();
        });

        curl.perform();
    }
}

var contacts = {};

ami.on('contactstatus', e => {
    if (e.aor) {
        let uri = e.uri.split(';');
        let token;
        let type;
        for (let i = 0; i < uri.length; i++) {
            let p = uri[i].split('=');
            switch (p[0]) {
                case 'pn-tok':
                    token = p[1];
                    break;
                case 'pn-type':
                    type = p[1];
                    break;
            }
        }
        if (token && type == 'firebase') {
            contacts[e.aor] = token;
            console.log(e.aor, token);
            redis.set('contacts', JSON.stringify(contacts));
        }
    }
});

app.get('/wakeup', function (req, res) {
    console.log(req.query);
    if (req.query.ext && contacts[req.query.ext]) {
        realPush({
                // empty message
            }, {
                type: 'voip',
                realm: req.query.realm?req.query.realm:'Unknown',
                user: req.query.from?req.query.from:'Unknown',
            }, {
                priority: 'high',
                mutableContent: true,
            },
            contacts[req.query.ext],
            0
        );
    }
    res.status(204).send();
});

redis.get('contacts', (e, v) => {
    if (!e && v) {
        contacts = JSON.parse(v);
        console.log(contacts);
    }
});
```

2) extension.lua (диалплан) ```apt-get install lua-socket```

```lua
http = require 'socket.http'

function char_to_pchar(c)
   return string.format("%%%02X", c:byte(1, 1))
end

function encodeURI(str)
   return (str:gsub("[^%;%,%/%?%:%@%&%=%+%$%w%-%_%.%!%~%*%'%(%)%#]", char_to_pchar))
end

function encodeURIComponent(str)
   return (str:gsub("[^%w%-_%.%!%~%*%'%(%)]", char_to_pchar))
end

function push(ext, realm, from)
   http.request("http://127.0.0.1:8082/wakeup?ext="..encodeURIComponent(tostring(ext)).."&realm="..encodeURIComponent(tostring(realm)).."&from="..encodeURIComponent(tostring(from)))
end

extensions = {
   [ "default" ] = {

      [ "_." ] = function ()
         app.Answer()
         app.MusicOnHold()
      end,

      [ "_XXXX" ] = function (context, extension)
         local timeout = os.time() + 60

         local pjsip_extension = ''

         push(extension, channel.CALLERID("name"):get(), channel.CALLERID("num"):get())

         while os.time() < timeout do
            pjsip_extension = channel.PJSIP_DIAL_CONTACTS(extension):get()
            if pjsip_extension ~= "" then
               app.Dial(pjsip_extension, 60, 'mtT')
            else
               app.Wait(0.5)
            end
         end
      end,

   },
}
```

3) pjsip.conf

```
[transport-tcp]
type = transport
protocol = tcp
bind = 0.0.0.0

[static-aor-template](!)
type = aor
max_contacts = 1
remove_existing = yes

[mobile-endpoint-template](!)
type = endpoint
context = default
disallow = all
allow = opus
rtp_symmetric = yes
force_rport = yes
rewrite_contact = yes
timers = no
direct_media = no
inband_progress = no
allow_subscribe = yes
dtmf_mode = rfc4733
ice_support = yes
transport = transport-tcp

[1001](static-aor-template)

[1001]
type = auth
username = 1001
password = Giethoh4

[1001](mobile-endpoint-template)
auth = 1001
outbound_auth = 1001
aors = 1001
callerid = "М. Иванов" <1001>
```

4) manager.conf

```
[general]
enabled = yes
port = 5038
bindaddr = 127.0.0.1

[asterisk]
secret = 881d6256664648e0ebe1ed0e9b1340f2
read = all
write = all
```
