const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "botsatwork892@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://casinobot:123johniphone@cluster0.nfztvsi.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/WHIZBOT1/WHIZBOTMD";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "https://";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "";
global.devs = "18763351213";
global.sudo = process.env.SUDO || "18763351213";
global.owner = process.env.OWNER_NUMBER || "254 773 440758";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "263787453677";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Asta;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0lVZHBrWElBQUFnL1pQV000a3NnQ3dLY3JaZlNyelNnMk5WV0JYMlpGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUklqWVJZUUpSMElBamdOcUcwTDEzelk5UTVpVXgvd0FYWjFiTi9BRzJ4TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyT2FIaXNRbXRPb0tGRTB1SXZhNFNkT2dOQzd2VXZqdFhKM3dydmZTMVZNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjY21NWHFrb1ZrWlRYQXVnL3l6dDJSMFZwa3A4a1R0VUk4UEhNOTJ1emdBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVIckdreGZXcWxCK3Exam9HQmY5RlVSUmV4WXBBb1R3elpJUHpCYi9SVkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBWYmVITWdXNnpSREp4TEtoWHVEWml3N2FOS3l3OUlXL1RwM0hTUWdZeDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUwrNUkzc1lKbGxGZ093ZjUxR1dsZDlZZW9CaHoyVGNvc01BQW80eWlXZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQzZ0YVBmL0NmSzNjUzNqZXRGcE5YMmk0N25JdTdKa1JpRzNqM1lVajRUbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNPWHVjd1ZRVG9RWVlVVkkrNzBGMGJrMjRhSnVQbzhjNEE4WHA0UmdzS2pUbGVTN1FlNkhCaFBOVXg0TkhKaFRSbXVGUWI1K1NjdXhMaWlrU2ZoYml3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTcsImFkdlNlY3JldEtleSI6Ii9wL09kYXBrU2NLa2VTSERqMGxhc2lpWW1uQ295cVkzQ0ZtQzJTZnNPMmM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzczNDQwNzU4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjhERUIwMTUwMzRBREE4NUMwRDU0MDQ3N0UyOTVEMDg0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTczOTU0NTV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc3MzQ0MDc1OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyRTY5ODYwNTYyMjc3NTk5NjE1MEU4NEQ0NzcxQTlBQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE3Mzk1NDU2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3NzM0NDA3NThAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQkM2RTBBQjdEMjRFMUNERkE5RjZGRjNBMEVBNzJFNkMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxNzM5NTQ1N31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiazhSZFhick5ReXE1dFZ5MUlDcnYxQSIsInBob25lSWQiOiJjNGMzMjFlZC1hOWViLTQ0NTQtODE2ZS02YTRiNzY3MzRlZmUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN25OM3RBbGVteDRaRFlYRDFSN2kvSEJKb09vPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVJS1lSZ3lUSnVHMWpUaXp4cU81c2d0TzFHcz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJQTTZFSjNSSyIsIm1lIjp7ImlkIjoiMjU0NzczNDQwNzU4OjYyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCfkLLwn5CJ8J2Yv/CdmYUg8J2Yv/CdmYDwnZmH8J2YvfCdmYrwnZmUIPCdmLzwnZmJ8J2ZhPCdmYDwnZmU8J+MvvCfjLnwn4y38J+quCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSmovOUlVQ0VPKy85YklHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTG13OThmS1NpTGxYaUc4bW83MzhIUnJSMHpOZ0tlbGlGWXpGVkoybndtUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiY3NYVFhtVVd6N2c5QytOWFhKT3hKRFIreEhScURmbjg0SkFZaEVpZkF4YmtJdGE1ajgyNTIyTFh1ZnFqUUJXekltbUNPa3hoYUE3bnQ2YkQ0TEt4RGc9PSIsImRldmljZVNpZ25hdHVyZSI6IkowZWFVVzBzaHBiV1MxVHBFVml1Y3MxakhwZGlUMnNoNGxCNU56V29QT3c1WkhGaUNNNThDWUlvVjArMG0xL2thSXFwTlBITmJtSmlmNXZFVlFWVWhnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzczNDQwNzU4OjYyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlM1c1BmSHlrb2k1VjRodkpxTzkvQjBhMGRNellDbnBZaFdNeFZTZHA4SmsifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTczOTU0NTIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRXcrIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©️ 𝛲𝛩𝑊𝛯𝑅𝐷 𝐵𝑌 𝘿𝙀𝙇𝘽𝙊𝙔 𝘼𝙉𝙄𝙀𝙔-𝛭𝐷",
  author: process.env.PACK_AUTHER || "𝘿𝙀𝙇𝘽𝙊𝙔 𝘼𝙉𝙄𝙀𝙔-ᴍᴅ",
  packname: process.env.PACK_NAME || "𝘿𝙀𝙇𝘽𝙊𝙔 𝘼𝙉𝙄𝙀𝙔",
  botname: process.env.BOT_NAME || "𝘿𝙀𝙇𝘽𝙊𝙔-MD",
  ownername: process.env.OWNER_NAME || "𝘿𝙀𝙇𝘽𝙊𝙔 𝘼𝙉𝙄𝙀𝙔",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "EyqbCCWYTc8b49cmWM0KT3BlbkFJ0NRSC7K1BiTJo3ikuriW",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "JAY").toUpperCase(),
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
