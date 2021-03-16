const db = require('quick.db');
const Discord=require('discord.js');
const fs = require('fs');
const path = require('path');
const {
    token,
    prefix
} = require('./info/config.json')

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.queue = new Map();

// load commands
console.log('Scanning Commands'); 
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    console.log(`   Located ${file}`);
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
    console.log(`   Imported ${command.name}`)
}


client.on("ready", () => {
    console.log(`${client.user.username} is now Online`);
})

client.on('message', async(msg) => {
    // log msgs
    console.log(`${msg.author.id} | [ ${getDateTime()} ] ${msg.content}`);
    
    if (db.get(`${msg.author.id}`)) {
        db.set(`${msg.author.id}`, `${db.get(`${msg.author.id}`)} |\n[ ${getDateTime()} ] ${msg.content}`);
    } else {
        db.set(`${msg.author.id}`, `[ ${getDateTime()} ] ${msg.content}`);
    }
    
    // filter msgs
    if(msg.author.bot)return;
    if(!msg.guild)return;
    if(!msg.content.toLowerCase().startsWith(prefix))return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if(!client.commands.get(commandName))return;
    client.commands.get(commandName).execute(msg, client, args);
})

client.login(token);

// get date
function getDateTime() {
    var date = new Date();
    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;
    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;
    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;
    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;
    return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;

}