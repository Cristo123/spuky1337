const Discord = require("discord.js");
const client = new Discord.Client();
const token = 'NTAzNjY0MTYxNDIzNjIyMTU1.Dq52dw.b84_tWLGgjOOxFAkKIPVf4q_wA0'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', () => {
  client.user.setGame('Spooky Welcomer 24/7', 'https://www.twitch.tv/streamerhouse')
})

client.login('NTAzNjY0MTYxNDIzNjIyMTU1.Dq52dw.b84_tWLGgjOOxFAkKIPVf4q_wA0');

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'general');
  if (!channel) return;
  channel.send(`:envelope_with_arrow: [+] ${member} :tada: `);
});

client.on('guildMemberAdd', member => {
    member.guild.channels.get('503670685747642368').setName(`Members: ${member.guild.memberCount}`);
});

client.on('guildMemberRemove', member => {
    member.guild.channels.get('503670685747642368').setName(`Members: ${member.guild.memberCount}`);
});
