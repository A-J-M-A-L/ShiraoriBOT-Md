/* Recoded By Ajmal*/
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let moment = require('moment-timezone')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let tqto = `
*── 「 RULES AND FAQ 」 ──*

1. Don't spam bots. 🙅 ️
Sanctions: *⚠️ WARN/SOFT BLOCK*

2. Don't call bots. ️☎️
Sanctions: *❎ SOFT BLOCK*

3. Don't exploit bots.😖
Sanctions: *‼️ PERMANENT BLOCK ️*

️🗯 Bot not or slow to respond ?
️➡️ May be affected by network, signal, banned by Whatsapp and some random. Keep obeying the rules‼️

️🗯 Where can I get the script from this bot?
️➡️ This script is still private and has never been traded, be wise in knowing fraudsters.

️🗯 Can I add to the group?
➡️️ The bot is temporarily in free to add status.

🗯️ What's the prefix?
️➡️ This bot uses multi prefix. That means you can use the prefix #, . , and other reasonable prefixes.

️🗯 Sis, why is the chat owner not responding?
️➡️ The owner only responds to questions about bots and error problems, not for acquaintances or begging for scripts.


If you understand the rules, please type *${prefix}allmenu* to get started!

️⚠️ All Zeus Bot MD policies and conditions are held by the owner and all policy changes, at any time the owner has the right to revoke, block users (*﹏*)

Thank you very much! For you, friendly users and some people who also helped in the project of making Zeus bot MD
😖🙏`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: tqto,
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./media/tqto.jpg') }, 
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'WEBSITE💻',
               url: 'a-j-m-a-l.github.io'
             }

           },

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^(rules)$/i

module.exports = handler
