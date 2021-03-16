@ECHO OFF
SETLOCAL EnableDelayedExpansion
SET ORIGNALLOCAITON=%CD%
TITLE AdvancedDiscordRPC
COLOR 0a
ECHO Do you want to create a custom preset [1], Load current preset [2]?
ECHO.
ECHO Tip:
ECHO Did you know that if you got a different 'infotxt.json' file and replaced the one in INFO it will load that one if you do 'Load current preset'?
SET /p OPTION=
IF %OPTION%==1 GOTO :CREATE
IF %OPTION%==2 GOTO :RUN
EXIT

IF EXIST infotxt.json (
    for /f "delims=" %%x in (infotxt.json) do set infotxt=%%x
    CD %ORIGNALLOCAITON%
    ECHO Setting area up.
    FOR /f %%f IN ('dir /b INFO\') DO DEL %%f
    ECHO Setting area up..
    IF EXIST INFO\ (
        @RD /S /Q INFO\
        MKDIR INFO
    ) ELSE (MKDIR INFO)
    ECHO Setting area up...
    CLS
    ECHO %info% >> INFO/infotxt.json
    GOTO :RUN
)
for /f "delims=" %%x in (infotxt.json) do set infotxt=%%x
echo %CD%
echo %infotxt%
PAUSE
EXIT

:CREATE
ECHO Setting area up.
FOR /f %%f IN ('dir /b INFO\') DO DEL %%f
ECHO Setting area up..
IF EXIST INFO\ (
    @RD /S /Q INFO\
    MKDIR INFO
) ELSE (MKDIR INFO)
ECHO Setting area up...
CLS
ECHO clientID
SET /p clientid=
ECHO details
SET /p details=
ECHO state
SET /p state=
ECHO largeImageKey
SET /p largeImageKey=
ECHO largeImageText
SET /p largeImageText=
ECHO smallImageKey
SET /p smallImageKey=
ECHO smallImageText
SET /p smallImageText=
ECHO startTimestamp (leave empty for current time)
ECHO Example: 2021-01-15T13:43:03.554Z
SET /p startTimestamp=
CLS
ECHO {"clientID":"%clientId%","details":"%details%","state":"%state%","startstamp":"%startTimeStamp%","largeImageKey":"%largeImageKey%","largeImageText":"%largeImageText%","smallImageKey":"%smallImageKey%","smallImageText":"%smallImageText%"} >> INFO/infotxt.json
ECHO Fully Setup!
GOTO :RUN
PAUSE
EXIT

:RUN
NODE index.js
PAUSE
EXIT
