/*
Create by Kurama
Github : https://github.com/Kurama250
Licence : Creative commons - CC BY-NC-ND 4.0
*/

const { MessageEmbed } = require('discord.js');

function setBotStatus(client) {
  client.user.setPresence({
    status: 'dnd',
    activities: [{ name: '...', type: 'PLAYING' }],
  });
}

function handleReadyEvent(client) {
console.log(`-----------------------------------------`);
console.log(`   Bot create by github.com/Kurama250    `);
console.log(`                 V1.0                    `);
console.log(`-----------------------------------------`);
  console.log(`Bot connected to ${client.user.tag}`);
  setBotStatus(client);

  const guilds = client.guilds.cache;
  const serverCount = guilds.size;

  console.log(`Bot is in ${serverCount} servers:`);
  guilds.forEach((guild) => {
    console.log(`- ${guild.name} (ID: ${guild.id})`);
    console.log(`-----------------------------------------`);
  });
}

module.exports = { handleReadyEvent, setBotStatus };
