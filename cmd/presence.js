/*
Create by Kurama
Github : https://github.com/Kurama250
Licence : Creative commons - CC BY-NC-ND 4.0
*/

const { sendRoleUpdateEmbed } = require('../event/embed');

function handlePresenceUpdate(client, roleId, membersWithRole, triggerMessages, webhookClient) {
  return (oldPresence, newPresence) => {
    if (!newPresence || !newPresence.member || !newPresence.guild) return;

    const customStatus = newPresence.activities.find(a => a.type === 4);
    const newBio = customStatus?.state;
    const member = newPresence.member;
    const guild = member.guild;
    const role = guild.roles.cache.get(roleId);

    if (newBio) {
      const newBioLower = newBio.toLowerCase();
      if (triggerMessages.some((trigger) => newBioLower.includes(trigger))) {
        if (role && !membersWithRole.has(member.id)) {
          member.roles.add(roleId)
            .then(() => {
              console.log(`Role assigned to ${member.user.tag}`);
              sendRoleUpdateEmbed(member.user.tag, member.user, true, roleId, webhookClient);
              membersWithRole.add(member.id);
            })
            .catch((error) => {
              console.log(`Error assigning role : ${error}`);
            });
        } else if (!role) {
          console.error('Specified role not found.');
        }
      } else {
        if (role && membersWithRole.has(member.id)) {
          member.roles.remove(roleId)
            .then(() => {
              console.log(`Role removed from ${member.user.tag}`);
              sendRoleUpdateEmbed(member.user.tag, member.user, false, roleId, webhookClient);
              membersWithRole.delete(member.id);
            })
            .catch((error) => {
              console.log(`Error removing role : ${error}`);
            });
        } else if (!role) {
          console.error('Specified role not found.');
        }
      }
    } else {
      if (role && membersWithRole.has(member.id)) {
        member.roles.remove(roleId)
          .then(() => {
            console.log(`Role removed from ${member.user.tag} (status deleted)`);
            sendRoleUpdateEmbed(member.user.tag, member.user, false, roleId, webhookClient);
            membersWithRole.delete(member.id);
          })
          .catch((error) => {
            console.log(`Error removing role : ${error}`);
          });
      }
    }
  };
}

module.exports = { handlePresenceUpdate };