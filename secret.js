const Discord = require("discord.js");
const client = new Discord.Client();
const token = 'TOKEN BOT'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', () => {
  client.user.setGame('Spooky Welcomer 24/7', 'https://www.twitch.tv/streamerhouse')
})

client.login('TOKEN BOT');

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'general');
  if (!channel) return;
  channel.send(`:envelope_with_arrow: [+] ${member} :tada: `);
});

client.on('guildMemberAdd', member => {
    member.guild.channels.get('503674599158972417').setName(`Members: ${member.guild.memberCount}`);
});

client.on('guildMemberRemove', member => {
    member.guild.channels.get('503674599158972417').setName(`Members: ${member.guild.memberCount}`);
});
