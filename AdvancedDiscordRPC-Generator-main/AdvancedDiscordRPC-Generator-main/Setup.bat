@ECHO OFF
TITLE AdvancedDiscordRPC Generator Setup
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
ECHO 25%
ECHO Installing NPMs
CMD /C NPM i chalk
CMD /C NPM i discord-rpc
CLS
ECHO 50%
ECHO Installing Files
powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/MyBadProjects/AdvancedDiscordRPC/main/README.md', 'README.md')"
powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/MyBadProjects/AdvancedDiscordRPC/main/Run.bat', 'Run.bat')"
powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/MyBadProjects/AdvancedDiscordRPC/main/Uninstall.bat', 'Uninstall.bat')"
powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/MyBadProjects/AdvancedDiscordRPC/main/index.js', 'index.js')"
CLS
ECHO 100%
ECHO Finished Installing!
PAUSE
