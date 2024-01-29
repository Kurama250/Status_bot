/*
Create by Kurama
Github : https://github.com/Kurama250
Licence : Creative commons - CC BY-NC-ND 4.0
*/

const { sendRoleUpdateEmbed } = require('../event/embed');

function handlePresenceUpdate(client, roleId, membersWithRole, triggerMessages, webhookClient) {
  return (oldPresence, newPresence) => {
    if (newPresence.activities && newPresence.activities[0]?.state && newPresence.guild) {
      console.log(
        `Profile of ${newPresence.member.user.tag} updated. New custom status : ${newPresence.activities[0]?.state}`
      );
      const newBio = newPresence.activities[0]?.state;
      const member = newPresence.member;
      const guild = member.guild;
      const role = guild.roles.cache.get(roleId);

      if (newBio) {
        const newBioLower = newBio.toLowerCase();
        if (triggerMessages.some((trigger) => newBioLower.includes(trigger))) {
          if (role && !membersWithRole.has(member.id)) {
            member.roles.add(role)
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
            member.roles.remove(role)
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
          member.roles.remove(role)
            .then(() => {
              console.log(`Role removed from ${member.user.tag}`);
              sendRoleUpdateEmbed(member.user.tag, member.user, false, roleId, webhookClient);
              membersWithRole.delete(member.id);
            })
            .catch((error) => {
              console.log(`Error removing role : ${error}`);
            });
        }
      }
    }
  };
}

module.exports = { handlePresenceUpdate };
