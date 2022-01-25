const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const { DiscordTogether } = require('discord-together');

client.discordTogether = new DiscordTogether(client);

client.on('messageCreate', async message => { 
    if (message.content.startsWith('!start')) {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'youtube').then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
    };
});

client.on('message', msg => {
  if (msg.content.startsWith('!help')) {
    msg.reply('help');
  }
});

client.on('message', msg => {
  if (msg.content.startsWith('!헉')){
    msg.channel.send('헉;;');
  }
});
client.login(TOKEN);
