const axios = require('axios');module.exports.config = {name: "ocr",version: "1.0",author: "Gpt x Mesbah",credits: "Gpt x Mesbah",countDown: 5,cooldowns: 5,role: 0,hasPermssion: 0,description: 'scrape image to text',category: "𝗧𝗢𝗢𝗟'𝗦",commandCategory: "𝗧𝗢𝗢𝗟'𝗦"};module.exports.onStart = async function ({ api, args, message, event }) {try{message.reaction("🕐", event.messageID);const img = event.messageReply.attachments[0].url;const res = await axios.get(`https://mesbah-apis.onrender.com/api/tools/ocr?imageUrl=${encodeURIComponent(img)}`);const txt = res.data.text;message.reply({ body: `${txt}` });await message.reaction("✅", event.messageID);} catch (error) {message.reply(error.message);}};
