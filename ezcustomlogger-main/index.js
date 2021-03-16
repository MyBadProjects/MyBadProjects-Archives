var name = 'ezcustomlogger'

var _cLog=true; 
var toCall = defaultError

function write(input) {
    if(_cLog) {
        process.stdout.write(input)
        _cLog=false
    } else {
        process.stdout.write('\n'+input)
    }
}

function defaultError(unknown,unknown2) {
    write('You have not changed the callProcess!\nYou can do this by ezlogger.callProcess(function)\nThe functions must be referenced (without any args)\n\nExample:\nconst ezlogger=require("'+name+'")\nfunction test()\n{\n   console.log("Works")\n}\nezlogger.callProcess(test)\n- Please note that this was not logged.')
}

exports.callProcess = function(toCallThisFunctionAfterEachLog) {
    toCall = toCallThisFunctionAfterEachLog
}

console.log = function(String) { 
    write(String.toString())
    toCall(String, 1)
}

console.warn = function(String) { 
    write(String.toString())
    toCall(String, 2)
}

console.error = function(String) { 
    write(String.toString())
    toCall(String, 3)
}
