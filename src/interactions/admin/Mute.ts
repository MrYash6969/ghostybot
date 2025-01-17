import * as DJS from "discord.js";
import ms from "ms";
import { Bot } from "structures/Bot";
import { SubCommand } from "structures/Command/SubCommand";

const permissions = [DJS.Permissions.FLAGS.MODERATE_MEMBERS];

export default class MuteCommand extends SubCommand {
  constructor(bot: Bot) {
    super(bot, {
      commandName: "admin",
      name: "mute",
      description: "Timeout a user",
      botPermissions: permissions,
      memberPermissions: permissions,
      options: [
        {
          name: "user",
          description: "The user to mute",
          type: "USER",
          required: true,
        },
        {
          name: "time",
          description: "How long the user will be muted (Min. 1 minute)",
          type: "STRING",
          required: true,
        },
        {
          name: "reason",
          description: "The mute reason",
          type: "STRING",
          required: false,
        },
      ],
    });
  }

  async execute(
    interaction: DJS.CommandInteraction,
    lang: typeof import("@locales/english").default,
  ) {
    const member = interaction.options.getMember("user", true);
    const time = interaction.options.getString("time", true);
    const reason = interaction.options.getString("reason") ?? lang.GLOBAL.NOT_SPECIFIED;

    if (
      !member ||
      !("timeout" in member) ||
      member.permissions.has(DJS.Permissions.FLAGS.MANAGE_ROLES)
    ) {
      return interaction.reply({
        ephemeral: true,
        content: lang.ADMIN.MUTE_CANNOT_MUTE,
      });
    }

    const content = this.bot.utils.translate(lang.ADMIN.MUTE_SUCCESS, {
      tag: member.user.tag,
      reason,
    });

    const dmContent = this.bot.utils.translate(lang.ADMIN.MUTE_SUCCESS_DM, {
      guild: interaction.guild!.name,
      reason,
    });

    const parsedTime = ms(time);
    if (parsedTime < 60000 || isNaN(parsedTime)) {
      return interaction.reply({ ephemeral: true, content: "Must be longer than 1 minute" });
    }

    await member.timeout(parsedTime, reason);

    await interaction.reply({ content, ephemeral: true });
    await member.user.send({
      content: dmContent,
    });

    this.bot.emit("guildMuteAdd", interaction.guild, {
      member,
      executor: interaction.user,
      tempMute: !!time,
      reason,
      time,
    });
  }
}
