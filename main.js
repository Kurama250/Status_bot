/*
Create by Kurama
Github : https://github.com/Kurama250
Licence : Creative commons - CC BY-NC-ND 4.0
*/

const { Client, GatewayIntentBits, WebhookClient, Events } = require('discord.js');
const { roleHandler } = require('./cmd/role');
const { handlePresenceUpdate } = require('./cmd/presence');
const { handleReadyEvent, setBotStatus } = require('./event/ready');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessages,
  ],
});

const config = require('./config/config.json');
const { token, roleId, serverId, triggerMessages, webhookUrl } = config;

const webhookClient = new WebhookClient({ url: webhookUrl });

const membersWithRole = new Set();

client.once(Events.ClientReady, () => {
  handleReadyEvent(client);
  roleHandler(client, roleId, serverId, triggerMessages, webhookClient);
});

client.on(Events.PresenceUpdate, handlePresenceUpdate(client, roleId, membersWithRole, triggerMessages, webhookClient));

client.login(token);