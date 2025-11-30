import { SlashCommandBuilder } from "discord.js";
import User from "../schemas/User.js";

export default {
  data: new SlashCommandBuilder()
    .setName("balance")
    .setDescription("Muestra tu saldo"),

  async execute(interaction) {
    let user = await User.findOne({ userId: interaction.user.id });
    if (!user) user = await User.create({ userId: interaction.user.id });

    await interaction.reply(
      `💰 ${interaction.user.username} tiene **${user.coins}** coins`
    );
  }
}
