/*
Create by Kurama
Github : https://github.com/Kurama250
Licence : Creative commons - CC BY-NC-ND 4.0
*/

function setBotStatus(client) {
  client.user.setPresence({
    status: 'dnd',
    activities: [{ name: 'github.com/Kurama250', type: 5 }],
  });
}

function handleReadyEvent(client) {
console.log('---------------------------------------------------------');
console.log('                      Status_bot                         ');
console.log('            Create by github.com/Kurama250               ');
console.log('Licence : Creative commons - CC BY-NC-ND 4.0 by Kurama250');
console.log('---------------------------------------------------------');
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
