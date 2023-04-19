const fs = require("fs");
const {
   indonesia
} = require("./language");

// Website Api (jgn di ganti biar gk eror)
global.APIs = {
   alfa: 'https://api.arifzynstore.my.id', 
   alfa1: 'https://api.lolhuman.xyz',//apabila link api eror, segera laporkan ke owner
}

//buy apikey premium 0887435047326
// Free apikey (silahkan login terus ganti Your Key dgn apikey lu)
global.APIKeys = {
   'https://api.arifzynstore.my.id': '6dncARn7Q8',
   'https://api.lolhuman.xyz': 'b01703166d898c6bc0ef7915',// 👉 login https://api.zeeoneofc.my.id to get apikey
}

//language 
global.language = indonesia //change indonesia to english if you don't understand the language used by the bot

global.BOT_TOKEN = "6034265101:AAEwNo8F8gv0yRf5sysyt7NSN5x_Elng4TE" //create bot here https://t.me/BotFather and get the bot token
global.BOT_NAME = "Kyy-Mdོ" //your bot name
global.OWNER_NAME = "ᴹᴿ᭄ FikiOfcོ ×፝֟͜×" //your name
global.OWNER_NUMBER = "6283899262114" //your telegram number
global.OWNER = ["https://t.me/Kyystorey", "https://t.me/zeeone_ofc"] // pastikan username sudah sesuai agar fitur khusus owner bisa di pakai
global.THUMBNAIL = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.DONASI = "./Screenshot_20230419-144340_Gojek.jpg" // foto donasi di folder image
global.lang = language //don't change
