define({ "api": [
  {
    "type": "post",
    "url": "/address/access",
    "title": "управление доступами",
    "version": "1.0.0",
    "description": "<p><strong>должен работать</strong></p>",
    "group": "Address",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "flatId",
            "description": "<p>идентификатор квартиры</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "clientId",
            "description": "<p>идентификатор договора (для удаления подселенцев)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "size": "11",
            "optional": true,
            "field": "guestPhone",
            "defaultValue": "myPhone",
            "description": "<p>номер телефона</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"inner\"",
              "\"outer\""
            ],
            "optional": true,
            "field": "type",
            "defaultValue": "inner",
            "description": "<p>тип inner - доступ к домофону, outer - только калитки и ворота</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"Y-m-d H:i:s\""
            ],
            "optional": true,
            "field": "expire",
            "defaultValue": "3001-01-01",
            "description": "<p>время до которого действует доступ</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Ошибки",
          "content": "403 требуется авторизация\n422 неверный формат данных\n404 пользователь не найден\n410 авторизация отозвана\n424 неверный токен",
          "type": "json"
        }
      ]
    },
    "filename": "/home/mmikel/projects/domophone/api/address/access.php",
    "groupTitle": "Address",
    "name": "PostAddressAccess",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/address/access"
      }
    ]
  },
  {
    "type": "post",
    "url": "/address/getAddressList",
    "title": "получить список адресов на главный экран",
    "version": "1.0.0",
    "description": "<p><strong>[не готов]</strong></p>",
    "group": "Address",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "-",
            "description": "<p>массив объектов</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "-.houseId",
            "description": "<p>идентификатор дома</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "-.address",
            "description": "<p>адрес</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "-.doors",
            "description": "<p>замки домофонов</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "-.doors.domophoneId",
            "description": "<p>идентификатор домофона</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "allowedValues": [
              "0",
              "1",
              "2"
            ],
            "optional": false,
            "field": "-.doors.doorId",
            "description": "<p>идентификатор замка</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": true,
            "field": "-.doors.entrance",
            "description": "<p>подъезд</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "allowedValues": [
              "\"entrance\"",
              "\"wicket\"",
              "\"gate\"",
              "\"barrier\""
            ],
            "optional": false,
            "field": "-.doors.icon",
            "description": "<p>иконка замка</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "-.doors.name",
            "description": "<p>наименование замка</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "-.doors.blocked",
            "description": "<p>причина ограничения доступа к домофону</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "-.doors.dst",
            "description": "<p>номер открытия</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "allowedValues": [
              "\"t\"",
              "\"f\""
            ],
            "optional": true,
            "field": "-.hasPlog",
            "description": "<p>доступность журнала событий</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "-.cctv",
            "description": "<p>количество видеокамер</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": true,
            "field": "-.ext",
            "description": "<p>массив объектов</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "-.ext.caption",
            "description": "<p>имя расширения (для отображения)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "-.ext.icon",
            "description": "<p>иконка расширения (svg)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "-.ext.extId",
            "description": "<p>идентификатор расширения</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "allowedValues": [
              "\"t\"",
              "\"f\""
            ],
            "optional": true,
            "field": "-.ext.highlight",
            "defaultValue": "f",
            "description": "<p>&quot;подсветка&quot; (красная точка)</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Ошибки",
          "content": "403 требуется авторизация\n422 неверный формат данных\n404 пользователь не найден\n410 авторизация отозвана\n424 неверный токен",
          "type": "json"
        }
      ]
    },
    "filename": "/home/mmikel/projects/domophone/api/address/getAddressList.php",
    "groupTitle": "Address",
    "name": "PostAddressGetaddresslist",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/address/getAddressList"
      }
    ]
  },
  {
    "type": "post",
    "url": "/address/getSettingsList",
    "title": "получить список адресов для настроек",
    "version": "1.0.0",
    "description": "<p><em><strong>в работе</strong></em></p>",
    "group": "Address",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "-",
            "description": "<p>массив объектов</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": true,
            "field": "-.clientId",
            "description": "<p>идентификатор клиента</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "-.clientName",
            "description": "<p>имя абонента</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "-.contractName",
            "description": "<p>номер договора</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "allowedValues": [
              "\"t\"",
              "\"f\""
            ],
            "optional": true,
            "field": "-.flatOwner",
            "description": "<p>владелец квартиры</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "allowedValues": [
              "\"t\"",
              "\"f\""
            ],
            "optional": true,
            "field": "-.contractOwner",
            "description": "<p>владелец договора</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "allowedValues": [
              "\"t\"",
              "\"f\""
            ],
            "optional": true,
            "field": "-.hasGates",
            "description": "<p>есть ворота и (или) шлагбаумы</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": true,
            "field": "-.houseId",
            "description": "<p>идентификатор дома</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": true,
            "field": "-.flatId",
            "description": "<p>идентификатор квартиры</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": true,
            "field": "-.flatNumber",
            "description": "<p>номер квартиры</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "allowedValues": [
              "\"t\"",
              "\"f\""
            ],
            "optional": true,
            "field": "-.hasPlog",
            "description": "<p>доступность журнала событий</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "-.address",
            "description": "<p>адрес</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "allowedValues": [
              "\"internet\"",
              "\"iptv\"",
              "\"ctv\"",
              "\"phone\"",
              "\"cctv\"",
              "\"domophone\"",
              "\"gsm\""
            ],
            "optional": false,
            "field": "-.services",
            "description": "<p>подключенные услуги</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "-.lcab",
            "description": "<p>личный кабинет</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": true,
            "field": "-.roommates",
            "description": "<p>сокамерники</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "-.roommates.phone",
            "description": "<p>телефон</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "allowedValues": [
              "\"Y-m-d H:i:s\""
            ],
            "optional": false,
            "field": "-.roommates.expire",
            "description": "<p>дата до которой действует доступ</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "allowedValues": [
              "\"inner\"",
              "\"outer\"",
              "\"owner\""
            ],
            "optional": false,
            "field": "-.roommates.type",
            "description": "<p>тип inner - доступ к домофону, outer - только калитки и ворота, owner - владелец</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Ошибки",
          "content": "403 требуется авторизация\n422 неверный формат данных\n404 пользователь не найден\n410 авторизация отозвана\n424 неверный токен",
          "type": "json"
        }
      ]
    },
    "filename": "/home/mmikel/projects/domophone/api/address/getSettingsList.php",
    "groupTitle": "Address",
    "name": "PostAddressGetsettingslist",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/address/getSettingsList"
      }
    ]
  },
  {
    "type": "post",
    "url": "/address/intercom",
    "title": "настройки домофона (квартиры)",
    "version": "1.0.0",
    "description": "<p><strong>[метод готов]</strong></p>",
    "group": "Address",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "flatId",
            "description": "<p>идентификатор квартиры</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": true,
            "field": "settings",
            "description": "<p>настройки квартиры</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"t\"",
              "\"f\""
            ],
            "optional": true,
            "field": "settings.enableDoorCode",
            "description": "<p>разрешить код открытия двери</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"t\"",
              "\"f\""
            ],
            "optional": true,
            "field": "settings.CMS",
            "description": "<p>разрешить КМС</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"t\"",
              "\"f\""
            ],
            "optional": true,
            "field": "settings.VoIP",
            "description": "<p>разрешить VoIP</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"Y-m-d H:i:s\""
            ],
            "optional": true,
            "field": "settings.autoOpen",
            "description": "<p>автооткрытие двери</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "allowedValues": [
              "0",
              "1",
              "2",
              "3",
              "5",
              "7",
              "10"
            ],
            "optional": true,
            "field": "settings.whiteRabbit",
            "description": "<p>автооткрытие двери</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"t\"",
              "\"f\""
            ],
            "optional": true,
            "field": "settings.paperBill",
            "description": "<p>печатать бумажные платежки (если нет значит недоступен)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"t\"",
              "\"f\""
            ],
            "optional": true,
            "field": "settings.disablePlog",
            "description": "<p>прекратить &quot;следить&quot; за квартирой</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"t\"",
              "\"f\""
            ],
            "optional": true,
            "field": "settings.hiddenPlog",
            "description": "<p>показывать журнал только владельцу</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"t\"",
              "\"f\""
            ],
            "optional": true,
            "field": "settings.FRSDisabled",
            "description": "<p>отключить распознование лиц для квартиры (если нет значит недоступен)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "-",
            "description": "<p>настройки квартиры</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "allowedValues": [
              "\"t\"",
              "\"f\""
            ],
            "optional": false,
            "field": "-.allowDoorCode",
            "defaultValue": "t",
            "description": "<p>код открытия двери разрешен</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "-.doorCode",
            "description": "<p>код открытия двери (если нет значит выключено)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "allowedValues": [
              "\"t\"",
              "\"f\""
            ],
            "optional": false,
            "field": "-.CMS",
            "description": "<p>КМС разрешено</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "allowedValues": [
              "\"t\"",
              "\"f\""
            ],
            "optional": false,
            "field": "-.VoIP",
            "description": "<p>VoIP разрешен</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "allowedValues": [
              "\"Y-m-d H:i:s\""
            ],
            "optional": false,
            "field": "-.autoOpen",
            "description": "<p>дата до которой работает автооткрытие двери</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "allowedValues": [
              "0",
              "1",
              "2",
              "3",
              "5",
              "7",
              "10"
            ],
            "optional": false,
            "field": "-.whiteRabbit",
            "description": "<p>автооткрытие двери</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "allowedValues": [
              "\"t\"",
              "\"f\""
            ],
            "optional": true,
            "field": "_.paperBill",
            "description": "<p>печатать бумажные платежки</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "allowedValues": [
              "\"t\"",
              "\"f\""
            ],
            "optional": false,
            "field": "_.disablePlog",
            "defaultValue": "f",
            "description": "<p>прекратить &quot;следить&quot; за квартирой</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "allowedValues": [
              "\"t\"",
              "\"f\""
            ],
            "optional": false,
            "field": "_.hiddenPlog",
            "defaultValue": "f",
            "description": "<p>показывать журнал только владельцу</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "allowedValues": [
              "\"t\"",
              "\"f\""
            ],
            "optional": true,
            "field": "_.FRSDisabled",
            "description": "<p>отключить распознование лиц для квартиры</p>"
          }
        ]
      }
    },
    "filename": "/home/mmikel/projects/domophone/api/address/intercom.php",
    "groupTitle": "Address",
    "name": "PostAddressIntercom",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/address/intercom"
      }
    ]
  },
  {
    "type": "post",
    "url": "/address/offices",
    "title": "адреса офисов ООО \"ЛанТа\"",
    "version": "1.0.0",
    "description": "<p><strong>[метод готов]</strong></p>",
    "group": "Address",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "-",
            "description": "<p>массив адресов</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "-.lat",
            "description": "<p>широта</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "-.lon",
            "description": "<p>долгота</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.address",
            "description": "<p>адрес</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.opening",
            "description": "<p>время работы</p>"
          }
        ]
      }
    },
    "filename": "/home/mmikel/projects/domophone/api/address/offices.php",
    "groupTitle": "Address",
    "name": "PostAddressOffices",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/address/offices"
      }
    ]
  },
  {
    "type": "post",
    "url": "/address/openDoor",
    "title": "открыть дверь (калитку, ворота, шлагбаум)",
    "version": "1.0.0",
    "description": "<p><em><strong>нуждается в доработке</strong></em></p>",
    "group": "Address",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "domophoneId",
            "description": "<p>идентификатор домофона</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1",
              "2"
            ],
            "optional": true,
            "field": "doorId",
            "defaultValue": "0",
            "description": "<p>идентификатор двери (калитки, ворот, шлагбаума)</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Ошибки",
          "content": "403 требуется авторизация\n422 неверный формат данных\n404 пользователь не найден\n410 авторизация отозвана\n424 неверный токен",
          "type": "json"
        }
      ]
    },
    "filename": "/home/mmikel/projects/domophone/api/address/openDoor.php",
    "groupTitle": "Address",
    "name": "PostAddressOpendoor",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/address/openDoor"
      }
    ]
  },
  {
    "type": "post",
    "url": "/address/plog",
    "title": "получить журнал событий объекта за день",
    "version": "1.0.0",
    "description": "<p><em><strong>в работе</strong></em></p>",
    "group": "Address",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "flatId",
            "description": "<p>идентификатор квартиры</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"Y-m-d\""
            ],
            "optional": false,
            "field": "day",
            "description": "<p>дата (день)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "-",
            "description": "<p>массив объектов</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "allowedValues": [
              "\"Y-m-d H:i:s\""
            ],
            "optional": false,
            "field": "-.date",
            "description": "<p>дата</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "-.uuid",
            "description": "<p>UUID события (уникален)</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": true,
            "field": "-.image",
            "description": "<p>UUID картинки (может повторяться для &quot;дублирующихся&quot; событий)</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "-.objectId",
            "description": "<p>идентификатор объекта (домофона)</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "allowedValues": [
              "\"0\""
            ],
            "optional": false,
            "field": "-.objectType",
            "description": "<p>тип объекта (0 - домофон)</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "allowedValues": [
              "\"0\"",
              "\"1\"",
              "\"2\""
            ],
            "optional": false,
            "field": "-.objectMechanizma",
            "description": "<p>идентификатор нагрузки (двери)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "-.mechanizmaDescription",
            "description": "<p>описание нагрузки (двери)</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "allowedValues": [
              "\"1 - не отвечен\"",
              "\"2 - отвечен\"",
              "\"3 - открытие ключом\"",
              "\"4 - открытие приложением\"",
              "\"5 - открытие по морде лица\"",
              "\"6 - открытие кодом открытия\"",
              "\"7 - открытие звонком (гость, калитка)\""
            ],
            "optional": false,
            "field": "-.event",
            "description": "<p>тип события</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "-.preview",
            "description": "<p>url картинки</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "allowedValues": [
              "\"0\"",
              "\"1\"",
              "\"2\""
            ],
            "optional": false,
            "field": "-.previewType",
            "description": "<p>тип каринки (0 - нет, 1 - flussonic, 2 - FRS)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "-.detail",
            "description": "<p>непонятная фигня</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": true,
            "field": "-.detailX",
            "description": "<p>детализация события</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "allowedValues": [
              "\"t\"",
              "\"f\""
            ],
            "optional": true,
            "field": "-.detailX.opened",
            "description": "<p>открыли или нет (1, 2)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "-.detailX.key",
            "description": "<p>ключ (3)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "-.detailX.phone",
            "description": "<p>телефон (4)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "-.detailX.faceId",
            "description": "<p>идентификатор лица (5+)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "-.detailX.code",
            "description": "<p>код открытия (6)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "-.detailX.phoneFrom",
            "description": "<p>телефон (7)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "-.detailX.phoneTo",
            "description": "<p>телефон (7)</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": true,
            "field": "-.detailX.flags",
            "description": "<p>доп. флаги</p>"
          },
          {
            "group": "Success 200",
            "type": "void",
            "optional": true,
            "field": "-.detailX.flags.canLike",
            "description": "<p>можно &quot;лайкать&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "void",
            "optional": true,
            "field": "-.detailX.flags.canDisLike",
            "description": "<p>можно &quot;дизлайкать&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "void",
            "optional": true,
            "field": "-.detailX.flags.liked",
            "description": "<p>уже &quot;лайкнуто&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": true,
            "field": "-.detailX.face",
            "description": "<p>координаты распознанного лица</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": true,
            "field": "-.detailX.face.left",
            "description": "<p>отступ по X</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": true,
            "field": "-.detailX.face.top",
            "description": "<p>отступ по Y</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": true,
            "field": "-.detailX.face.width",
            "description": "<p>ширина</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": true,
            "field": "-.detailX.face.height",
            "description": "<p>высота</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Ошибки",
          "content": "403 требуется авторизация\n422 неверный формат данных\n404 пользователь не найден\n410 авторизация отозвана\n424 неверный токен",
          "type": "json"
        }
      ]
    },
    "filename": "/home/mmikel/projects/domophone/api/address/plog.php",
    "groupTitle": "Address",
    "name": "PostAddressPlog",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/address/plog"
      }
    ]
  },
  {
    "type": "post",
    "url": "/address/plogDays",
    "title": "получить список дат (дней) на которые есть записи в журнале событий объекта",
    "version": "1.0.0",
    "description": "<p><em><strong>в работе</strong></em></p>",
    "group": "Address",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "flatId",
            "description": "<p>идентификатор квартиры</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "events",
            "description": "<p>фильтр типов событий (через запятую)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "-",
            "description": "<p>массив объектов</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"Y-m-d\""
            ],
            "optional": false,
            "field": "-.day",
            "description": "<p>дата (день)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "-.events",
            "description": "<p>количество событий</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Ошибки",
          "content": "403 требуется авторизация\n422 неверный формат данных\n404 пользователь не найден\n410 авторизация отозвана\n424 неверный токен",
          "type": "json"
        }
      ]
    },
    "filename": "/home/mmikel/projects/domophone/api/address/plogDays.php",
    "groupTitle": "Address",
    "name": "PostAddressPlogdays",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/address/plogDays"
      }
    ]
  },
  {
    "type": "post",
    "url": "/address/registerQR",
    "title": "зарегистрировать QR код",
    "version": "1.0.0",
    "description": "<p><em><strong>в работе</strong></em></p>",
    "group": "Address",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-",
            "description": "<p>показать alert c текстом</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "QR",
            "description": "<p>QR код</p>"
          }
        ]
      }
    },
    "filename": "/home/mmikel/projects/domophone/api/address/registerQR.php",
    "groupTitle": "Address",
    "name": "PostAddressRegisterqr",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/address/registerQR"
      }
    ]
  },
  {
    "type": "post",
    "url": "/address/resend",
    "title": "повторная отправка информации для гостя",
    "version": "1.0.0",
    "description": "<p><strong>должен работать</strong></p>",
    "group": "Address",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flatId",
            "description": "<p>идентификатор квартиры</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "11",
            "optional": false,
            "field": "guestPhone",
            "description": "<p>номер телефона</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Ошибки",
          "content": "403 требуется авторизация\n422 неверный формат данных\n404 пользователь не найден\n410 авторизация отозвана\n424 неверный токен",
          "type": "json"
        }
      ]
    },
    "filename": "/home/mmikel/projects/domophone/api/address/resend.php",
    "groupTitle": "Address",
    "name": "PostAddressResend",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/address/resend"
      }
    ]
  },
  {
    "type": "post",
    "url": "/address/resetCode",
    "title": "перегенерировать код открытия двери",
    "version": "1.0.0",
    "description": "<p><strong>[метод готов]</strong></p>",
    "group": "Address",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flatId",
            "description": "<p>идентификатор квартиры</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Ошибки",
          "content": "403 требуется авторизация\n422 неверный формат данных\n404 пользователь не найден\n410 авторизация отозвана\n424 неверный токен",
          "type": "json"
        }
      ]
    },
    "filename": "/home/mmikel/projects/domophone/api/address/resetCode.php",
    "groupTitle": "Address",
    "name": "PostAddressResetcode",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/address/resetCode"
      }
    ]
  },
  {
    "type": "post",
    "url": "/cctv/all",
    "title": "получить список камер",
    "version": "1.0.0",
    "description": "<p><em><strong>почти готов</strong></em></p>",
    "group": "CCTV",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "houseId",
            "description": "<p>идентификатор дома</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "-",
            "description": "<p>массив камер</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "-.houseId",
            "description": "<p>идентификатор дома</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "-.id",
            "description": "<p>id камеры</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.name",
            "description": "<p>наименование камеры</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "-.lat",
            "description": "<p>широта</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "-.lon",
            "description": "<p>долгота</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.url",
            "description": "<p>базовый url потока</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.token",
            "description": "<p>token авторизации</p>"
          }
        ]
      }
    },
    "filename": "/home/mmikel/projects/domophone/api/cctv/all.php",
    "groupTitle": "CCTV",
    "name": "PostCctvAll",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/cctv/all"
      }
    ]
  },
  {
    "type": "post",
    "url": "/cctv/camMap",
    "title": "отношения домофонов и камер",
    "version": "1.0.0",
    "description": "<p><em><strong>в работе</strong></em></p>",
    "group": "CCTV",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "-",
            "description": "<p>массив c настройками</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "-.id",
            "description": "<p>id домофона</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.url",
            "description": "<p>url камеры</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.token",
            "description": "<p>токен</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"t\"",
              "\"f\""
            ],
            "optional": false,
            "field": "-.frs",
            "description": "<p>подключен FRS</p>"
          }
        ]
      }
    },
    "filename": "/home/mmikel/projects/domophone/api/cctv/camMap.php",
    "groupTitle": "CCTV",
    "name": "PostCctvCammap",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/cctv/camMap"
      }
    ]
  },
  {
    "type": "post",
    "url": "/cctv/overview",
    "title": "получить список видовых камер",
    "version": "1.0.0",
    "description": "<p><em><strong>почти готов</strong></em></p>",
    "group": "CCTV",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "-",
            "description": "<p>массив камер</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "-.id",
            "description": "<p>id камеры</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.name",
            "description": "<p>наименование камеры</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "-.lat",
            "description": "<p>широта</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "-.lon",
            "description": "<p>долгота</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.url",
            "description": "<p>базовый url потока</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.token",
            "description": "<p>token авторизации</p>"
          }
        ]
      }
    },
    "filename": "/home/mmikel/projects/domophone/api/cctv/overview.php",
    "groupTitle": "CCTV",
    "name": "PostCctvOverview",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/cctv/overview"
      }
    ]
  },
  {
    "type": "post",
    "url": "/cctv/recDownload",
    "title": "запросить url фрагмента архива",
    "version": "1.0.0",
    "description": "<p><em><strong>почти готов</strong></em></p>",
    "group": "CCTV",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>идентификатор фрагмента</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-",
            "description": "<p>url</p>"
          }
        ]
      }
    },
    "filename": "/home/mmikel/projects/domophone/api/cctv/recDownload.php",
    "groupTitle": "CCTV",
    "name": "PostCctvRecdownload",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/cctv/recDownload"
      }
    ]
  },
  {
    "type": "post",
    "url": "/cctv/recPrepare",
    "title": "запросить фрагмент архива",
    "version": "1.0.0",
    "description": "<p><em><strong>почти готов</strong></em></p>",
    "group": "CCTV",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>идентификатор камеры</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"Y-m-d H:i:s\""
            ],
            "optional": false,
            "field": "from",
            "description": "<p>начало фрагмента</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"Y-m-d H:i:s\""
            ],
            "optional": false,
            "field": "to",
            "description": "<p>конец фрагмента</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "-",
            "description": "<p>идентификатор фрагмента</p>"
          }
        ]
      }
    },
    "filename": "/home/mmikel/projects/domophone/api/cctv/recPrepare.php",
    "groupTitle": "CCTV",
    "name": "PostCctvRecprepare",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/cctv/recPrepare"
      }
    ]
  },
  {
    "type": "post",
    "url": "/cctv/youtube",
    "title": "получить список роликов на YouTube",
    "version": "1.0.0",
    "description": "<p><em><strong>почти готов</strong></em></p>",
    "group": "CCTV",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>id камеры</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "-",
            "description": "<p>массив c роликами</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "-.id",
            "description": "<p>id камеры</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"Y-m-d H:i:s\""
            ],
            "optional": false,
            "field": "-.eventTime",
            "description": "<p>время события</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.title",
            "description": "<p>заголовок</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.description",
            "description": "<p>описание</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.thumbnailsDefault",
            "description": "<p>превью</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.thumbnailsMedium",
            "description": "<p>превью</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.thumbnailsHigh",
            "description": "<p>превью</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.url",
            "description": "<p>ссылка на ролик</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.addressLine",
            "description": "<p>адрес (?)</p>"
          }
        ]
      }
    },
    "filename": "/home/mmikel/projects/domophone/api/cctv/youtube.php",
    "groupTitle": "CCTV",
    "name": "PostCctvYoutube",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/cctv/youtube"
      }
    ]
  },
  {
    "type": "post",
    "url": "/ext/ext",
    "title": "расширение",
    "version": "1.0.0",
    "description": "<p><strong>[нет верстки]</strong></p>",
    "group": "Ext",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "extId",
            "description": "<p>идентификатор расширения</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "params",
            "description": "<p>параметры передаваемые в расширение</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "params.id",
            "description": "<p>идентификатор</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "params.value",
            "description": "<p>значение</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "-",
            "description": "<p>страничка которую надо отобразить во вьюшке</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.basePath",
            "description": "<p>базовый путь (от которго должна была загрузиться страница)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.code",
            "description": "<p>html страница</p>"
          }
        ]
      }
    },
    "filename": "/home/mmikel/projects/domophone/api/ext/ext.php",
    "groupTitle": "Ext",
    "name": "PostExtExt",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/ext/ext"
      }
    ]
  },
  {
    "type": "post",
    "url": "/ext/list",
    "title": "список глобальных расширений (меню)",
    "version": "1.0.0",
    "description": "<p><strong>[нет верстки]</strong></p>",
    "group": "Ext",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "-",
            "description": "<p>массив объектов</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.caption",
            "description": "<p>имя расширения (для отображения)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.icon",
            "description": "<p>иконка расширения (svg)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.extId",
            "description": "<p>идентификатор расширения</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"t\"",
              "\"f\""
            ],
            "optional": true,
            "field": "-.highlight",
            "defaultValue": "f",
            "description": "<p>&quot;подсветка&quot; (красная точка)</p>"
          }
        ]
      }
    },
    "filename": "/home/mmikel/projects/domophone/api/ext/list.php",
    "groupTitle": "Ext",
    "name": "PostExtList",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/ext/list"
      }
    ]
  },
  {
    "type": "post",
    "url": "/frs/disLike",
    "title": "\"дизлайкнуть\" (чужой, ложное срабатывание, разонравился)",
    "version": "1.0.0",
    "description": "<p><strong>[в работе]</strong></p> <p>для ленты событий указывать event (flat и face будут проигнорированы), для списка лиц указывать flat или flat и face</p>",
    "group": "FRS",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "event",
            "description": "<p>идентификатор события (для ленты событий)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "flatId",
            "description": "<p>идентификатор квартиры (адрес) (для списка лиц)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "faceId",
            "description": "<p>идентификатор &quot;лица&quot; (для списка лиц)</p>"
          }
        ]
      }
    },
    "filename": "/home/mmikel/projects/domophone/api/frs/disLike.php",
    "groupTitle": "FRS",
    "name": "PostFrsDislike",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/frs/disLike"
      }
    ]
  },
  {
    "type": "post",
    "url": "/frs/like",
    "title": "\"лайкнуть\" (свой)",
    "version": "1.0.0",
    "description": "<p><strong>[в работе]</strong></p>",
    "group": "FRS",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "event",
            "description": "<p>идентификатор события (uuid)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>комментарий</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "-",
            "description": "<p>объект</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "-.faceId",
            "description": "<p>FaceId</p>"
          }
        ]
      }
    },
    "filename": "/home/mmikel/projects/domophone/api/frs/like.php",
    "groupTitle": "FRS",
    "name": "PostFrsLike",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/frs/like"
      }
    ]
  },
  {
    "type": "post",
    "url": "/frs/listFaces",
    "title": "список \"лиц\"",
    "version": "1.0.0",
    "description": "<p><strong>[в работе]</strong></p>",
    "group": "FRS",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "flatId",
            "description": "<p>идентификатор квартиры (адрес)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "-",
            "description": "<p>массив объектов</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "-.faceId",
            "description": "<p>идентификатор &quot;лица&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "-.image",
            "description": "<p>url картинки</p>"
          }
        ]
      }
    },
    "filename": "/home/mmikel/projects/domophone/api/frs/listFaces.php",
    "groupTitle": "FRS",
    "name": "PostFrsListfaces",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/frs/listFaces"
      }
    ]
  },
  {
    "type": "post",
    "url": "/geo/address",
    "title": "адрес дома",
    "version": "1.0.0",
    "description": "<p><strong>[метод готов]</strong></p>",
    "group": "Geo",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "houseId",
            "description": "<p>идентификатор дома</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-",
            "description": "<p>адрес</p>"
          }
        ]
      }
    },
    "filename": "/home/mmikel/projects/domophone/api/geo/address.php",
    "groupTitle": "Geo",
    "name": "PostGeoAddress",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/geo/address"
      }
    ]
  },
  {
    "type": "post",
    "url": "/geo/coder",
    "title": "геокоординаты по адресу",
    "version": "1.0.0",
    "description": "<p><strong>[метод готов]</strong></p>",
    "group": "Geo",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>адрес</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "lat",
            "description": "<p>широта</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "lon",
            "description": "<p>долгота</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>адрес</p>"
          }
        ]
      }
    },
    "filename": "/home/mmikel/projects/domophone/api/geo/coder.php",
    "groupTitle": "Geo",
    "name": "PostGeoCoder",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/geo/coder"
      }
    ]
  },
  {
    "type": "post",
    "url": "/geo/getAllLocations",
    "title": "список населенных пунктов",
    "version": "1.0.0",
    "description": "<p><strong>[метод готов]</strong></p>",
    "group": "Geo",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "-",
            "description": "<p>массив объектов</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "-.locationId",
            "description": "<p>идентификатор населенного пункта</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "-.areaName",
            "description": "<p>наименование района</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.locationName",
            "description": "<p>наименование населенного пункта</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.name",
            "description": "<p>наименование населенного пункта</p>"
          }
        ]
      }
    },
    "filename": "/home/mmikel/projects/domophone/api/geo/getAllLocations.php",
    "groupTitle": "Geo",
    "name": "PostGeoGetalllocations",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/geo/getAllLocations"
      }
    ]
  },
  {
    "type": "post",
    "url": "/geo/getAllServices",
    "title": "список всех возможных услуг",
    "version": "1.0.0",
    "description": "<p><strong>[метод готов]</strong></p>",
    "group": "Geo",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "-",
            "description": "<p>массив объектов</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"internet\"",
              "\"iptv\"",
              "\"ctv\"",
              "\"phone\"",
              "\"cctv\"",
              "\"domophone\"",
              "\"gsm\""
            ],
            "optional": false,
            "field": "-.icon",
            "description": "<p>иконка услуги</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.title",
            "description": "<p>заголовок</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.description",
            "description": "<p>описание</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"t\"",
              "\"f\""
            ],
            "optional": false,
            "field": "-.canChange",
            "description": "<p>доступна смена тарифа</p>"
          }
        ]
      }
    },
    "filename": "/home/mmikel/projects/domophone/api/geo/getAllServices.php",
    "groupTitle": "Geo",
    "name": "PostGeoGetallservices",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/geo/getAllServices"
      }
    ]
  },
  {
    "type": "post",
    "url": "/geo/getHouses",
    "title": "список домов",
    "version": "1.0.0",
    "description": "<p><strong>[метод готов]</strong></p>",
    "group": "Geo",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "streetId",
            "description": "<p>улица</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "-",
            "description": "<p>массив объектов</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "-.houseId",
            "description": "<p>идентификатор дома</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.number",
            "description": "<p>номер дома</p>"
          }
        ]
      }
    },
    "filename": "/home/mmikel/projects/domophone/api/geo/getHouses.php",
    "groupTitle": "Geo",
    "name": "PostGeoGethouses",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/geo/getHouses"
      }
    ]
  },
  {
    "type": "post",
    "url": "/geo/getServices",
    "title": "список доступных услуг",
    "version": "1.0.0",
    "description": "<p><strong>[метод готов]</strong></p>",
    "group": "Geo",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "houseId",
            "description": "<p>дом</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "-",
            "description": "<p>массив объектов</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"internet\"",
              "\"iptv\"",
              "\"ctv\"",
              "\"phone\"",
              "\"cctv\"",
              "\"domophone\"",
              "\"gsm\""
            ],
            "optional": false,
            "field": "-.icon",
            "description": "<p>иконка услуги</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.title",
            "description": "<p>заголовок</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.description",
            "description": "<p>описание</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"t\"",
              "\"f\""
            ],
            "optional": false,
            "field": "-.canChange",
            "description": "<p>доступна смена тарифа</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"t\"",
              "\"f\""
            ],
            "optional": false,
            "field": "-.byDefault",
            "description": "<p>услуга предоставляется по умолчанию</p>"
          }
        ]
      }
    },
    "filename": "/home/mmikel/projects/domophone/api/geo/getServices.php",
    "groupTitle": "Geo",
    "name": "PostGeoGetservices",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/geo/getServices"
      }
    ]
  },
  {
    "type": "post",
    "url": "/geo/getStreets",
    "title": "список улиц",
    "version": "1.0.0",
    "description": "<p><strong>[метод готов]</strong></p>",
    "group": "Geo",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "locationId",
            "description": "<p>локация</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "-",
            "description": "<p>массив объектов</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "-.streetId",
            "description": "<p>идентификатор улицы</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.name",
            "description": "<p>наименование улицы</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.type",
            "description": "<p>тип улицы</p>"
          }
        ]
      }
    },
    "filename": "/home/mmikel/projects/domophone/api/geo/getStreets.php",
    "groupTitle": "Geo",
    "name": "PostGeoGetstreets",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/geo/getStreets"
      }
    ]
  },
  {
    "type": "post",
    "url": "/inbox/alert",
    "title": "отправить сообщение самому себе",
    "version": "1.0.0",
    "description": "<p><strong>[метод готов]</strong></p>",
    "group": "Inbox",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>сообщение</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "action",
            "description": "<p>действие</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"t\"",
              "\"f\""
            ],
            "optional": true,
            "field": "pushOnly",
            "defaultValue": "t",
            "description": "<p>недублировать отправку через SMS</p>"
          }
        ]
      }
    },
    "filename": "/home/mmikel/projects/domophone/api/inbox/alert.php",
    "groupTitle": "Inbox",
    "name": "PostInboxAlert",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/inbox/alert"
      }
    ]
  },
  {
    "type": "post",
    "url": "/inbox/chatReaded",
    "title": "отметить что все сообщения в чате доставлены (прочитаны)",
    "version": "1.0.0",
    "description": "<p><strong>[метод готов]</strong></p>",
    "group": "Inbox",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "filename": "/home/mmikel/projects/domophone/api/inbox/chatReaded.php",
    "groupTitle": "Inbox",
    "name": "PostInboxChatreaded",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/inbox/chatReaded"
      }
    ]
  },
  {
    "type": "post",
    "url": "/inbox/delivered",
    "title": "отметить сообщение как доставленое",
    "version": "1.0.0",
    "description": "<p><strong>[метод готов]</strong></p>",
    "group": "Inbox",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "messageId",
            "description": "<p>идентификатор сообщения</p>"
          }
        ]
      }
    },
    "filename": "/home/mmikel/projects/domophone/api/inbox/delivered.php",
    "groupTitle": "Inbox",
    "name": "PostInboxDelivered",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/inbox/delivered"
      }
    ]
  },
  {
    "type": "post",
    "url": "/inbox/inbox",
    "title": "входящие",
    "version": "1.0.0",
    "description": "<p><strong>[нет верстки]</strong></p>",
    "group": "Inbox",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "-",
            "description": "<p>страничка которую надо отобразить во вьюшке</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.basePath",
            "description": "<p>базовый путь (от которго должна была загрузиться страница)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.code",
            "description": "<p>html страница</p>"
          }
        ]
      }
    },
    "filename": "/home/mmikel/projects/domophone/api/inbox/inbox.php",
    "groupTitle": "Inbox",
    "name": "PostInboxInbox",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/inbox/inbox"
      }
    ]
  },
  {
    "type": "post",
    "url": "/inbox/readed",
    "title": "отметить сообщение (все сообщения) как прочитанное",
    "version": "1.0.0",
    "description": "<p><strong>[метод готов]</strong></p>",
    "group": "Inbox",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "messageId",
            "description": "<p>идентификатор сообщения</p>"
          }
        ]
      }
    },
    "filename": "/home/mmikel/projects/domophone/api/inbox/readed.php",
    "groupTitle": "Inbox",
    "name": "PostInboxReaded",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/inbox/readed"
      }
    ]
  },
  {
    "type": "post",
    "url": "/inbox/unreaded",
    "title": "количество непрочитанных сообщений",
    "version": "1.0.0",
    "description": "<p><strong>[метод готов]</strong></p>",
    "group": "Inbox",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "-",
            "description": "<p>объект</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "-.count",
            "description": "<p>количество непрочитанных сообщений</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "-.chat",
            "description": "<p>наличие непрочитанных сообщений в чате</p>"
          }
        ]
      }
    },
    "filename": "/home/mmikel/projects/domophone/api/inbox/unreaded.php",
    "groupTitle": "Inbox",
    "name": "PostInboxUnreaded",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/inbox/unreaded"
      }
    ]
  },
  {
    "type": "post",
    "url": "/issues/action",
    "title": "выполнить переход",
    "description": "<p><em><strong>нет проверки на пренадлежность заявки именно этому абоненту</strong></em></p>",
    "version": "1.0.0",
    "group": "Issues",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>номер заявки</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "action",
            "description": "<p>действие</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "customFields",
            "description": "<p>дополнительные поля</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "customFields.number",
            "description": "<p>номер поля</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customFields.value",
            "description": "<p>значение поля</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Ошибки",
          "content": "422 неверный формат данных\n417 ожидание не удалось",
          "type": "json"
        }
      ]
    },
    "filename": "/home/mmikel/projects/domophone/api/issues/action.php",
    "groupTitle": "Issues",
    "name": "PostIssuesAction",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/issues/action"
      }
    ]
  },
  {
    "type": "post",
    "url": "/issues/comment",
    "title": "оставить комментарий в заявке",
    "description": "<p><em><strong>нет проверки на пренадлежность заявки именно этому абоненту</strong></em></p>",
    "version": "1.0.0",
    "group": "Issues",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>номер заявки</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>комментарий</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Ошибки",
          "content": "422 неверный формат данных\n417 ожидание не удалось",
          "type": "json"
        }
      ]
    },
    "filename": "/home/mmikel/projects/domophone/api/issues/comment.php",
    "groupTitle": "Issues",
    "name": "PostIssuesComment",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/issues/comment"
      }
    ]
  },
  {
    "type": "post",
    "url": "/issues/create",
    "title": "создать заявку",
    "description": "<p><strong>[метод готов]</strong></p> <p>в cf[11841] всегда (принудительно) прописывается &quot;$userPhone&quot;</p> <p>в cf[11947] всегда (принудительно) прописывается &quot;11208&quot;</p> <p>в cf[11840] всегда (принудительно) прописывается date('d.m.y H:i')</p>",
    "version": "1.0.0",
    "group": "Issues",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "issue",
            "description": "<p>заявка</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "customFields",
            "description": "<p>дополнительные поля</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "actions",
            "description": "<p>действия после создания</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-",
            "description": "<p>созданная заявка</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Ошибки",
          "content": "422 неверный формат данных\n417 ожидание не удалось",
          "type": "json"
        }
      ]
    },
    "filename": "/home/mmikel/projects/domophone/api/issues/create.php",
    "groupTitle": "Issues",
    "name": "PostIssuesCreate",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/issues/create"
      }
    ]
  },
  {
    "type": "post",
    "url": "/issues/listConnect",
    "title": "получить список заявок на подключение",
    "description": "<p><strong>[метод готов]</strong></p> <p>cf[11841]=&quot;$userPhone&quot; and cf[10011]=-1 and Status!=&quot;Выполнено&quot; and Status!=&quot;Закрыто&quot;</p>",
    "version": "1.0.0",
    "group": "Issues",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "-",
            "description": "<p>массив заявок</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.key",
            "description": "<p>номер заявки</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "-.houseId",
            "description": "<p>идентификатор дома</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "-.address",
            "description": "<p>адрес</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"t\"",
              "\"f\""
            ],
            "optional": false,
            "field": "-.courier",
            "description": "<p>доставка курьером</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "-.services",
            "description": "<p>список подключаемых услуг</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Ошибки",
          "content": "422 неверный формат данных\n403 запрещено\n417 ожидание не удалось",
          "type": "json"
        }
      ]
    },
    "filename": "/home/mmikel/projects/domophone/api/issues/listConnect.php",
    "groupTitle": "Issues",
    "name": "PostIssuesListconnect",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/issues/listConnect"
      }
    ]
  },
  {
    "type": "post",
    "url": "/pay/prepare",
    "title": "подготовка к платежу",
    "version": "1.0.0",
    "description": "<p><em><strong>в работе</strong></em></p>",
    "group": "Payments",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "clientId",
            "description": "<p>идентификатор клиента</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>сумма платежа</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-",
            "description": "<p>идентификатор платежа</p>"
          }
        ]
      }
    },
    "filename": "/home/mmikel/projects/domophone/api/pay/prepare.php",
    "groupTitle": "Payments",
    "name": "PostPayPrepare",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/pay/prepare"
      }
    ]
  },
  {
    "type": "post",
    "url": "/pay/process",
    "title": "обработка платежа",
    "version": "1.0.0",
    "description": "<p><em><strong>в работе</strong></em></p>",
    "group": "Payments",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "paymentId",
            "description": "<p>идентификатор платежа</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sbId",
            "description": "<p>присвоенный сбером идентификатор</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-",
            "description": "<p>сообщение пользователю</p>"
          }
        ]
      }
    },
    "filename": "/home/mmikel/projects/domophone/api/pay/process.php",
    "groupTitle": "Payments",
    "name": "PostPayProcess",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/pay/process"
      }
    ]
  },
  {
    "type": "post",
    "url": "/sip/helpMe",
    "title": "звонок в техподержку",
    "version": "1.0.0",
    "description": "<p><em><strong>в работе</strong></em></p>",
    "group": "SIP",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "-",
            "description": "<p>параметры для совершения звонка</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.server",
            "description": "<p>адрес сервера</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "-.port",
            "description": "<p>порт</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"udp\"",
              "\"tcp\"",
              "\"tls\""
            ],
            "optional": false,
            "field": "-.transport",
            "description": "<p>тип подключения</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.extension",
            "description": "<p>внутренний номер (login)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.pass",
            "description": "<p>пароль</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.dial",
            "defaultValue": "429999",
            "description": "<p>куда звонить</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"stun:stun.l.google.com:19302\""
            ],
            "optional": true,
            "field": "-.stun",
            "description": "<p>stun сервер</p>"
          }
        ]
      }
    },
    "filename": "/home/mmikel/projects/domophone/api/sip/helpMe.php",
    "groupTitle": "SIP",
    "name": "PostSipHelpme",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/sip/helpMe"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/addMyPhone",
    "title": "добавить свой телефон",
    "version": "1.0.0",
    "description": "<p><strong>[метод готов]</strong></p>",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>логин</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>пароль</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "comment",
            "description": "<p>комментарий</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"t\"",
              "\"f\""
            ],
            "optional": true,
            "field": "notification",
            "defaultValue": "t",
            "description": "<p>использовать для уведомлений (главный номер, владелец договора)</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Ошибки",
          "content": "403 требуется авторизация\n422 неверный формат данных\n404 пользователь не найден\n410 авторизация отозвана\n424 неверный токен\n449 неверный clientId",
          "type": "json"
        }
      ]
    },
    "filename": "/home/mmikel/projects/domophone/api/user/addMyPhone.php",
    "groupTitle": "User",
    "name": "PostUserAddmyphone",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/user/addMyPhone"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/appVersion",
    "title": "сообщить версию приложения",
    "version": "1.0.0",
    "description": "<p><strong>[метод готов]</strong></p>",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>версия (build) приложения</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"ios\"",
              "\"android\""
            ],
            "optional": false,
            "field": "platform",
            "description": "<p>тип устройства: ios, android</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"none\"",
              "\"upgrade\"",
              "\"forceUpgrade\""
            ],
            "optional": true,
            "field": "-",
            "defaultValue": "none",
            "description": "<p>требуемое действие</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Ошибки",
          "content": "403 требуется авторизация\n422 неверный формат данных\n404 пользователь не найден\n410 авторизация отозвана\n424 неверный токен\n449 неверный clientId\n406 неправильный токен",
          "type": "json"
        }
      ]
    },
    "filename": "/home/mmikel/projects/domophone/api/user/appVersion.php",
    "groupTitle": "User",
    "name": "PostUserAppversion",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/user/appVersion"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/confirmCode",
    "title": "подтвердить телефон",
    "version": "1.0.0",
    "description": "<p><strong>[метод готов]</strong></p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "11",
            "optional": false,
            "field": "userPhone",
            "description": "<p>номер телефона</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "4",
            "optional": false,
            "field": "smsCode",
            "description": "<p>код подтверждения</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Ошибки",
          "content": "401 неверный код подтверждения\n404 запрос не найден\n422 неверный формат данных",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>токен авторизации</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "names",
            "description": "<p>имя и отчество</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "names.name",
            "description": "<p>имя</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "names.patronymic",
            "description": "<p>отчество</p>"
          }
        ]
      }
    },
    "filename": "/home/mmikel/projects/domophone/api/user/confirmCode.php",
    "groupTitle": "User",
    "name": "PostUserConfirmcode",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/user/confirmCode"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/getPaymentsList",
    "title": "получить список договоров для оплаты",
    "version": "1.0.0",
    "description": "<p><em><strong>в работе</strong></em></p>",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "-",
            "description": "<p>все адреса</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "-.houseId",
            "description": "<p>идентификатор дома</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "-.flatId",
            "description": "<p>идентификатор квартиры</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.address",
            "description": "<p>адрес</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "-.accounts",
            "description": "<p>список договоров по адресу</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "-.accounts.clientId",
            "description": "<p>идентификатор клиента</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.accounts.contractName",
            "description": "<p>номер договора</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "-.accounts.contractPayName",
            "description": "<p>номер договора для оплаты</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"t\"",
              "\"f\""
            ],
            "optional": false,
            "field": "-.accounts.blocked",
            "description": "<p>заблокирован</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "-.accounts.balance",
            "description": "<p>баланс</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "-.accounts.bonus",
            "description": "<p>бонусы</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "-.accounts.payAdvice",
            "description": "<p>рекомендуемая сумма к пополнению</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "allowedValues": [
              "\"internet\"",
              "\"iptv\"",
              "\"ctv\"",
              "\"phone\"",
              "\"cctv\"",
              "\"domophone\"",
              "\"gsm\""
            ],
            "optional": false,
            "field": "-.accounts.services",
            "description": "<p>подключенные услуги</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "-.accounts.lcab",
            "description": "<p>личный кабинет</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "-.accounts.lcabPay",
            "description": "<p>страница оплаты в ЛК</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Ошибки",
          "content": "403 требуется авторизация\n422 неверный формат данных\n404 пользователь не найден\n410 авторизация отозвана\n424 неверный токен",
          "type": "json"
        }
      ]
    },
    "filename": "/home/mmikel/projects/domophone/api/user/getPaymentsList.php",
    "groupTitle": "User",
    "name": "PostUserGetpaymentslist",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/user/getPaymentsList"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/notification",
    "title": "управление уведомлениями",
    "version": "1.0.0",
    "description": "<p><em><strong>в работе</strong></em></p>",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"t\"",
              "\"f\""
            ],
            "optional": true,
            "field": "money",
            "description": "<p>присылать сообщения &quot;необходимо пополнить баланс (31<sup>*</sup>,1,3,10)&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"t\"",
              "\"f\""
            ],
            "optional": true,
            "field": "enable",
            "description": "<p>разрешить входящие текстовые сообщения</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"t\"",
              "\"f\""
            ],
            "optional": false,
            "field": "money",
            "description": "<p>присылать сообщения &quot;необходимо пополнить баланс (31<sup>*</sup>,1,3,10)&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"t\"",
              "\"f\""
            ],
            "optional": false,
            "field": "enable",
            "description": "<p>разрешить входящие текстовые сообщения</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Ошибки",
          "content": "403 требуется авторизация\n422 неверный формат данных\n404 пользователь не найден\n410 авторизация отозвана\n424 неверный токен",
          "type": "json"
        }
      ]
    },
    "filename": "/home/mmikel/projects/domophone/api/user/notification.php",
    "groupTitle": "User",
    "name": "PostUserNotification",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/user/notification"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/ping",
    "title": "проверка доступности сервиса",
    "version": "1.0.0",
    "description": "<p><em><strong>готово</strong></em></p>",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Ошибки",
          "content": "403 отсутсвует HTTP_AUTHORIZATION\n422 отсутсвует Bearer\n401 токена нет в базе",
          "type": "json"
        }
      ]
    },
    "filename": "/home/mmikel/projects/domophone/api/user/ping.php",
    "groupTitle": "User",
    "name": "PostUserPing",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/user/ping"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/pushTokens",
    "title": "получить пуш токены для проверки",
    "version": "1.0.0",
    "description": "<p><strong>[метод готов]</strong></p>",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "token-data",
              "\"off\"",
              "\"err\"",
              "null"
            ],
            "optional": false,
            "field": "pushToken",
            "description": "<p>токен сообщений</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "token-data",
              "\"off\"",
              "\"err\"",
              "null"
            ],
            "optional": false,
            "field": "voipToken",
            "description": "<p>VoIP токен</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Ошибки",
          "content": "403 требуется авторизация\n422 неверный формат данных\n404 пользователь не найден\n410 авторизация отозвана\n424 неверный токен\n449 неверный clientId\n406 неправильный токен",
          "type": "json"
        }
      ]
    },
    "filename": "/home/mmikel/projects/domophone/api/user/pushTokens.php",
    "groupTitle": "User",
    "name": "PostUserPushtokens",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/user/pushTokens"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/registerPushToken",
    "title": "зарегистрировать токен(ы) для пуш уведомлений",
    "version": "1.0.0",
    "description": "<p><strong>[метод готов]</strong></p>",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "pushToken",
            "description": "<p>токен</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "voipToken",
            "description": "<p>токен</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"t\"",
              "\"f\""
            ],
            "optional": true,
            "field": "production",
            "defaultValue": "t",
            "description": "<p>использовать боевой сервер для voip пушей (ios only)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"ios\"",
              "\"android\""
            ],
            "optional": false,
            "field": "platform",
            "description": "<p>тип устройства: ios, android</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Ошибки",
          "content": "403 требуется авторизация\n422 неверный формат данных\n404 пользователь не найден\n410 авторизация отозвана\n424 неверный токен\n449 неверный clientId\n406 неправильный токен",
          "type": "json"
        }
      ]
    },
    "filename": "/home/mmikel/projects/domophone/api/user/registerPushToken.php",
    "groupTitle": "User",
    "name": "PostUserRegisterpushtoken",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/user/registerPushToken"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/requestCode",
    "title": "запросить код подтверждения",
    "version": "1.0.0",
    "description": "<p><strong>[метод готов]</strong></p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "11",
            "optional": false,
            "field": "userPhone",
            "description": "<p>номер телефона</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Ошибки",
          "content": "422 неверный формат данных\n429 код уже запрошен",
          "type": "json"
        }
      ]
    },
    "filename": "/home/mmikel/projects/domophone/api/user/requestCode.php",
    "groupTitle": "User",
    "name": "PostUserRequestcode",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/user/requestCode"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/restore",
    "title": "восстановить доступ в ЛК",
    "version": "1.0.0",
    "description": "<p><strong>[метод готов]</strong></p>",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contract",
            "description": "<p>номер договора</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "contactId",
            "description": "<p>контакт на который выслать код подтверждения</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "4",
            "optional": true,
            "field": "code",
            "description": "<p>код подтверждения</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "comment",
            "description": "<p>комментарий</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"t\"",
              "\"f\""
            ],
            "optional": true,
            "field": "notification",
            "defaultValue": "t",
            "description": "<p>использовать для уведомлений (главный номер, владелец договора)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "-",
            "description": "<p>список возможных контактов</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "-.id",
            "description": "<p>идентификтор контакта</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "-.contact",
            "description": "<p>контакт (со звездами)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"email\"",
              "\"phone\""
            ],
            "optional": true,
            "field": "-.type",
            "description": "<p>тип контакта</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Ошибки",
          "content": "403 требуется авторизация\n422 неверный формат данных\n404 пользователь не найден\n410 авторизация отозвана\n424 неверный токен",
          "type": "json"
        }
      ]
    },
    "filename": "/home/mmikel/projects/domophone/api/user/restore.php",
    "groupTitle": "User",
    "name": "PostUserRestore",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/user/restore"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/sendName",
    "title": "установить \"обращение\"",
    "version": "1.0.0",
    "description": "<p><strong>[метод готов]</strong></p>",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>токен авторизации</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>имя</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "patronymic",
            "description": "<p>отчество</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Ошибки",
          "content": "403 требуется авторизация\n422 неверный формат данных\n404 пользователь не найден\n410 авторизация отозвана\n424 неверный токен\n406 неверный тип токена\n400 имя не указано",
          "type": "json"
        }
      ]
    },
    "filename": "/home/mmikel/projects/domophone/api/user/sendName.php",
    "groupTitle": "User",
    "name": "PostUserSendname",
    "sampleRequest": [
      {
        "url": "https://yourserver.yourdomain/api/user/sendName"
      }
    ]
  }
] });
