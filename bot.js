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
client.login(NTE4NzM0NzE2Njk0ODIyOTEy.DvU3cA.DLnrk4OoacExigX94rk9k_hMqOU);
