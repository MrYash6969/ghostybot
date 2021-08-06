import { CommandInteraction, MessageEmbed } from "discord.js";
import Bot from "structures/Bot";
import Interaction from "structures/Interaction";

export default class DocsInteraction extends Interaction {
  constructor(bot: Bot) {
    super(bot, {
      name: "docs",
      description: "Find something on the discord.js docs",
      category: "util",
      options: [
        {
          name: "query",
          description: "What do you want to search for",
          type: "STRING",
          required: true,
        },
        {
          name: "branch",
          description: "The branch",
          type: "STRING",
          required: false,
          choices: [
            {
              name: "Stable",
              value: "stable",
            },
            {
              name: "Master",
              value: "master",
            },
          ],
        },
      ],
    });
  }

  async execute(interaction: CommandInteraction) {
    const lang = await this.bot.utils.getGuildLang(interaction.guildId!);

    try {
      await interaction.deferReply();
      const query = interaction.options.getString("query", true);
      const branch = interaction.options.getString("branch") ?? "stable";

      const url = `https://djsdocs.sorta.moe/v2/embed?src=${branch}&q=${query}`;
      const data = await fetch(url).then((res) => res.json());

      if (!data || data?.message || data?.error) {
        return interaction.editReply({ content: lang.UTIL.DOC_NOT_FOUND });
      }

      const embed = new MessageEmbed({
        ...data,
        color: "#5865f2",
        footer: {
          text: interaction.user.username,
          icon_url: interaction.user?.displayAvatarURL({ dynamic: true }),
        },
      });

      return interaction.editReply({ embeds: [embed] });
    } catch (err) {
      this.bot.utils.sendErrorLog(err, "error");
      return interaction.editReply({ content: lang.GLOBAL.ERROR });
    }
  }
}