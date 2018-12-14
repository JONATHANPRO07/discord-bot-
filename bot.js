const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'help') {
    	message.reply(' @everyone no spaming more coming. ');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(BOT_TOKEN);
