@ECHO OFF
color 0a
TITLE Node Modules Installer
ECHO Checking for Node.JS
FOR /f "delims=" %%i in ('node -v 2^>nul') DO SET output=%%i
IF "!output!" EQU "" (
    ECHO Node.JS could not be found
    PAUSE
    EXIT
) ELSE (
    NODE init -y 
)
CLS
TITLE Node Modules Installer
ECHO Installing Node Modules
ECHO.
CMD /C NPM i
PAUSE