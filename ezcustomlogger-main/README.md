# @mybadprojects/ezcustomlogger
This is a basic logging tool which allows you to create your own logger!

```javascript
logs = ""
function log(String, Level) {
    if (logs=="") {
        logs += `[${Level}] ${String}`
    } else {
        logs += `\n[${Level}] ${String}`
    }
}

const ezlogger = require('npm-ezlogger')
ezlogger.callProcess(log)
```