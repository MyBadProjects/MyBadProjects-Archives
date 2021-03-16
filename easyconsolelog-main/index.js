/* This was minified. To see the source code, go to the GitHub @ github.com/MyBadProjects/easyconsolelog */

const fs = require('fs')

exports.logsOnOff
exports.logsAutosave
exports.logsLocationToSave = "logs.log"
exports.logsLevel 
exports.logsLevelWarns
exports.logs = ""
exports._cLog=true; 

// Private Functions
function callLog(String, Level) {
    if (exports.logsOnOff) {
        if (Level >= exports.logsLevel) {
            if (exports.logs != "") {
                exports.logs += `\n${exports.logsLevelWarns[Level-1]+String}`
            } else {
                exports.logs += exports.logsLevelWarns[Level-1]+String
            }
        }

        if (exports.logsAutosave) {
            fs.writeFile(exports.logsLocationToSave, exports.logs, 'utf8', function (e) {
                if (e) return console.log(e)
            })
        }
    }
}

function writeText(String) {
    if(exports._cLog) {
        process.stdout.write(String)
        exports._cLog=false
    } else {
        process.stdout.write('\n'+String)
    }
}

// Logging
exports.resetLogs = function() {
    exports.logsOnOff = false
    exports.logsAutosave = false
    exports.logsLocationToSave
    exports.logsLevel = 2
    exports.logsLevelWarns = ["","Warning: ","ERROR: "]
    exports.logs = ""
}

exports.log = function (Toggle) {
    if (Toggle==true) {
        exports.logsOnOff = true
    } else if (Toggle==false) {
        exports.logsOnOff = false
    } else {
        console.error('Invalid toggle!')
    }
}

exports.logLocation = function (String) {
    exports.logsLocationToSave = String
}

exports.setLevel = function (Level) {
    if (Level == 1) { exports.logsLevel = 1 }
    else if (Level == 2) { exports.logsLevel = 2 }
    else if (Level == 3) { exports.logsLevel = 3 }
    else { console.error('Invalid level!')}
}

exports.saveLog = function() {
    fs.writeFile(exports.logsLocationToSave, exports.logs, 'utf8', function (e) {
        if (e) return console.log(e)
    })
}

exports.getLog = function() {
    return exports.logs
}

exports.autoSave = function(Toggle) {
    if (Toggle==true) {
        exports.logsAutosave = true
    } else if (Toggle==false) {
        exports.logsAutosave = false
    } else {
        console.error('Invalid toggle!')
    }
}

exports.getSettings = function() {
    return JSON.stringify({
        "onOff":exports.logsOnOff,
        "autoSave":exports.logsAutosave,
        "locationToSave":exports.logsLocationToSave,
        "level":exports.logsLevel,
        "levelWarnings":exports.logsLevelWarns,
    })
}

exports.loadSettings = function(String) {
    input = JSON.parse(String)
    exports.logsOnOff = input.onOff
    exports.logsAutosave = input.autoSave
    exports.logsLocationToSave = input.locationToSave
    exports.logsLevel = input.level
    exports.logsLevelWarns = input.levelWarnings
}

// Print, Error and Warn
exports.print = function(String) {
    writeText(String)
    callLog(String, 1)
}

exports.warn = function(String) {
    writeText(String)
    callLog(String, 2)
}

exports.error = function(String) {
    writeText(String)
    callLog(String, 3)
}

exports.help = function() {
    console.log(`This adds features such as print(), warn() and error()!
    To use them do (example function used = print):
    print('Hello world!')
    
    Please note that this will not be saved in the logs.`)
}

exports.info = function(String) {
    console.log(String)
    callLog(String, 1)
}