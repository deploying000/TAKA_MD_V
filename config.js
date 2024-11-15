//#ENJOY BRO😍
// Credit: KERM|KgTech
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "diorrebero84@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Ch77a/TAKA_MD_V";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vark1I1AYlUR1G8YMX31";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vark1I1AYlUR1G8YMX31";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/vci8Frt.jpeg";
global.devs = "https://wa.me/237659079843 , https://wa.me/237690768603";
global.sudo = process.env.SUDO || "242069593964";
global.owner = process.env.OWNER_NUMBER || "242069593964";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/vci8Frt.jpeg,https://i.imgur.com/oG6RiCF.jpeg,https://i.imgur.com/uZLV84s.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kata-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVBtQzVvOE4yK0plU1k0SlNnZ1hDSlJVdWNjcUUrOVJjb1R2bkxIdVFtdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVRvdlQ1UTZwL0RvRHZydURXTFVlRDZtRkZab2VvZGxXdTRPS1dBYkJqRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyQjExWWVvSXNsRlB5b210MWJybFF4MHJWR3pXdUJoeW5VdFRLWU02WDM4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2R3Y2RjQyVHBoNmVBTkUxSEtUa1d0QzROR3JPc2xTSTVEa1ZDcHhiUGt3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlEbGpoV1pHM1VTQlUxaXpVWmFrZE0zLzhZOEM4OEp2OHM3WE8ycUVORVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ink3VzN4blN0ZTk4ZHpxdGlYWWU2OVk5VUdmR1BJVUZZRTRsay9OeUpMaHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNExWQWdPMHArOS9ra1Rzc2ZNMHlFV296QTZFSUk5c2d4OUxjZDRTRTUwcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaE5VbGNMQmloSHVHbGJzZnhWOTdMcjZEL1BWbzI2eTBwUU14UWd6RGZ5QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNSVjFmakpCYjNVWDM3c3VEM1Z4QTZ4V3R1L3k4cER6bElhZ1hXMkRQSS9ZbkdNVDZHOGZtSzF1d2NwZWxzMmNQOTFRazRPZHc0YklIbjdkb1A3MkJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgzLCJhZHZTZWNyZXRLZXkiOiIwa3RrSVcvYml1Ly9oQTRYS2N5ME0yQVRBcExHU0FBMlppTGNqUG5jR1JvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJHRlFkeGVEbVJ3VzlmbmdhOUdZRC1BIiwicGhvbmVJZCI6ImQwM2FmNTk0LTZmYmUtNGYzZi1iYTBiLTM5ZTY4ZTAxZjY0MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY2hTdWxNQWVpZFhxZmR2NFB2eHdaTWUySkk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTTlISC82dkt5Y2tKNE10dHk0Slpydmk5eWJnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkZOTkFWUzRaIiwibWUiOnsiaWQiOiIyNDIwNjk1OTM5NjQ6MzJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4LyG8JajmPCdkIvwnZCU8J2QhfCdkIXwnZCYIPCdkK/wnZCa8J2QpfCdkKHwnZCa8J2QpfCdkKXwnZCa8JajmOC8hiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTE9hb0JnUXRMTGV1UVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidHR2SkhvMDByaEJ5U0pWRTgwQWlDbm5ERk1wbnBzR3ZZNWlESHNBaWxSOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQm1QbTVYajJFMUxZZDBjRkgvTFBCTjVZamtmV2hyOTYxR2YrU1hIbjhKYlkvQUd5NXgzVDNwT0E1UHRmeFMzQlA2Zjc0czFGQi8yT2x6SlNUVG9WQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6InBSN1BIbVQ2UHlFWXE3MkRNODY1Lzh3WklGbi9PbzdVTGdsQWw2R1B2Z28wa0gzWXFYQTRGUXR2ZWlUb2lMTWVKMzZDNjlRM2x6Ty9NY3dlUnErOEJRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjQyMDY5NTkzOTY0OjMyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJiYnlSNk5OSzRRY2tpVlJQTkFJZ3A1d3hUS1o2YkJyMk9ZZ3g3QUlwVWYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzE2OTY5NjJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "#",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜Tamar⌝☜`",
  author: process.env.PACK_AUTHER || "꧁•Hatsatson Tamar•꧂",
  packname: process.env.PACK_NAME || "Tamar Hatsatson",
  botname: process.env.BOT_NAME || "ᵏᵍ┘TAKA_𝙼𝙳_𝚅𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜TAKA_TECH☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "TAKA").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
