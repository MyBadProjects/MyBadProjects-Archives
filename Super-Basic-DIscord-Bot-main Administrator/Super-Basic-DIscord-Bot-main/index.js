// Console Log Strings
var line = "\n--------------------\n";

// Discord Variables
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
var token;

// NPMS
const Cryptr = require('cryptr');
const fs = require('fs');

// Decrypt Token
console.log(`${line}Decrypting Key${line}`);
fs.readFile('!0_SECURITY/JAVASCRIPT_SECURITY_PROGRAMS/!0_ENCRYPT/key', 
    function (err, data) {
        if (err) throw err;
        console.log('  Read Key');
        fs.readFile('!0_SECURITY/JAVASCRIPT_SECURITY_PROGRAMS/encryptedToken',
            function (err2, data2) {
                if (err2) throw err2;
                console.log('  Read Encrypted Token');

                try {
                    const cryptr = new Cryptr(data.toString('utf8'));
                    token = cryptr.decrypt(data2);
                    console.log('  Decrypted Token');
                } catch (err3) {
                    console.log('An error occured whilst decrypting the token!');
                    throw err3;
                }
            })
    })

setTimeout(() => {
    console.log(`${line}Waiting for token${line}`); 
    console.log(`  Recieved token!`);
    bootClient();
}, 100);


function bootClient() {
    // Setup Prefix
    var prefix = fs.readFile('!1_BOT_INFO/prefix', 
    function(err, data) {
        if (err) throw err;

        prefix = data
    });

    // Setup Commands
    console.log(`${line}Scanning Commands${line}`); 
    
    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        console.log(`  [CommandLoader] Located ${file}`);

        const command = require(`./commands/${file}`);

        client.commands.set(command.name, command);

        console.log(`  [CommandLoader] Imported ${command.name}`)
    }

    // Load Client

    client.once('ready', () => {
        console.log(`${line}Booting Client${line}`); 
        console.log(`  Booted Client`); 
        console.log(`${line}Client${line}\n  Client User: ${client.user.tag}\n  Prefix: ${prefix}`);
        console.log(`${line}Chat Logs${line}`);
    })
    
    client.on('message', msg => {
        // Log Chat
        if (!msg.author.bot) console.log("\x1b[0m",`  [Username: ${msg.author.username} | ID: ${msg.author.id}]: ${msg.content}`); else console.log("\x1b[41m",`  [ (BOT) Username: ${msg.author.username} | ID: ${msg.author.id}]: ${msg.content}`);

        // Commands
        if (msg.author.bot) return;

        const args = msg.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        if (msg.content.includes(prefix,0)){
            const command = client.commands.get(commandName);

            try {
                command.execute(msg, args, client.commands, client);
            } catch (err) {
                msg.reply("An error occured whilst executing that command.");
                throw err;
            }
        }
    });


    client.login(token);
}