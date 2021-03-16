# Custom-Discord-RPC
This contains index.js, The file powering the Custom Rich Presence, RichPresenseChanger.bat, The tool ideally used to change and add the settings.bat file, Setup.bat, The file which installs and prepares the area of which the program will be kept for the program, allowing it to work and run.

This is free and open source.

It is based off a JavaScript runtime called 'Node.js'. It uses two npms, discord-rpc (installation can be found at line 14 in Setup.bat) and calk (installation can be found at line 15 in Setup.bat).

The 3 pieces of this make up to a console-based interface with simplicity.


## Setup.bat
### What does Setup.bat do and what is it for?
Setup.bat is the installation file. It removes most of the manual process of having to set up the area with commands such as 'npm init' and 'npm i discord-rpc' and it replaces it with just opening 1 file. This also helps decrease the original download file of the 3 files, totaling to around 2-3kb of files when extracted.

### Why did I implement Setup.bat?
I implemented Setup.bat for ease of use and to make the feel seem 'better'.

## RichPresenseChanger.bat
### What does RichPresenseChanger.bat do and what is it for?
RichPresenseChanger.bat is a .bat file which generates the settings.json file using the required information which you will be needed to provide.

### Why did I implement RichPresenseChanger.bat
The reason why I implemented RichPresenseChanger.bat was so you can easily generate and create the file containing the information required for the program to work.

## index.js
### What does RichPresenseChanger.bat do and what is it for?
index.js is the main file, the key. It powers the Custom Rich Presense, whilst it runs you get the Rich Presense.

### Why did I implement index.js
index.js is a required file as it powers the whole concept of this project.


## Extra files

### Run.bat
This starts the program, it automatically runs 'node index.js' for you.

### settings.json
This contains the information from RichPresenseChanger.bat for the program to easily access.


## What does the work/run on?
This **whole** project **only** runs on Windows. The **index.js** file it self, with all the required packages, it *should* be able to run on operating systems such as Windows, macOS, Linux, FreeBSD, and possibly more. **ONLY WINDOWS HAS BEEN TESTED**




This was made by MyBadProjects

GitHub: github.com/MyBadProjects
