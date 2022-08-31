import { config } from 'dotenv';
import { REST, Routes } from 'discord.js';
import { getEnv } from './util/env';

config();

const commands = [];

const rest = new REST({ version: '10' }).setToken(getEnv('discord_token'));

rest.put(
    Routes.applicationGuildCommands(getEnv('discord_client'), getEnv('discord_guild')),
    { body: commands }
)
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);
