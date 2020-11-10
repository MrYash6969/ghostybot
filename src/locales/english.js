module.exports = {
  GLOBAL: {
    EVERYONE: "Everyone",
    NOT_SPECIFIED: "Not specified",
    PROVIDE_ARGS: "Please provide args",
    ERROR: "An error occurred",
    NAME: "Name",
    NOT_AN_OPTION: "{option} Is not a valid option",
    SUCCESS: "Success",
    REASON: "Reason",
    URL: "URL",
    NONE: "None",
    YES: "Yes",
    NO: "No",
  },
  GUILD: {
    NOT_FOUND: "Guild was not found",
    LEFT: "Successfully left guild **${guild_name}**",
    LEVEL_UP_MESSAGES: "Level up messages",
    ANNOUNCE_CHANNEL: "Announce Channel",
    SUGGEST_CHANNEL: "Suggest Channel",
    WELCOME_CHANNEL: "Welcome Channel",
    LEAVE_CHANNEL: "Leave Channel",
    PREFIX: "Prefix",
    IS_VERIFIED: "Yes, this server is verified",
    IS_PARTNERED: "Yes, this server is partnered",
    NOT_VERIFIED: "Nope, this server isn't verified",
    NOT_PARTNERED: "Nope, this server isn't partnered",
    OWNER: "Guild owner",
    CHANNEL_C: "Channel count",
    EMOJI_C: "Emoji count",
    ROLES_C: "Role count",
    MEMBER_C: "Member count",
    REGION: "Region",
    VERIFICATION: "Verification level",
    MFA: "MFA Level",
    BOOSTS: "Boosts",
    BOOST_LVL: "Boosts level",
    VERIFIED: "Verified",
    PARTNERED: "Partnered",
  },
  MEMBER: {
    TAG: "Tag",
    BOT: "Bot",
    ROLES: "Roles",
    BADGES: "Badges",
    ONLINE: "Online",
    OFFLINE: "Offline",
    MEMBERS: "Members",
    STATUS: "Status",
    CREATED_ON: "Created on",
    JOINED_AT: "Joined at",
    ID: "Id",
    USERNAME: "Username",
    NICKNAME: "Nickname",
    PROVIDE_MEMBER: "Please provide a member",
    NOT_FOUND: "Member was not found",
    CANNOT_BE_BANNED: "That member cannot be banned",
    DM_BAN_MESSAGE:
      "You have been **banned** from **{guild_name}**, Reason: **{ban_reason}**",
    GUILD_BAN_MESSAGE:
      "{member} was successfully banned from the server. Reason: **{ban_reason}**. I have also send a DM letting the person know.",
  },
  ROLES: {
    MY_ROLE_NOT_HIGH_ENOUGH: "My role is not high enough than **{role}** role!",
    MY_ROLE_MUST_BE_HIGHER:
      "My role must be higher than **{member}** highest role!",
    YOUR_ROLE_MUST_BE_HIGHER: "Your role must be higher than **{role}** role!",
    PROVIDE_ROLE: "Please provide a role",
    ALREADY_HAS_ROLE: "That member already has that role",
    ADDED_ROLE_TO: "Successfully Added **{role}** to {member}",
  },
  IMAGE: {
    CLICK_TO_VIEW: "[Click here if the image failed to load.]",
    CLYDE: "Clyde",
    CUDDLES: "cuddles with",
    FEEDED: "feeded",
    HUGGED: "hugged",
    PATTED: "patted",
    KISSED: "kissed",
    POKED: "poked",
    SLAPPED: "slapped",
  },
  ANIMAL: {
    CAT_FACT: "Cat Fact",
    DOG_FACT: "Dot Fact",
    SNAIL_FACT: "Snail Fact",
    COW: "Cow",
  },
  BOT_OWNER: {
    SHUTDOWN: "Bot is shutting down",
    EVAL: "Eval command",
    EVAL_TYPE: "Type",
    EVAL_INPUT: "Input",
    EVAL_OUTPUT: "Output",
    UPDATE_NICKNAME: "Updated by bot-owner",
    UPDATED_NICKNAME: "Successfully updated nickname to **{nickname}**",
    PROVIDE_TYPE: "Please provide a type",
    CANNOT_BL_OWNER: "Cannot blacklist the owner",
    NOT_BLD: "User is not blacklisted",
    ALREADY_BLD: "{member} is already blacklisted",
    NOT_OPTION: "**{type}** is not an option",
    BLACKLISTED: "blacklisted",
    UNBLACKLISTED: "unblacklisted",
    BLACKLISTED_SUCCESS: "{member} was {type}",
    BLD_STATUS: "Blacklist status",
  },
  LEVELS: {
    XP: "XP",
    LEVEL: "Level",
    LEADERBOARD: "Leaderboard",
    MEMBER_IS_LEVEL: "{member} is level **{level}** with **{user_xp}XP**",
    RESET_CONF: "Reset all XP? y/n",
    RESET_SUCCESS: "Successfully reset everyone's xp",
    RESET_CANCEL: "resetxp was canceled",
    PROVIDE_AMOUNT: "Please provide an amount",
    PROVIDE_VALID_NR: "Please provide a valid number",
    GIVE_XP_SUCCESS: "Successfully gave **{member}** **{amount}**XP",
  },
  MUSIC: {
    MUST_BE_IN_VC: "You need to be in a voice channel",
    NO_QUEUE: "There are no songs currently playing",
    QUEUE_CLEARED: "The queue was cleared",
    QUEUE: "Music Queue",
    BETWEEN_0_100: "Volume must be between 0 and 100",
    VOL_SUCCESS: "Successfully set volume to {vol}%",
    PLAYING: "Playing",
    PAUSED: "Paused",
    DURATION: "Duration",
    UPLOADED_BY: "Uploaded by",
    UPLOADED_AT: "Uploaded at",
    VIEWS: "Views",
    LIKES: "Likes",
    DISLIKES: "Dislikes",
    SECONDS: "Seconds",
    VOLUME: "Volume",
    PROVIDE_SEARCH: "Please provide a search query",
    ADDED_TO_QUEUE: "Song has been added to the queue | {songs} songs in queue",
    NOW_PLAYING: "Now Playing:",
    REQUESTED_BY: "Requested by",
    NO_PERMS: "I don't have the correct permissions for that voice channel!",
    NOT_SAME_VC: "You must be in the same voice chat as the bot",
  },
  ECONOMY: {
    MONEY: "Money",
    BANK: "Bank",
    BALANCE: "Balance",
    DAILY_ERROR: "You already collected your daily",
    WEEKLY_ERROR: "You already collected your weekly",
    DAILY_SUCCESS: "You collected your daily of **{amount}** coins",
    WEEKLY_SUCCESS: "You collected your weekly of **{amount}** coins",
    STORE_EMPTY:
      "The store for this server is empty! Ask a moderator to add items to the store using `{prefix}store add <item>`",
    PROVIDE_ITEM_TO_BUY: "Please provide an item to buy",
    NOT_ENOUGH_MONEY: "You don't have that much money",
    BUY_SUCCESS: "Successfully bought **{item}** paid **{price}**",
    NOT_FOUND_STORE:
      "**{query}** wasn't found in the store, please use `{prefix}store` to see all items in the store",
    ALREADY_OWN_ITEM: "You already own this item",
    PROVIDE_VALID_AMOUNT: "Please provide a valid numeric amount",
    DEPOSITED_ALL: "Successfully deposited all your money!",
    DEPOSITED_AMOUNT: "Successfully deposited **{amount} coins**",
    WITHDRAW_ALL: "Successfully Withdrew all your money!",
    WITHDRAW_AMOUNT: "Successfully Withdrew **{amount}coins**",
    PROFILE: "Profile",
    INV_EMPTY: "User's inventory is empty",
    INVENTORY: "Inventory",
    INV_ITEMS: "Inventory Items",
    VIEW_INVENTORY:
      "Use `{prefix}inventory <user>` to view their inventory items.",
    MONEY_LEADERBOARD: "Money leaderboard",
    TOTAL_BALANCE: "Total Balance",
    BOTH_COUNTED: "Bank & Money both counted",
    DICE_LANDED: "You landed on: {roll}",
    DICE_WON: "Congrats! You won a price of **{price}coins**",
    DICE_LOST: "You need to land a **6** to get a price of **{price}coins**",
    RECENTLY_WORKED: "You have already worked recently, {time} remaining",
    WORKED: "{member} worked as a **{job_name}** and earned **{amount}**!",
    CANNOT_PAY_SELF: "You can't pay yourself",
    PAY_SUCCESS: "Successfully gave **{member}** **{amount}coins**",
    CANNOT_ROB_SELF: "You can't rob yourself!",
    BETWEEN_1_1000: "Amount must be between 1 and 1000",
    MEMBER_NO_MONEY:
      "User doesn't have any money, therefore you can't rob this user.",
    ROB_SUCCESS: "Successfully robbed **{amount}coins** from **{member}**",
    STORE: "Store",
    MANAGE_STORE_PERMS:
      "You don't have the correct permissions to manage the store! (Manage Server)",
    PROVIDE_VALID_ITEM: "Please provide a valid item to add/remove!",
    PRICE: "Price",
    ALREADY_EXISTS: "**{item}** already exist in the store!",
    PROVIDE_PRICE: "Please provide a price for the item!",
    MUST_BE_NUMBER: "Price must be a number!",
    ADDED_TO_STORE: "{item} was added to the store!",
    NOT_IN_STORE: "**{item}** doesn't exist in the store!",
    REMOVED_FROM_STORE: "{item} was removed from the store!",
  },
  GAMES: {
    BETS_ON: "{member_1} bets on {member_2}",
    LOST_BET: "{member_1} bet on {member_2}!\n {member_1} didn't win the bet",
    WON_BET: "{member_1} bet on {member_2} and {member_1} won the bet",
    CALC: "Calculator",
    INVALID_CALC: "Invalid calculation",
    COMPLIMENT: "Compliment",
    LANDED_TAILS: "You landed on Tails",
    LANDED_HEADS: "You landed on Heads",
    HAPPINESS: "Happiness",
    IQ_TEST: "IQ Test",
    IQ_IS: "Your IQ is: {iq}",
    RPS: "Rock Paper Scissors",
    ROCK: "Rock",
    PAPER: "Paper",
    SCISSORS: "Scissors",
    WYR: "Would you rather?",
    ANSWER: "Answer",
    QUESTION: "Question",
  },
  UTIL: {
    AVATAR: "Avatar",
    NOT_AFK: "You are not afk anymore",
    AFK: "You are now afk",
    CLICK_TO_DOWNLOAD: "[Click Here to download]",
    BMI_WEIGHT: "Weight",
    BMI_HEIGHT: "Height",
    BMI: "BMI",
    BMI_CM: "Please provide your height in centimeters",
    BMI_KG: "Please provide your weight in kilograms",
    SUPPORT_SERVER: "Support server",
    BUG_REPORT: "{member} has reported a bug",
    BUG_REPORTED: "Bug report was send!",
    CHANNEL_TOPIC: "Channel topic",
    TEXT_CHANNEL: "Text Channel",
    VOICE_CHANNEL: "Voice channel",
    TEXT_CHANNELS: "Text Channels" /* plural! */,
    VOICE_CHANNELS: "Voice channels" /* plural! */,
    NO_DEF_FOUND: "No definition found for {word}",
    DEF_FOR_WORD: "Definition for {word}",
    CATEGORY: "Category",
    DEFINITION: "Definition",
    DEPENDENCIES: "Dependencies",
    ANIMATED: "Animated",
    NON_ANIMATED: "Non Animated",
    NEW_FEEDBACK: "New Feedback",
    FEEDBACK_SEND: "Successfully send feedback!",
    GH_NOT_FOUND: "GitHub account was not found",
    GH_FOLLOWING: "Following",
    GH_FOLLOWERS: "Followers",
    GH_WEBSITE: "Website",
    GH_LOCATION: "Location",
    GH_BIO: "Bio",
    GH_PROVIDE_USERNAME: "Please provide a username!",
    SEARCHING: "Searching",
    PROVIDE_EXT: "Please provide an extension, e.g.: `ts`, `js`, `html`, ...",
    PROVIDE_CODE: "Please provide some code",
    NO_IMG_FOUND: "No images found",
    PROVIDE_M_S: "Please provide a name of a movie or series",
    DB_RATINGS: "Ratings",
    DB_COUNTRY: "Country",
    DB_GENRES: "Genres",
    DB_AWARDS: "Awards",
    DB_LANGS: "Languages",
    DB_RELEASED: "Released",
    DB_NOT_FOUND: "No movie was found with {search}",
    TOTAL_MB: "Total",
    HUMANS: "Humans",
    BOTS: "Bots",
    PLAYERS: "Players",
    VERSION: "Version",
    PROTOCOL: "Protocol",
    DESCRIPTION: "Description",
    MC_NOT_FOUND: "Server wasn't found",
    MC_PROVIDE_IP: "Please provide a server IP",
    NPM_SEARCH: "NPM Search",
    NPM_TOP_5: "Top 5 found results for **{query}**",
    AUTHOR: "Author",
    VIEW_ON_NPM: "View on npm",
    MAX_PLAYERS: "Max players",
    PS_NOT_FOUND: "Application was not found",
    DEVELOPER: "Developer",
    SCORE: "Score",
    CREATED_BY: "Created by {member}",
    MENTIONABLE: "Mentionable",
    ROLE_NOT_FOUND: "Role was not found",
    ROLES: "Roles",
    NO_GUILD_ICON: "This guild has no icon",
    PROVIDE_EMOJI: "Please provide an emoji",
    ENLARGED_EMOJI: "Enlarged version of {emoji}",
    INVALID_EMOJI: "Invalid emoji!",
    PROVIDE_SB: "Please provide a subreddit",
    PROVIDE_SKIN: "Please write the name of the skin",
    SKIN_NOT_FOUND: "Player `{search}` not found!",
    SKIN_NAME: "Player skin {name}",
    DOWNLOAD_SKIN: "[Download skin]",
    G_TRANSLATE: "Google Translate",
    NEW_SUGGESTION: "New Suggestion",
    NO_SUGG_CHANNEL:
      "Your server doesn't have a default suggestion channel!\n Use `set suggest-channel <channel mention>` to set the default channel.",
    UPTIME: "{member} has been up for {time}",
    WEATHER: "Weather",
    PROVIDE_COUNTRY: "Please provide a city/country",
    C_NOT_FOUND: "City: **{query}** was not found!",
    MAIN: "Main",
    CURRENT: "Current",
    CURRENT_TEMP: "Current temp",
    FEELS_LIKE: "Feels like",
    WIND_SPEED: "Wind speed",
    WIND_DEGREES: "Wind degrees",
    COUNTRY: "Country",
    NO_W_FOUND: "No results were found",
    TOTAL_EPISODES: "Total Episodes",
    ANIME_NOT_FOUND: "That Anime was not found",
    START_DATE: "Start Date",
    END_DATE: "End Date",
    POPULARITY_RANK: "Popularity Rank",
  },
  BOT: {
    GUILDS: "Guilds",
    CHANNELS: "Channels",
    USERS: "Users",
    COMMAND_COUNT: "Command count",
    VC_CONNS: "Voice connections",
    INFO_2: "Bot Information",
    INFO: "Bot info",
    SYSTEM_INFO: "System Info",
    RAM_USAGE: "RAM Usage",
    UPTIME: "Uptime",
    DJS_V: "Discord.js version",
    NODE_V: "NodeJS version",
    REPO: "Repository",
  },
  CONFIG: {
    OPTION_CMD_WORK: "{option} needs to be provided, for this command to work.",
  },
  HELP: {
    CAT_NOT_EXIST: "That category does not exist",
    CMD_NOT_FOUND: "Command or alias not found",
    COMMANDS: "Commands",
    COOLDOWN: "Cooldown",
    ALIASES: "Aliases",
    USAGE: "Usage",
    COMMAND: "Command",
    OPTIONS: "Options",
    ADMIN: "Admin commands",
    ANIMAL: "Animal Commands",
    BO_CMDS: "BotOwner Commands",
    NSFW: "NSFW Commands",
    HENTAI: "Hentai Commands",
    GAME: "Game Commands",
    IMAGE: "Image Commands",
    MUSIC: "Music Commands",
    UTIL: "Util Commands",
    ECONOMY: "Economy Commands",
    LEVEL: "Levels Commands",
    EXEMPT: "Exempt Commands (commands that cannot be disabled)",
    GUILD_PREFIX: "Server prefix",
    CMD_DESC:
      "use `{prefix}help <command name | alias>` to view more info about a command\n More info can be found using the `botinfo` command",
    OWNER_ONLY: "only the owner is allowed to see this!",
    NSFW_ONLY: "To view nfsw commands check in an nfsw channel!",
  },
  POKEMON: {
    SPECIES: "Species",
    ABILITIES: "Abilities",
    HEIGHT: "Height",
    WEIGHT: "Weight",
    EXPERIENCE: "Experience",
    GENDER: "Gender",
    EGG_GROUPS: "Egg Groups",
    FAMILY: "Family",
    EVO_STAGE: "Evolution stage",
    EVO_LINE: "Evolution line",
    STATS: "Stats",
    HP: "HP",
    ATTACK: "Attack",
    DEFENSE: "Defense",
    SP_ATK: "SP ATK",
    SP_DEF: "SP DEF",
    SPEED: "Speed",
    TOTAL: "Total",
    PROVIDE_NAME: "Please provide a pokemon name!",
    NOT_FOUND:
      "No pokemon was found with {query}. Please use correct spelling and try again later.",
  },
};
