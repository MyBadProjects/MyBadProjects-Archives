@ECHO OFF
SET ORIGNALLOCAITON=%CD%
ECHO Are you sure you want to uninstall? [Y/N]
SET /p check=
if %check%==Y GOTO :CONTINUE
if %check%==y GOTO :CONTINUE
EXIT
:CONTINUE
CMD /C NPM uninstall chalk
CMD /C NPM uninstall discord-rpc
FOR /D %%b IN (*.*) DO DEL %%b /Q
for %%a in (%CD:~0,-1%) DO SET "ParentDir=%%~dpa"
DEL %ORIGNALLOCAITON% /Q
PAUSE