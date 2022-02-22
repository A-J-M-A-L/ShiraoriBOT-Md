/**
diupload oleh https://github.com/uhdahlah
**/


let fetch = require('node-fetch')

let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.puzzle = conn.puzzle ? conn.puzzle : {}
    let id = m.chat
    if (id in conn.puzzle) {
        conn.reply(m.chat, 'There are still questions unanswered in this chat', conn.puzzle[id][0])
        throw false
    }
    let res = await fetch(global.API('http://zekais-api.herokuapp.com', '/tebakunsur'))
    if (res.status !== 200) throw await res.text()
    let json = await res.json()
    if (json.status != 200) throw json
    let caption = `
The name of the element of the symbol ${json.simbol} is...

Timeout *${(timeout / 1000).toFixed(2)} second*
Type ${usedPrefix}puzzle for help
Bonus: ${poin} XP
`.trim()
    conn.puzzle[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.puzzle[id]) conn.reply(m.chat, `Time runs out!\nThe answer is *${json.name}*`, conn.puzzle[id][0])
            delete conn.puzzle[id]
        }, timeout)
    ]
}
handler.help = ['puzzle']
handler.tags = ['game']
handler.command = /^puzzle/i

module.exports = handler
