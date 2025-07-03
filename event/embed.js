/*
Create by Kurama
Github : https://github.com/Kurama250
Licence : Creative commons - CC BY-NC-ND 4.0
*/

const { EmbedBuilder } = require('discord.js');

function sendRoleUpdateEmbed(username, user, isAddition, roleId, webhookClient) {
  const color = isAddition ? 0x3498db : 0xe74c3c;
  const action = isAddition ? 'Added' : 'Removed';

  const embed = new EmbedBuilder()
    .setColor(color)
    .setDescription(`${action} the role <@&${roleId}> to ${user.tag}`)
    .setAuthor({ name: username, iconURL: user.displayAvatarURL() })
    .setTimestamp();

  webhookClient.send({ embeds: [embed] }).catch(console.error);
}

module.exports = { sendRoleUpdateEmbed };
