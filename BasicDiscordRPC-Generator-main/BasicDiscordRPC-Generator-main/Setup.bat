@ECHO OFF

:: GET CONCENT
CALL :TITLE 
ECHO BY CONTINUING YOU AGREE THAT YOU ARE RELIABLE.
ECHO OTHERWISE EXIT THE PROGRRAM.
PAUSE

:: INTILIZE PROJECT
TEST&CLS
CALL :TITLE
IF EXIST "%ProgramFiles%\nodejs\node.exe" (
    NPM init -y
    NPM i discord-rpc
    NPM i chalk
    TEST&CLS
    CALL :TITLE
    DEL Run.bat
    ECHO node index.js>> Run.bat
) ELSE (
    ECHO You do not have Node.js installed. You can install it from [nodejs.org].
    PAUSE
)

:TITLE
ECHO ----------------------------------------------
ECHO  ######  ######## ######## ##     ## ########  
ECHO ##    ## ##          ##    ##     ## ##     ## 
ECHO ##       ##          ##    ##     ## ##     ## 
ECHO  ######  ######      ##    ##     ## ########  
ECHO       ## ##          ##    ##     ## ##        
ECHO ##    ## ##          ##    ##     ## ##        
ECHO  ######  ########    ##     #######  ##        
ECHO ----------------------------------------------
EXIT /B 0
