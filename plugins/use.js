let { MessageType } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) =>  {
    let msgerror = (pickRandom(['Error', 'astagfirullah error', 'Nice Error', 'Wrong formatting:v', 'error bro', 'Hilarious error :v', 'wtf error :v', 'Oops, mistake', ' guinea pig mistake', 'dahlah (emot stone) error ']))
    try {
        let msgkurang = (pickRandom(['Your potion is not enough', "ciaa there aren't enough potions :v", ​​"wtf isn't enough :v", ​​"buy potions first, your potions aren't enough", "You don't have enough potions", "eyyyy you don't have enough potions","buy first", "I don't want to use potions but don't there's a potion :v", ​​"ask someone else to transfer a potion, so you don't lose your potion :v", ​​"Buy a potion first KK"]))
        let msgpenuh = (pickRandom(['Your life is full', 'Take a look at your inv, your life is already 100, why use potions again?', 'Your health is full woyy', 'ws kebek weh :v', ​​'your life is full :v', ​​'uhh weh , already full']))
        let kucing = global.db.data.users[m.sender].kucing
        let usepotion = (kucing == 0 ? 40 : '' || kucing == 1 ? 45 : '' || kucing == 2 ? 50 : '' || kucing == 3 ? 55 : '' || kucing == 4 ? 60 : '' || kucing == 5 ? 65 : '' || kucing == 6 ? 70 : '' || kucing == 7 ? 75 : '' || kucing == 8 ? 80 : '' || kucing == 9 ? 85 : '' || kucing == 10 ? 90 : '')
        let healt = global.db.data.users[m.sender].healt
        if (/use|pakai/i.test(command)) {
            try {
                let count = (/[0-9]/g.test(args[1])) ? !args[1] || args.length < 2 ? Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / usepotion)), 1) : Math.max(args[1], 1) : Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / usepotion)), 1)
                 let msgsucces = (pickRandom(['success using', 'Nice success using', 'successful drinking', 'primitive you used', 'you used', 'you used']) + ' *' + (count * 1) + '* Potion')
                 if (args[0] === 'potion') {
                    if (global.db.data.users[m.sender].healt < 100) {
                        if (global.db.data.users[m.sender].potion >= count * 1) {
                            global.db.data.users[m.sender].potion -= count * 1
                            global.db.data.users[m.sender].healt += usepotion * count
                            conn.reply(m.chat, msgsucces, m)
                        } else conn.reply(m.chat, msgkurang, m)
                    } else conn.reply(m.chat, msgpenuh, m)
                } else if (args.length > 2 && args[0] === !'potion') m.reply(pickRandom(["Can only use potions", "What do you want to use? You can only use potions :v", "What do you want to use, can't you only use potions", "Wow, you can only use potions", "Well, what do you want to use?, can't you only use potions"]) + '\nExamples of use: *' + usedPrefix + 'potion 1*')
            } catch (e) {
                console.log(e)
                m.reply(msgerror)
                if (DevMode) {
                    let file = require.resolve(__filename)
                    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                        conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
                    }
                }
            }
        } else if (/heal/i.test(command)) {
            try {
                let count = (/[0-9]/g.test(args[0])) ? !args[0] || args.length < 1 ? Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / usepotion)), 1) : Math.max(args[0], 1) : Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / usepotion)), 1)
                let msgsucces = (pickRandom(['success using', 'Nice success using', 'successful drinking', 'primitive you used', 'you used', 'you used']) + ' *' + (count * 1) + '* Potion')
                if (global.db.data.users[m.sender].healt < 100) {
                    if (global.db.data.users[m.sender].potion >= count * 1) {
                        global.db.data.users[m.sender].potion -= count * 1
                        global.db.data.users[m.sender].healt += usepotion * count
                        conn.reply(m.chat, msgsucces, m)
                    } else conn.reply(m.chat, msgkurang, m)
                } else conn.reply(m.chat, msgpenuh, m)
            } catch (e) {
                console.log(e)
                m.reply(msgerror)
                if (DevMode) {
                    let file = require.resolve(__filename)
                    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                        conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
                    }
                }
            }
        }
    } catch (e) {
        console.log(e)
        conn.reply(m.chat, msgerror, m)
        if (DevMode) {
            let file = require.resolve(__filename)
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['use <item> <total>', 'heal']
handler.tags = ['rpg']
handler.command = /^(use|heal)$/i
handler.group = true

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
