import { PresenceStatus } from 'discord.js';
import { Reference } from 'rjweb-server';

export default new Reference<{
    event: 'presence';
    status: PresenceStatus;
    data: {
        largeImage: string | null;
        largeImageText: string | null;
        smallImage: string | null;
        smallImageText: string | null;
        name: string;
        state: string | null;
        details: string | null;
        start: Date | null;
    }[]
}>();