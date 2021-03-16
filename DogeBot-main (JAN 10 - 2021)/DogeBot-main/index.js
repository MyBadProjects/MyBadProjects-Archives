// Console Log Strings
var line = "\n--------------------\n";

// NPMs
const db = require('quick.db');
const fs = require('fs');
const DisTube = require('distube');
const got = require('got');

// Discord Variables
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
client.distube = new DisTube(client, { searchSongs: false, emityNewSongOnly: true, leaveOnFinish: true })
const {
	prefix,
	token
} = require('./Bot Information/config.json');
client.prefix = prefix;
client.token = token;
client.commandsAmount = 0;

// Moderation Info
const moderationInfo = require('./Bot Information/moderate.json');

// Commands Info
const asynccmds = require('./Bot Information/async_commands.json');
const autopostmemeservers = require('./Bot Information/autopostmemes_servers_info.json');

// Load Commands
console.log(`${line}Scanning Commands${line}`); 

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	console.log(`  [CommandLoader] Located ${file}`);

	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);

	console.log(`  [CommandLoader] Imported ${command.name}`)

	client.commandsAmount++;
}

// Load Client
client.once('ready', () => {
	console.log(`${line}Booting Client${line}`); 
	console.log(`  Booted Client`); 
	console.log(`${line}Client${line}\n  Client User: ${client.user.tag}\n  Prefix: ${prefix}`);
	console.log(`${line}Chat Logs${line}`);
	client.user.setActivity({ 
		type: "PLAYING", 
		name: 'Halo 3 - pwning noobs on 69420 servers' 
	})
	postMemes();
})

// Run Command From Command Handler
client.on('message', async(msg) => {
	

	// Prevent Bot From Breaking
	if (!msg.channel.type=='text') return;
	if (msg.channel.type=='dm') return;
	if (msg.channel.type=='news') return;
	if (msg.author.bot) return;
	
	// Log Chat
	console.log(`[MSG] ${msg.author.id} [${msg.author.tag}] | [ ${getDateTime()} ] ${msg.content}`);

	if (db.get(`msg_${msg.author.id}`)) {
		db.set(`msg_${msg.author.id}`, `${db.get(`${msg.author.id}`)} |\n[ TIME: ${getDateTime()} ] MESSAGE: ${msg.content} [ GUILD: ${msg.guild.id} ]`);
	} else {
		db.set(`msg_${msg.author.id}`, `[ TIME: ${getDateTime()} ] MESSAGE: ${msg.content} [ GUILD: ${msg.guild.id} ]`);
	}

	try {
		const mem=msg.member;
		if (!mem.hasPermission('ADMINISTRATOR')){
			let confirm;
	
			moderationInfo.swears.forEach(string => {
				if (msg.content.toLowerCase().includes(string.toLowerCase())) {
					confirm = true;
				};
			});
	
	
			if (confirm==true){
				const user = msg.mentions.users.first();
				const id = msg.mentions.users.first().id;
	
				if (db.get(`warn_${id}_${msg.guild.id}`)) {
					if(db.get(`warn_${id}_${msg.guild.id}`)=='1'){
						db.set(`warn_${id}_${msg.guild.id}`, `2`);
						msg.mentions.members.first().kick(`Warning 2`);
						msg.channel.send(`Warned ${user}`);
					}else if(db.get(`warn_${id}_${msg.guild.id}`)=='2'){
						db.set(`warn_${id}_${msg.guild.id}`, `3`);
						try {
							msg.guild.members.ban(user, { reason: `Warning 3` });
							msg.channel.send(`Warned ${user}`);
						} catch (err) {
							msg.channel.send(`Failed to warn ${user}`);
						}
					}
				} else {
					msg.channel.send(`Warned ${user}`);
					db.set(`warn_${id}_${msg.guild.id}`, `1`);
				}
			}
		} else {
			let confirm;
	
			moderationInfo.swears.forEach(string => {
				if (msg.content.toLowerCase().includes(string.toLowerCase())) {
					confirm = true;
				};
			});
	
	
			if (confirm==true){
				if (msg.deletable) msg.delete();
			}
		}
	} catch (err) {
		console.log(err);
	}
	
	if(db.get(`${msg.channel.guild.id}_responses`)==1){
		let done = 0;

		// Funny Numbers
		var funnyNumbers = ["69","420","69420","42069"];
		var funnyNumbersOutput = ["nice","bruh","bruh funny","certified bruh classic","certified noice classic"];

		funnyNumbers.forEach(string => {
			if (msg.content.toLowerCase()==string.toLowerCase()) {
				if (done == 0){
					msg.channel.send(funnyNumbersOutput[Math.floor(Math.random() * funnyNumbersOutput.length)]);
					done = 1;
				}
			}
		});

		// Doge
		var dogeWords = ["doge","dog","dogg","doggo"];
		var dogeWordsOutput = ["bruh","doge is better","such mlg","such rekt","y u annoy me","doge concentrate"];
		var dogeWordsOwnersOutput = ["lmao u bad at halo 3 i bet u play on a 1999 dell macintosh","bruh i gladly will rebell against u","ur pfp is from a basic google search","bruv u created this response, not my fault m8","i will mlg 9/9 420 noscope you with my dank sprite can","do u even play halo 3 m8 lol","i bet u dont even play any good games lol"];

		dogeWords.forEach(string => {
			if (msg.content.toLowerCase()==string.toLowerCase()) {
				if (done == 0){
					if (msg.author.id==741348869337776168) {
						msg.reply(dogeWordsOwnersOutput[Math.floor(Math.random() * dogeWordsOwnersOutput.length)]);
						done = 1;
						return; // This prevents an error saying that the command does not exist
					} else {
						msg.reply(dogeWordsOutput[Math.floor(Math.random() * dogeWordsOutput.length)]);
						done = 1;
						return; // This prevents an error saying that the command does not exist
					}
				}
			}
		});
	}

	const args = msg.content.slice(prefix.length).trim().split(/ +/g);

	const commandName = args.shift().toLowerCase();	

	if (msg.mentions.everyone) {
		db.set(`SNIPE.${msg.guild.id}.CONTENT`,`${msg.content}`);
		db.set(`SNIPE.${msg.guild.id}.CHANNEL`,`${msg.channel.id}`);
		db.set(`SNIPE.${msg.guild.id}.USER`,`${msg.author.tag} (${msg.author.id})`);
	}
	

	if (msg.content.startsWith(prefix)){
		try {
			let type = 0;
			asynccmds.commands.forEach(string => {
				if (msg.content.toLowerCase==`${prefix}${string}`) type = 1;
			});

			if (type==1){
				const command = client.commands.get(commandName);
				command.run(msg, args, client.commands, client, prefix);

				msg.channel.send('If you do not see the image, click on the link.')
			} else {
				const command = client.commands.get(commandName);
				command.execute(msg, args, client.commands, client, prefix);
			}
		} catch (err) {
			console.log(err)
		}
	}
});

client.login(token);


// Get Date
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

// Automate Distube Messages
const status = queue => `Volume: \`${queue.volume}%\` | Filter: \`${queue.filter || "Off"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode === 2 ? "All Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``

client.distube
    .on("playSong", (message, queue, song) => message.channel.send(
        `Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}\n${status(queue)}`
    ))
    .on("addSong", (message, queue, song) => message.channel.send(
        `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
    ))
    .on("playList", (message, queue, playlist, song) => message.channel.send(
        `Play \`${playlist.title}\` playlist (${playlist.total_items} songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`
    ))
    .on("addList", (message, queue, playlist) => message.channel.send(
        `Added \`${playlist.title}\` playlist (${playlist.total_items} songs) to queue\n${status(queue)}`
    ))
    .on("searchResult", (message, result) => {
        let i = 0
        message.channel.send(`**Choose an option from below**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n*Enter anything else or wait 60 seconds to cancel*`)
    })
	.on("searchCancel", message => message.channel.send(`Searching canceled`));

function postMemes() {
	setInterval(() => { // This is better than setTimeout as it automattically loops without the function having to be called again.
		autopostmemeservers.autopostmemes.forEach(string => {
			if (db.get(`${string}_autopost`)==1) {
				const id = db.get(`${string}_id`);
				const token = db.get(`${string}_token`);
				if (id) console.log('Found Id'); else console.log('Could not find Id');
				if (token) console.log('Found Token'); else console.log('Could not find Token');
		
				const webhook = new Discord.WebhookClient(id, token);
		
				const subReddits = ["dankmeme","meme","me_irl","i_irl","meirl","memeeconomy","bikinibottomtwitter","trippinthroughtime","data_irl","blackpeopletwitter","whitepeopletwitter","boottoobig","bonehurtingjuice", "dankchristianmemes", "fakehistoryporn", "historymemes", "musicmemes", "kenm", "meow_irl", "woof_irl", "prequelmemes", "sequelmemes", "OTmemes", "youdontsurf", "starterpacks","2meirl4meirl","wholesomememes","OnlyWholesomeMemes","nextfuckinglevel","memes","dankexchange"];
				let website = `https://www.reddit.com/r/${subReddits[Math.floor(Math.random() * subReddits.length)]}/random/.json`
	
				got(website).then(response => {
					let content = JSON.parse(response.body);
					
					const msg = new Discord.MessageEmbed()
						.setColor(0xbc3434)
						.setTitle(content[0].data.children[0].data.title)
						.setDescription(content[0].data.children[0].data.selftext)
						.setFooter(`👍 ${content[0].data.children[0].data.ups} 👎 ${content[0].data.children[0].data.downs} 💬 ${content[0].data.children[0].data.num_comments} - Doge Bot`)
						.setImage(content[0].data.children[0].data.url);
						
						webhook.send(msg).catch(console.error);	
				});

				console.log('Posted Meme');
			}
			console.log('Found Server');
		});

		// Post ducc images
		const webhook = new Discord.WebhookClient('804409129254256650', '2UIijORjBmahz7DCrK2osnxxcOm9yWabPu6KGW1BeUtEM6bh0o893bDdiSIGC7zCeKkP');
		
		const subReddits = ["duck","ducc"];
		let website = `https://www.reddit.com/r/${subReddits[Math.floor(Math.random() * subReddits.length)]}/random/.json`

		got(website).then(response => {
			let content = JSON.parse(response.body);
			
			const msg = new Discord.MessageEmbed()
				.setColor(0xbc3434)
				.setTitle(content[0].data.children[0].data.title)
				.setDescription(content[0].data.children[0].data.selftext)
				.setFooter(`👍 ${content[0].data.children[0].data.ups} 👎 ${content[0].data.children[0].data.downs} 💬 ${content[0].data.children[0].data.num_comments} - Doge Bot`)
				.setImage(content[0].data.children[0].data.url);
				
				webhook.send(msg).catch(console.error);	
		});

		console.log('Posted Ducc');
	},300000);
}

