define({
  "name": "Domophone API",
  "version": "1.0.0",
  "description": "",
  "title": "Domophone API",
  "url": "https://yourserver.yourdomain/api",
  "sampleUrl": "https://yourserver.yourdomain/api",
  "template": {
    "forceLanguage": "ru"
  },
  "header": {
    "title": "Общая информация",
    "content": "<p>Для взаимодействия между платформой и мобильными приложениями применяются веб-сервисы, работающие по протоколу REST.\nВызовы веб-сервисов осуществляются через метод POST.\nВходящие параметры и ответы сервисов являются объектами в формате JSON.\nФормат ответа сервиса</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Descr</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>code</td>\n<td>Number</td>\n<td>код результата (a'la HTTP)</td>\n</tr>\n<tr>\n<td>name</td>\n<td>String</td>\n<td>краткое сообщение (a'la HTTP)</td>\n</tr>\n<tr>\n<td>message</td>\n<td>String</td>\n<td>расшифровка (для пользователя)</td>\n</tr>\n<tr>\n<td>data</td>\n<td>Object</td>\n<td>payload</td>\n</tr>\n</tbody>\n</table>\n<p>Коды 2хх считаются &quot;успешными&quot;, все остальные - ошибки, 3xx (redirect) не используются</p>\n<pre class=\"prettyprint\">{\n    \"code\": 200,\n    \"name\": \"OK\",\n    \"message\": \"хорошо\",\n    \"data\": {\n        \"doorCode\": \"40374\",\n        \"allowed\": \"t\"\n    }\n}\n</code></pre>\n<pre class=\"prettyprint\">{\n    \"code\": 404,\n    \"name\": \"Not Found\",\n    \"message\": \"не найдено\"\n}\n</code></pre>\n<p>В описаниях методов возвращаемые значения указаны без &quot;обертки&quot; в data</p>\n<p>При голосовом вызове на устройство отправляется PUSH сообщение содержащее следующие данные (пример)\n[stun* и turn* - опциональные параметры, могут отсутствовать]</p>\n<pre class=\"prettyprint\">{\n    \"server\": \"yourserver.yourdomain\",\n    \"port\": \"54675\",\n    \"transport\": \"tcp\",\n    \"extension\": \"2000002224\",\n    \"pass\": \"310b2883c53024644bcd8355fe846b67\",\n    \"dtmf\": \"1\",\n    \"stun\": \"stun:stun.l.google.com:19302\",\n    \"stunTransport\": \"udp\",\n    \"turn\": \"turn:37.235.209.140:3478\",\n    \"turnTransport\": \"udp\",\n    \"turnUsername\": \"test\",\n    \"turnPassword\": \"123123\",\n    \"image\": \"https://yourserver.yourdomain/shot/e4bb3f86073a270ec8d9291c10d26dfe.jpg\",\n    \"live\": \"https://yourserver.yourdomain/live/e4bb3f86073a270ec8d9291c10d26dfe/image.jpg\",\n    \"timestamp\": \"1231231\",\n    \"ttl\": \"30\",\n    \"callerId\": \"Домофон\"\n    \"platform\": \"ios\",\n    \"flatId\": \"12345\",\n    \"flatNumber\": \"11\",\n    \"baseUrl\": \"https://yourserver.yourdomain:543\",\n}\n</code></pre>\n<p>При отправке текстового сообщения текст и заголовок сообщения отправляются как обычно, также отправляются\nследующие данные</p>\n<pre class=\"prettyprint\">{\n    \"messageId\": \"e4bb3f86073a270ec8d9291c10d26dfe\",\n    \"action\": \"inbox\",\n    \"badge\": \"0\",\n    \"ext\": \"id расширения\", // опционально\n}\n</code></pre>\n<p>messageId - идентификатор сообщения (используется в методах delivered и readed),</p>\n<p>badge - количество непрочитанных сообщений,</p>\n<p>action - указывает на то как отображать (использовать) данное сообщение</p>\n<ul>\n<li>inbox - сообщение</li>\n<li>chat - сообщение в чате</li>\n<li>newAddress - доступен новый адрес</li>\n<li>paySuccess - платеж прошел успешно</li>\n<li>payError - платеж завершился с ошибкой</li>\n<li>videoReady - ролик готов к загрузке</li>\n<li>ext - сообщение для расширения</li>\n</ul>\n"
  },
  "apidoc": "0.3.0",
  "defaultVersion": "0.0.0",
  "generator": {
    "name": "apidoc",
    "time": "2021-10-21T06:05:59.594Z",
    "url": "https://apidocjs.com",
    "version": "0.29.0"
  }
});
