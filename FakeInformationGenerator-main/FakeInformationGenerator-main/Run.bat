@ECHO OFF
setlocal EnableDelayedExpansion

ECHO %DATE%-%TIME%
ECHO Where do you want to save the output (1 file per generation)?
SET /p output=
CLS
ECHO How many generations do you want to do?
SET /p generations=
SET "var="&FOR /f "delims=0123456789" %%i IN ("%generations%") DO SET var=%%i
IF DEFINED var (ECHO Input Not Numeric)
CLS
ECHO Do you want to save the files as JSON or plain text?
SET /p type=[Y/N] 
set /a count=0
IF %type%==Y GOTO :LOOPJSON
IF %type%==y GOTO :LOOPJSON
GOTO :LOOP

:LOOP
IF %count%==0 ( ECHO PLAIN TEXT )
set /a count += 1
SET /a NUM=%random:~-1%%random:~-1%%random:~-1%%random:~-1%%random:~-1%%random:~-1%
ECHO %NUM%
ECHO %count%
NODE plaintext.js >> %output%\%count%-%NUM%.txt
IF %count% == %generations% ( GOTO :STOP ) ELSE ( GOTO :LOOP )
:STOP
PAUSE
EXIT

:LOOPJSON
IF %count%==0 ( ECHO JSON )
set /a count += 1
SET /a NUM=%random:~-1%%random:~-1%%random:~-1%%random:~-1%%random:~-1%%random:~-1%
ECHO %NUM%
ECHO %count%
NODE json.js >> %output%\%count%-%NUM%.json
IF %count% == %generations% ( GOTO :STOP ) ELSE ( GOTO :LOOPJSON )
:STOP
PAUSE
EXIT