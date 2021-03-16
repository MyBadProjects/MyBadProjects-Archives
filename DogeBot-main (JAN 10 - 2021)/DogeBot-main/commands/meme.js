const Discord = require('discord.js')
const got = require('got');

module.exports = {
    name: "meme",
    description: "This posts some dank memes.",
    type: "reddit"
}

module.exports.run = async (msg) => {
    const subReddits = ["dankmeme","meme","me_irl","i_irl","meirl","memeeconomy","bikinibottomtwitter","trippinthroughtime","data_irl","blackpeopletwitter","whitepeopletwitter","boottoobig","bonehurtingjuice", "dankchristianmemes", "fakehistoryporn", "historymemes", "musicmemes", "kenm", "meow_irl", "woof_irl", "prequelmemes", "sequelmemes", "OTmemes", "youdontsurf", "starterpacks","2meirl4meirl","wholesomememes","OnlyWholesomeMemes","nextfuckinglevel","memes","dankexchange"];

    const embed = new Discord.MessageEmbed();
    
    console.log('Getting A Random Post');
    
    let website = `https://www.reddit.com/r/${subReddits[Math.floor(Math.random() * subReddits.length)]}/random/.json`
    console.log(website)
    got(website).then(response => {
        console.log('Getting Post Information');

        let content = JSON.parse(response.body);

        console.log('Got Post Information');

        embed.setTitle(content[0].data.children[0].data.title);
        embed.setColor('RANDOM');
        embed.setFooter(`👍 ${content[0].data.children[0].data.ups} 👎 ${content[0].data.children[0].data.downs} 💬 ${content[0].data.children[0].data.num_comments} - Doge Bot`);
        embed.setURL(`https://reddit.com${content[0].data.children[0].data.permalink}`);
        embed.setImage(content[0].data.children[0].data.url);

        msg.channel.send({embed});
    });
}