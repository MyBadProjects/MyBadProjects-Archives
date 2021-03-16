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

set /a count=0
:LOOP
set /a count += 1
SET /a NUM=%random:~-1%%random:~-1%%random:~-1%%random:~-1%%random:~-1%%random:~-1%
ECHO %NUM%
ECHO %count%
NODE index.js >> %output%\%count%-%NUM%
IF %count% == %generations% ( GOTO :STOP ) ELSE ( GOTO :LOOP )
:STOP
PAUSE
EXIT
