import { Client, IntentsBitField, Events } from "discord.js";
import { logger } from "./utils";

const client: Client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildMembers,
    ]
})

client.once(Events.ClientReady, async () => {
    logger.info("Ready");
    await client.application?.commands.set([
        {
            name: "used",
            description: "使用した文字を返します。"
        }
    ]);
})