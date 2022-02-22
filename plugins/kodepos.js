let fetch = require('node-fetch')
let handler = async(m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*This command to search postal code by city/search*\n\nExample:\n${usedPrefix + command} Lamongan`
    let res = await fetch(global.API('xteam', '/postcode', { q: text }, 'APIKEY'))
    if (res.status != 200) throw await res.text()
    let json = await res.json()
    if (!json.status) throw json
    let mes = json.result.map((v, i) => `${i + 1}. Province: ${v.province}\nCity: ${v.city}\nDistrict: ${v.subdistrict} \nUrban: ${v.urban}\nPostal Code: ${v.postalcode}`).join('\n\n')
    m.reply(mes)
}
handler.help = ['postcode <city>']
handler.tags = ['tools']
handler.command = /^postcode$/i

handler.limit = true

module.exports = handler
