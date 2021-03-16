const Discord = require('discord.js')
const got = require('got');

module.exports = {
    name: "randomengland",
    description: "Installer: How many velux windows? Customer: Yes",
    type: "funny",
}

module.exports.run = async (msg) => {
    const subReddits = ["CasualUK","london","britishproblems","LondonUnderground","OldSchoolCool","londonontario"];

    const embed = new Discord.MessageEmbed();
    
    console.log('Getting A Random Meme');
    
    let website = `https://www.reddit.com/r/${subReddits[Math.floor(Math.random() * subReddits.length)]}/random/.json`
    console.log(website)
    got(website).then(response => {
        console.log('Getting Meme Information');

        let content = JSON.parse(response.body);

        console.log('Got Meme Information');

        embed.setTitle(content[0].data.children[0].data.title);
        embed.setColor('RANDOM');
        embed.setFooter(`👍 ${content[0].data.children[0].data.ups} 👎 ${content[0].data.children[0].data.downs} 💬 ${content[0].data.children[0].data.num_comments} - Doge Bot`);
        embed.setURL(`https://reddit.com${content[0].data.children[0].data.permalink}`);
        embed.setImage(content[0].data.children[0].data.url);

        msg.channel.send({embed});
    });
}