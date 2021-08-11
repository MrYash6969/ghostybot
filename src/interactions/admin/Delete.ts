import * as DJS from "discord.js";
import { Bot } from "structures/Bot";
import { ValidateReturn } from "structures/Command/Command";
import { SubCommand } from "structures/Command/SubCommand";

export default class DeleteCommand extends SubCommand {
  constructor(bot: Bot) {
    super(bot, {
      commandName: "admin",
      name: "delete",
      description: "Delete up to 100 messages within 14 days",
      options: [
        {
          name: "amount",
          description: "Min: 1. Max: 100",
          type: "NUMBER",
          required: true,
        },
      ],
    });
  }

  async validate(
    interaction: DJS.CommandInteraction,
    lang: typeof import("@locales/english").default,
  ): Promise<ValidateReturn> {
    const perms = this.bot.utils.formatMemberPermissions(
      [DJS.Permissions.FLAGS.MANAGE_MESSAGES],
      interaction,
      lang,
    );

    if (perms) {
      return { ok: false, error: { content: perms, ephemeral: true } };
    }

    const botPerms = this.bot.utils.formatBotPermissions(
      [DJS.Permissions.FLAGS.MANAGE_MESSAGES],
      interaction,
      lang,
    );

    if (botPerms) {
      return { ok: false, error: { embeds: [botPerms], ephemeral: true } };
    }

    return { ok: true };
  }

  async execute(
    interaction: DJS.CommandInteraction,
    lang: typeof import("@locales/english").default,
  ) {
    const amount = interaction.options.getNumber("amount", true);

    if (amount < 1 || amount > 100) {
      return interaction.reply({
        ephemeral: true,
        content: lang.ADMIN.DELETE_PROVIDE_AMOUNT,
      });
    }

    await interaction.reply({
      ephemeral: true,
      content: lang.ADMIN.DELETE_DELETED.replace("{amount}", amount.toString()),
    });

    await (interaction.channel as any)?.bulkDelete(amount);
  }
}
