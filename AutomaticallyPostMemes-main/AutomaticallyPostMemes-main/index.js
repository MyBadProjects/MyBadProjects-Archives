/*
    Automatically Post Memes

    - The list of the subreddits is in the .json file.
      You are able to add and/or remove them in the .json file.
*/

/* Node.js Packages */
const Discord = require('discord.js');
const got = require('got');
const ini = require('ini');
const fs = require('fs');

/* 
    INI 

    - This contains the information for the Webhook.
*/

/* Load Ini Config File */
const config = ini.parse(fs.readFileSync('./info/config.ini', 'utf-8'));

/* Parase Ini File */
let WebhookId = config.Webhook.Settings.ID;
let WebhookToken = config.Webhook.Settings.Token;
let TimerSeconds = config.Webhook.Timer.Settings;

/* Check Ini File */
if (WebhookId=='') { console.log('There is no ID!'); return; }
if (WebhookToken=='') { console.log('There is no Token!'); return; }
if (TimerSeconds=='') { console.log('There is no Seconds!'); return; }


/* 
    JSON

    - This contains all the subreddits to get the memes from.
*/

/* Load JSON Subreddit File */
const SubRedditsConfig = require('./info/subreddits.json');

/* Parase JSON File */
const subReddits = SubRedditsConfig.SubReddit;

/* Check JSON File */
if (subReddits=='') { console.log('There is no SubReddits!'); return; }

/*
    Script

    - This is the main part, it automatically posts memes on a timer.
*/

setInterval(() => {
    const embed = new Discord.MessageEmbed();

    console.log('       [Random Memes] Getting A Random Post');

    let website = `https://www.reddit.com/r/${subReddits[Math.floor(Math.random() * subReddits.length)]}/random/.json`
    console.log(website)
    got(website).then(response => {
        console.log('       [Random Memes] Getting Post Information');

        let content = JSON.parse(response.body);

        console.log('       [Random Memes] Got Post Information');

        embed.setTitle(content[0].data.children[0].data.title);
        embed.setColor('RANDOM');
        embed.setFooter(`👍 ${content[0].data.children[0].data.ups} 👎 ${content[0].data.children[0].data.downs} 💬 ${content[0].data.children[0].data.num_comments} - Doge Bot`);
        embed.setURL(`https://reddit.com${content[0].data.children[0].data.permalink}`);
        embed.setImage(content[0].data.children[0].data.url);

        const webhook = new Discord.WebhookClient(WebhookId, WebhookToken);
        webhook.send(msg).catch(console.error);	
    });
}, (TimerSeconds*1000))

