const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_48_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDUzLFxuICAgICAgICA3MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDU4LFxuICAgICAgICA5NixcbiAgICAgICAgNjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTgzLFxuICAgICAgICA3NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ1LFxuICAgICAgICA2NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxODMsXG4gICAgICAgIDYyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDg4LFxuICAgICAgICA4MixcbiAgICAgICAgODMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE4LFxuICAgICAgICA3MixcbiAgICAgICAgNTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODksXG4gICAgICAgIDgxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3LFxuICAgICAgICA4NyxcbiAgICAgICAgODMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg1LFxuICAgICAgICA4MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDYxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQzLFxuICAgICAgICA1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNixcbiAgICAgICAgMTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwLFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMixcbiAgICAgICAgNjgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDg5LFxuICAgICAgICAzOSxcbiAgICAgICAgMzksXG4gICAgICAgIDExLFxuICAgICAgICA3NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI2LFxuICAgICAgICAzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjExLFxuICAgICAgICA2OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDY0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJCZU1BMzJWaTU4eU1UemV4MmppYzFGZHNDZlh6MzlBVHRCUTI4THd6aEhzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJMNmpLNGlkTlRQeW5WaElyMHR3b1lBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjNlMDU0ZGE3LThjYjktNGM1MS1iMmIwLTcxZmI4NGFlNzg4NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MSxcbiAgICAgIDg2LFxuICAgICAgNjEsXG4gICAgICAyMTUsXG4gICAgICAxMDEsXG4gICAgICAxMCxcbiAgICAgIDIwOSxcbiAgICAgIDIxNyxcbiAgICAgIDEyMCxcbiAgICAgIDEwNixcbiAgICAgIDE1NSxcbiAgICAgIDIwLFxuICAgICAgMTk0LFxuICAgICAgMjM1LFxuICAgICAgMjEsXG4gICAgICAyMTUsXG4gICAgICAxNjQsXG4gICAgICAxOTYsXG4gICAgICAyMzIsXG4gICAgICAxNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMsXG4gICAgICAxOCxcbiAgICAgIDI3LFxuICAgICAgMjUsXG4gICAgICAxLFxuICAgICAgMjQyLFxuICAgICAgNjUsXG4gICAgICAzMyxcbiAgICAgIDE0MyxcbiAgICAgIDE2NSxcbiAgICAgIDExLFxuICAgICAgMjQ1LFxuICAgICAgMjM0LFxuICAgICAgMTUyLFxuICAgICAgMTY1LFxuICAgICAgMjE4LFxuICAgICAgMjM5LFxuICAgICAgMjA4LFxuICAgICAgODgsXG4gICAgICA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVWVEhaTDlBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzMyNDY0NDM2MDQ6NDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJOSlwiLFxuICAgIFwibGlkXCI6IFwiMTc3NjQwMTgyOTYwMzMzOjQ3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tiZW42c0VFT0NXODdRR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOW1oRGhHTUMycGdHS3FRTlpBWGtCYmZhZG03QWRkU3dTVW5nTk12VGV5ND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJMWEwxTWRPeEU3MUxTNFlBaEFPWUFiYlMwSlhOVVpBaWtIcndKZEdvS0RrOWlhQTV3bXBPTFYyb0o0d3dRTXNibnVzY2Y3UzNHOXlSN3RhZFdzUUNDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBUVhTeVpYR1YyK3hQMk5HQUNNNFNaYlQxTTF3b1psR3FyQTkrWkJCa3BlOWt1c3FFTUs0UW5rZHdvdlpWNG5ncHJ4OTNLaVFRUEIrbTE2OVQrY3RnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzMyNDY0NDM2MDQ6NDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTU1MTcxNlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
