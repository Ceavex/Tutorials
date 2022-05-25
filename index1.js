const Discord = require("discord.js");
const { Client, Collection, MessageActionRow, MessageSelectMenu,MessageButton, MessageEmbed, Permissions, WebhookClient} = require("discord.js");
const client = new Client({
    presence: {
        status: 'online',
        afk: false,
        activities: [{
            name: 'Im online!',
            type: 'PLAYING',    
        }],
    },
        intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_VOICE_STATES", "GUILD_MESSAGE_REACTIONS"],
        partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});

client.on("ready", () => {
        console.log("Im ready")
})

keepAlive()
client.login("NzE1MzI1MDczODUwMTA1OTI3.GveMCf.8AlO3T7j3qBny7toRVOIOKA-_TiE3TdSmzm7RQ");
