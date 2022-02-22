const uploadImage = require('../lib/uploadImage')
const { sticker } = require('../lib/sticker')
let handler = async (m, { conn, text, usedPrefix, command }) => {

    let [atas, bawah] = text.split`|`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `Reply image with command\n\n${usedPrefix + command} <${atas ? atas : 'Top text'}>|<${bawah ? bawah : 'bottom text'}>`
    if (!/image\/(jpe?g|png)/.test(mime)) throw `_*Mime ${mime} not supported!*_`
    let img = await q.download()
    let url = await uploadImage(img)
    meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`
    stiker = await sticker(false, meme, global.packname, global.author)
     conn.sendFile(m.chat, stiker, '','',m)

}
handler.help = ['stikermeme <Top text>|<bottom text>']
handler.tags = ['sticker']
handler.command = /^(s(tic?ker)?meme)$/i

handler.limit = true

module.exports = handler
