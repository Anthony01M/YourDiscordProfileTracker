import { Client, GatewayIntentBits } from 'discord.js';
import presence from "./presence"

const targetUserId = process.env.USER_ID;

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences,
    ],
});
export default client;

client.on('presenceUpdate', (oldPresence, newPresence) => {
    if (newPresence.user?.id !== targetUserId) return;
    presence.set({
        event: 'presence',
        status: newPresence.status,
        data: newPresence.activities.filter((activity) => activity.name !== 'Custom Status').map((activity) => ({
            name: activity.name,
            state: activity.state,
            details: activity.details,
            start: activity.timestamps?.start ?? null,
            largeImage: activity.assets?.largeImageURL() || activity.assets?.smallImageURL() || null,
            largeImageText: activity.assets?.largeText || null,
            smallImage: activity.assets?.smallImageURL() || null,
            smallImageText: activity.assets?.smallText || null
        })).reverse()
    })
})