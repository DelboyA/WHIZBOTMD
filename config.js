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
  "Asta;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0w3MStreWJCeUdRcThzTXowQ2ZWUU5TMzM3N1dlZ2EybEw4cFJZbjVYRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid3VzVERoenZHTVRJVkFoMzBHc1ZsZXZleUsyQjYvdkhYcjVtZFNWVk5BWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHQ1NMOU5obzVpRXFKVjMyMkxkQ0NUS3dkeWxwVDdNWVJDU1A5aFRNUG53PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5MjBDN3IwSytZQXJTV3h6a2tLdW8zbkxUVG1SYkpSNFRyWnVoTENqbmxVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBGeVNRVDNPKzBDTWhtWk1IM3BLajh5MUV0aTZ0Tmlmbm8yNjI2UzhjM1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlI1aEw0NlVIL1NlQlVxZ0kxMGFmZjBvQ2ZOMDgvT3hRa0FZSUpOT2szVDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkY0ZG45VUdrTkR4ZGswLyt3amtaMkN0a3Y1Q1FyYW9yNTBkRXdobUYxND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUzZVb09Eb0p5SnU4UGZCQnIrODc3dUh1dUF2R0NhQ0QvWG5ZSktnbGxGcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktGMGhDeWJ0ZmtEUEVRZ3VNZCtZVUZISFA3RjhmbzhNZ2NLNlRFRHJFN2dnc0Y1Qzl4Qk91Y2pJVi9vMUd5VXc1OU9nWUcxOWpKZVhpVDdLbjBGOWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY4LCJhZHZTZWNyZXRLZXkiOiJBa2hERE8xd051bkFTSFRlUmgrUmlOQVVUM2NxWGhUZmlFbk9vLzFKa3pFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc3MzQ0MDc1OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxMTU4MkQ3QTU1MUFFRDc4MEMxMzE3NzM0NjEyRTEwNSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE3MjE3MDk1fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJMaVJISGpBMFFPeVdzOXdCemVxTTZBIiwicGhvbmVJZCI6IjQ4M2M5ZDA4LTU2YTUtNDQ5Ny1hY2M3LTQ0N2Q5YTFjZjcxYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwS21XQmVJKzFtV2YzdkVnQTNKeXZ0aWNoazA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicm85TnFlRVVzaE1Ic1BOdEVzbTFtc2hFMXVZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik5YNFFTMVJKIiwibWUiOnsiaWQiOiIyNTQ3NzM0NDA3NTg6NTZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2Yv/CdmYDwnZmH8J2YvfCdmYrwnZmUIPCdmLzwnZmJ8J2ZhPCdmYDwnZmU8J+YjiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTXUrazlNQ0VMWE82cklHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQnlBZXBsMEZsekxhNVc1UkpQcXlxUjdieTVwU3dURUhsWmVZTU81WGFnWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNmF5QmphSjZYRmd0QXV4L3d5LzExNGVNWmFlbDFwZkg1L0svNXQ4eXZqTXdZc1hZbGRZK0RFTTJFNEJEbkhoN0ZoR3FLS3hHRkxOdUwwNVU4MjVSQkE9PSIsImRldmljZVNpZ25hdHVyZSI6InZIQTNZUHdRMm9Wd0FNVTkxeFgxQyt2bzJDZ2lINzVpSkhPN0NzRlFBanNSckhFdVlxUG9kMlJRZ2FIUVZXY0xlUnJZbVVOUmNQZ0NkTjRyTW5FdmdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzczNDQwNzU4OjU2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFjZ0hxWmRCWmN5MnVWdVVTVDZzcWtlMjh1YVVzRXhCNVdYbUREdVYyb0cifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTcyMTcwOTEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSmkwIn0="
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
