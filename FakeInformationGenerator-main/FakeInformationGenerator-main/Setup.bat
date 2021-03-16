@ECHO OFF
TITLE Setup
ECHO Do you want to install FakeInformationGenerator? 
ECHO Please note that this tool is designed only for testing.
ECHO [Y/N]
SET /p InstallContinue=
IF %InstallContinue%==Y GOTO :INSTALL
IF %InstallContinue%==y GOTO :INSTALL
IF %InstallContinue%==N EXIT
IF %InstallContinue%==n EXIT

:INSTALL
CLS
ECHO 0%
ECHO Checking for Node.JS
for /f "delims=" %%i in ('node -v 2^>nul') do set output=%%i
IF "!output!" EQU "" (
    ECHO Node.JS could not be found
    PAUSE
    EXIT
) else (
    NODE init -y 
)
CLS
ECHO 50%
ECHO Installing NPMs
CMD /C NPM i faker
CMD /C NPM i quick.db
CLS
ECHO 100%
ECHO Finished Installing!
PAUSE