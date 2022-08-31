import { config } from 'dotenv';
config();

import { Client, GatewayIntentBits } from 'discord.js';
import { getEnv } from './util/env';

const client = new Client({
    intents: [GatewayIntentBits.Guilds],
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user?.username}`);
});

client.login(getEnv('discord_token'));
