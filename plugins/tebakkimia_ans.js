const similarity = require('similarity')
const threshold = 0.72
module.exports = {
    async before(m) {
        let id = m.chat
        if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Type .*hint/i.test(m.quoted.text)) return !0
        this.tebakkimia = this.tebakkimia ? this.tebakkimia : {}
        if (!(id in this.tebakkimia)) return m.reply('The problem has ended')
        if (m.quoted.id == this.tebakkimia[id][0].id) {
            let json = JSON.parse(JSON.stringify(this.tebakkimia[id][1]))
            // m.reply(JSON.stringify(json, null, '\t'))
            if (m.text.toLowerCase() == json.name.toLowerCase().trim()) {
                global.db.data.users[m.sender].exp += this.tebakkimia[id][2]
                m.reply(`*Right!*\n+${this.tebakkimia[id][2]} XP`)
                clearTimeout(this.tebakkimia[id][3])
                delete this.tebakkimia[id]
            } else if (similarity(m.text.toLowerCase(), json.name.toLowerCase().trim()) >= threshold) m.reply(`*A little more!*`)
            else m.reply(`*Wrong!*`)
        }
        return !0
    },
    exp: 0
}
