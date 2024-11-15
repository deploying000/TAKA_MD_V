//#ENJOY BRO😍
// Credit: KERM|KgTech
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "deploytamar@gmail.com";
global.location = "Brazzaville, Congo";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Brazzaville";
global.github = process.env.GITHUB || "https://github.com/Ch77a/TAKA_MD_V";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vark1I1AYlUR1G8YMX31";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vark1I1AYlUR1G8YMX31";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/vci8Frt.jpeg";
global.devs = "https://wa.me/242069593964 , https://wa.me/242069593964";
global.sudo = process.env.SUDO || "242069593964";
global.owner = process.env.OWNER_NUMBER || "242069593964";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "true",
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0doejRqWVZqUjgxWWE1cithUHU0dUR1Q1ArOXY3TXFVUGJ4TGhsaDFGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmJtcnVQTVE4TUVTWGJwT2xtY0c4TDJFNkFYUzExbHVLQzM0NEZ4c2FVVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrSDJZSlpyckhjeEVweXhmaGVrZmxHRzZ4ZEJTKy8yMDFJdXpZeVk4MTNJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnTmRVWnJRWlNzdEV6SUJBeUU5M0EzcjhjWElRMmRwWkVTL2hpeElES3c0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldESXRwUFJibDB0ZVZRNkY4ZEFjNUxvSUg1K3BaT21lOHBndUZWMk01blU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjE5TzFsOUh0bDNNblBtOUthRlZTM2dUcm05SDRob3lwVDlrdlFqemtxVXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0VZTzc3TytGeUM2Nm5TUmNLM2s1ZGV1WkJGWUhjN2FjZjlOaHo5QVhIZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRGV4Z3Q2cEdBbkVuNjc0TnBZWGF3WDVodndjT1E3R3JkZWFuZEZLUThEbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNFREZWT2dwVERTSitzR0lUWFd4SzNCeWc3TDNlajhWMmJ0UGFGeGJvNEdGKzNqY1QyZXpTWnNMT3QxZ2dyN1o2S0xKZXVDR3VXNXFwSUswbFZFbUR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OSwiYWR2U2VjcmV0S2V5IjoicGIvNVBNaWVnd0lwSmZOekNIRWtEU0ludy9IK212SjB0dWl4Sk9HTmNOUT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiMmdjR243TmdSMXVjVFpWR0FWd1BvQSIsInBob25lSWQiOiJjMWYxMDJhOC04MGUxLTQzYjctYTM1My0zZjVmNjI4OTZlZWUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVlETHdzZW5FRWFFMGdWMGpDUmtqVmVqek84PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilh3VmtVSmhPdHJOWHA5MjJxd1dSL1BHcXlIZz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJRSkdFM0U2RCIsIm1lIjp7ImlkIjoiMjQyMDY5NTkzOTY0OjI1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuC8hvCWo5jwnZCL8J2QlPCdkIXwnZCF8J2QmCDwnZCv8J2QmvCdkKXwnZCh8J2QmvCdkKXwnZCl8J2QmvCWo5jgvIYifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xHYW9CZ1F2S25adVFZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InR0dkpIbzAwcmhCeVNKVkU4MEFpQ25uREZNcG5wc0d2WTVpREhzQWlsUjg9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im9aTEZLWXovKzFzcFhOcUtoclRyaU5iWDBLdFhQbEZmakI0eEFGdGViU2hPSTBISkVTMUZHV3pmdzNvNUdMMWRLN2l3OEo0bjdtTFA1am02SnJBekRBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJIWjBac3BsYWJSdkRGbFoyMWFxSGFjMW02WkkwVS9TM1JCQ3J6QjU4QUdVaDFlbzRSN0lTOC8vRTVNU1hpcE8xUDRaYlVseDZLRnpVU2o3c1pjdHJEQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0MjA2OTU5Mzk2NDoyNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiYmJ5UjZOTks0UWNraVZSUE5BSWdwNXd4VEtaNmJCcjJPWWd4N0FJcFVmIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMxNjEzODk4fQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜TAKA_TECH⌝☜`",
  author: process.env.PACK_AUTHER || "༒︎♕︎☞︎︎︎𝑯𝒂𝒕𝒔𝒂𝒕𝒔𝒐𝒏 𝑻𝒂𝒎𝒂𝒓☜︎︎︎♕︎༒︎",
  packname: process.env.PACK_NAME || "𝑯𝒂𝒕𝒔𝒂𝒕𝒔𝒐𝒏 𝑻𝒂𝒎𝒂𝒓",
  botname: process.env.BOT_NAME || "𝑯𝒂𝒕𝒔𝒂𝒕𝒔𝒐𝒏 𝑻𝒂𝒎𝒂𝒓",
  ownername: process.env.OWNER_NAME || "☞⌜𝑯𝒂𝒕𝒔𝒂𝒕𝒔𝒐𝒏_𝑻𝒂𝒎𝒂𝒓☜",
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
