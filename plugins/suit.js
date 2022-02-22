let handler = async (m, { text, usedPrefix }) => {
    let salah = `Available options \ n \ scissors, paper, stone\n\n${usedPrefix}scissor suit\n\nplease space!`
    if (!text) throw salah
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'batu'
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'scissor'
    } else {
        astro = 'paper'
    }

    //menentukan rules
    if (text == astro) {
        m.reply(`Seri!\nYou: ${text}\nBot: ${astro}`)
    } else if (text == 'batu') {
        if (astro == 'scissor') {
            global.db.data.users[m.sender].money += 1000
            m.reply(`You win! +Rp1000\nYou: ${text}\nBot: ${astro}`)
        } else {
            m.reply(`You lose!\nYou: ${text}\nBot: ${astro}`)
        }
    } else if (text == 'scissor') {
        if (astro == 'paper') {
            global.db.data.users[m.sender].money += 1000
            m.reply(`You win! +Rp1000\nYou: ${text}\nBot: ${astro}`)
        } else {
            m.reply(`You lose!\nYou: ${text}\nBot: ${astro}`)
        }
    } else if (text == 'paper') {
        if (astro == 'batu') {
            global.db.data.users[m.sender].money += 1000
            m.reply(`You win! +Rp1000\nYou: ${text}\nBot: ${astro}`)
        } else {
            m.reply(`You lose!\nYou: ${text}\nBot: ${astro}`)
        }
    } else {
        throw salah
    }
}
handler.help = ['suit']
handler.tags = ['game']
handler.command = /^(suit)$/i

module.exports = handler
