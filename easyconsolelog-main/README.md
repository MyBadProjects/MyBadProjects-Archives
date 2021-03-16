# easyconsolelog
This is designed to easily be used instead of stuff like console.log(). 
I created this because I am heavily adjusted to using print() rather than console.log so I don't get confused.

## How to implement

To easily implement it do (for the non-logging):
```javascript
const {print,warn,error} = require('easyconsolelog')
```

To use it (for the non-logging features) you can do:
```javascript
const {print,warn,error,info} = require('easyconsolelog')

print('Print')
warn('Warn')
error('Error')
info('Info')
```

To use it **with** the *basic* logging features do: (as of 1.0.4)
```javascript
const {setLevel,logLocation,autoSave,print,info,warn,error,saveLog,getLog,log,resetl,getSettings,loadSettings} = require('@mybadprojects/easyconsolelog')

resetl() // Resets logs
setLevel(1) // Changes logs level
logLocation('logs.log') // Changes where the logs are saved
log(true) // Enables logging
autoSave(true) // Enables auto-save
print('Print1') // Prints 'Print1' - LVL1
info('Print2') // Prints 'Print2' - LVL1
warn('Warn1') // Sends a warning saying 'Warn1' - LVL2
error('Error12') // Sends an error saying 'Error12' - LVL3
saveLog() // Saves logs manually
print(getLog()) // Prints logs
print(getSettings()) // Prints settings
```

To load settings in through a JSON string do:
```javascript
loadSettings('{"onOff":true,"autoSave":true,"locationToSave":"logs.log","level":1,"levelWarnings":["","Warning: ","ERROR: "]}')
```

#### By the way
If you want to change the variables manually then you can access then as they are exported.
The following are their names:
```javascript
exports.logsOnOff
exports.logsAutosave
exports.logsLocationToSave
exports.logsLevel 
exports.logsLevelWarns
exports.logs
```

## Plans for the next update:
### Logs
This would mean there would be a function of log() and logLoaction() which would be used as

```javascript
logsOnOff = true
logsLocationToSave = "logs.log"
log(logsOnOff) // This would only accept true & false
logLocation(logsLocationToSave) // This would only accept strings
```

This would allow logs to be toggles and a location for the logs to be saved to.


# Information
## Licence: GPL 3.0
## How versions work:

Update 1.0.321 explained simply:
```
Edition = 1
Release = 0
Version = 3
UpdateOfVersion = 2
Patch = 1
```

This is basically (as a string):
```javascript
version = `${Edition}.${Release}.${Version}${UpdateOfVersion}${Patch}`
```

It looks confusing but it is just best to stick with the newest one.
