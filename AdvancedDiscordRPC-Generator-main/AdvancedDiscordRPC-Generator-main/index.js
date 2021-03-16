const RPC = require('discord-rpc');
const rpc = new RPC.Client({transport: 'ipc',});
const chalk = require('chalk');
const settings = require('./INFO/infotxt.json');
const details = settings.details;
const state = settings.state;
const largeImageKey = settings.largeImageKey;
const largeImageText = settings.largeImageText;
const smallImageKey = settings.smallImageKey;
const smallImageText = settings.smallImageText;
const clientID = settings.clientID;
const startTimestamp = settings.startTimestamp;
if (settings.startTimestamp == "") {
    rpc.on('ready', () => {
        rpc.setActivity({details:details,state:state,startTimestamp:new Date(),largeImageKey:largeImageKey,largeImageText:largeImageText,smallImageKey:smallImageKey,smallImageText:smallImageText});
        console.log(chalk.green(`Rich Prescence is on: ${rpc.user.username}`))
    });
    rpc.login({clientId:clientID})
} else {
    rpc.on('ready', () => {
        rpc.setActivity({details:details,state:state,startTimestamp:startTimestamp,largeImageKey:largeImageKey,largeImageText:largeImageText,smallImageKey:smallImageKey,smallImageText:smallImageText});
        console.log(chalk.green(`Rich Prescence is on: ${rpc.user.username}`))
    });
    rpc.login({clientId:clientID})
}