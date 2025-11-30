import { Client, GatewayIntentBits, Collection } from "discord.js";
import "dotenv/config";
import { connect } from "mongoose";
import fs from "fs";

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.commands = new Collection();

for (const file of fs.readdirSync("./src/commands")) {
  const cmd = await import(`./commands/${file}`);
  client.commands.set(cmd.default.data.name, cmd.default);
}

for (const file of fs.readdirSync("./src/events")) {
  const evt = await import(`./events/${file}`);
  client.on(evt.default.name, (...args) => evt.default.execute(...args, client));
}

(async () => {
  await connect(process.env.MONGO_URI);
  client.login(process.env.TOKEN);
})();
