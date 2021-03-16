const got = require('got');
const Discord = require('discord.js');

module.exports = {
    name: "funny",
    description: "r/funny",
    type: "reddit"
}

module.exports.run = async (msg) => {
    const subReddits = ["funny","ASX_Bets"];

    const embed = new Discord.MessageEmbed();
    
    console.log('Getting A Random Post');
    
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