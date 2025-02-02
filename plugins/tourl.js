const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No media found'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`© ᴢᴇᴜs ᴍᴅ\n\n${link}
${media.length} Byte(s)
${isTele ? '(No Expiration Date)' : '(Not known)'}`)
}
handler.help = ['url <reply image>']
handler.tags = ['sticker']
handler.command = /^(upload|url)$/i

module.exports = handler
