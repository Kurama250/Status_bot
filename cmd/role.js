/*
Create by Kurama
Github : https://github.com/Kurama250
Licence : Creative commons - CC BY-NC-ND 4.0
*/

const { sendRoleUpdateEmbed } = require('../event/embed');

const membersWithRole = new Set();

function roleHandler(client, roleId, serverId, triggerMessages, webhookClient) {
  const guild = client.guilds.cache.get(serverId);
  if (guild) {
    const members = guild.members.cache;
    members.forEach((member) => {
      const presence = member.presence;
      if (presence && presence.activities) {
        // Recherche du custom status dans toutes les activités
        const customStatus = presence.activities.find(a => a.type === 4);
        const bio = customStatus?.state;
        const role = guild.roles.cache.get(roleId);

        if (bio) {
          const bioLower = bio.toLowerCase();
          if (triggerMessages.some((trigger) => bioLower.includes(trigger))) {
            if (!member.roles.cache.has(roleId) && !membersWithRole.has(member.id)) {
              member.roles.add(roleId)
                .then(() => {
                  console.log(`Role assigned to ${member.user.tag}`);
                  sendRoleUpdateEmbed(member.user.tag, member.user, true, roleId, webhookClient);
                  membersWithRole.add(member.id);
                })
                .catch((error) => {
                  console.error(`Error assigning role : ${error}`);
                });
            }
          }
        }
      }
    });
  }
}

module.exports = { roleHandler };
