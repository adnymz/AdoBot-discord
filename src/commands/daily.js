import { SlashCommandBuilder } from "discord.js";
import User from "../schemas/User.js";

export default {
  data: new SlashCommandBuilder()
    .setName("daily")
    .setDescription("Reclama coins diarios"),

  async execute(interaction) {
    const REWARD = 100;

    let user = await User.findOne({ userId: interaction.user.id });
    if (!user) user = await User.create({ userId: interaction.user.id });

    user.coins += REWARD;
    await user.save();

    await interaction.reply(`🎁 Reclamaste **${REWARD} coins**`);
  }
}
