const got = require('got');
const Discord = require('discord.js');

module.exports = {
    name: "cursed",
    description: "Grandma gon see what happens if birthday money be lackin",
    type: "reddit"
}

module.exports.run = async (msg) => {
    const subReddits = ["cursedcomments","cursedcursedcomments","Cursed_Images","cursed_cats","cursedgifs","cursedvideos","MakeMeSuffer","cursedpcimages","cursedpcbuilds","pcabominations","cursedbuilds"];

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
        embed.setDescription(content[0].data.children[0].data.selftext);
        embed.setFooter(`👍 ${content[0].data.children[0].data.ups} 👎 ${content[0].data.children[0].data.downs} 💬 ${content[0].data.children[0].data.num_comments} - Doge Bot`);
        embed.setURL(`https://reddit.com${content[0].data.children[0].data.permalink}`);
        embed.setImage(content[0].data.children[0].data.url);

        msg.channel.send({embed});
    });
}