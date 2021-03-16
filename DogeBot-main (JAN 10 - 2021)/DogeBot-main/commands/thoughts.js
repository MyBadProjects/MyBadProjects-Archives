const got = require('got');
const Discord = require('discord.js');

module.exports = {
    name: "thoughts",
    description: "The rain is perfect, the shower is on, what is the Earth is what we are not living on?",
    type: "reddit"
}

module.exports.run = async (msg) => {
    const subReddits = ["Showerthoughts"];

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

        if (msg.channel.nsfw){
            msg.channel.send({embed});
        } else {
            msg.channel.send('The channel you are in is not NSFW! This command requires the channel to be NSFW due to the pure cringe!');
        }
    });
}
