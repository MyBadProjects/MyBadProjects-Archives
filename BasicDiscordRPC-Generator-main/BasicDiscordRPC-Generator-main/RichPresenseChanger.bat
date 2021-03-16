@ECHO OFF
SET /p clientId=ClientID: 
SET /p details=Details: 
SET /p state=State: 
SET /p largeImageKey=Large Image Key: 
SET /p largeImageText=Large Image Text: 
SET /p smallImageKey=Small Image Key: 
SET /p smallImageText=Small Image Text: 
ECHO {"clientID":"%clientId%","details":"%details%","state":"%state%","largeImageKey":"%largeImageKey%","largeImageText":"%largeImageText%","smallImageKey":"%smallImageKey%","smallImageText":"%smallImageText%"}
DEL settings.json
ECHO {"clientID":"%clientId%","details":"%details%","state":"%state%","largeImageKey":"%largeImageKey%","largeImageText":"%largeImageText%","smallImageKey":"%smallImageKey%","smallImageText":"%smallImageText%"}>settings.json
PAUSE
