import { SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Test del bot"),

  async execute(interaction) {
    await interaction.reply("🏓 Pong!");
  }
}
