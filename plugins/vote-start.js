let handler = async (m, { conn, text, usedPrefix }) => {
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    if (id in conn.vote) {
        throw `_There is still a vote in this chat!_\n\nuse *${usedPrefix}delvote* - To delete Vote.`
    }
    m.reply(`Vote start!\n\n*${usedPrefix}upvote* - for yes\n*${usedPrefix}devote* - for not\n*${usedPrefix}checkvote* - to check vote\n*${usedPrefix}delvote* - To delete Vote.`)
    conn.vote[id] = [
        text,
        [],
        []
    ]
}
handler.help = ['startvote [alasan]']
handler.tags = ['vote']
handler.command = /^(start|mulai)vote$/i
handler.limit = true
handler.group = true
handler.admin = true
module.exports = handler
