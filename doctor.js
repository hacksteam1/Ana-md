/*

               ┎━━━━━━━━━━━━━━━━━━━━━━━━━━━━
               ┃amg, deixe os creditos pra mim (Z A L T S)
               ┃sla né, poderia pelo menos deixa isso pra mim
               ┃afinal, o bot foi feito por mim 
               ┃mas vc que sabe.
               ┃sei que não é muita coisa, a visto de quem já sabe progamar
               ┃mas eu fiz pensando na qualidade
               ┃não na quantidade
               ┃adios:)
               ┖━━━━━━━━━━━━━━━━━━━━━━━━━━━━

*obs:  fiz comandos basicos para vc continuar, e fazer seu bot, usei uma base e montei o doctor, espero que goste               
Copyrights by Zalts +55 66 9971-7091
Copyrights by Carlos +55 79 9939-8421
Copyrights by Dark +55 17 99669-0040

creditos

desing de img por: Zalts
desing de fonte por: Zalts
filtragem por: Zalts
manipulação de modulos por: Zalts
base fornecida por: Carlos
surporte de erros: Carlos ; Dark
correções de bulgs: Zalts ; Dark ; Carlos
comandos criados por: Carlos ; Zalts
*/
// API DO ZIP ZOP
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
// CARREGANDO DATABESES
global.db = JSON.parse(fs.readFileSync('./banco de dados/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    ...(global.db || {})
}
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
              ///SISTEMA DE PREMIUM\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\    
//⚠️modo de usar: apague os 5555555555 e 
//coloca o numero da pessoa que nem o meu
//numero abaixo
let prem2 = [`351933471425@s.whatsapp.net`, `5555555555@s.whatsapp.net`, `5555555555@s.whatsapp.net`, `5555555555@s.whatsapp.net`, `5555555555@s.whatsapp.net`, `5555555555@s.whatsapp.net`, `5555555555@s.whatsapp.net`, `5555555555@s.whatsapp.net`, `5555555555@s.whatsapp.net`, `5555555555@s.whatsapp.net`, `5555555555@s.whatsapp.net`, `5555555555@s.whatsapp.net`, `5555555555@s.whatsapp.net`]
// O NÚMERO DA PESSOA DEVE FICAR TODO JUNTO ANTES DO "@s.whatsapp.net"
var Puxada = true
// ALGUMAS DEFINIÇÕES
module.exports = doctor = async (doctor, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
///࿇ ══━━━━✥MSG DE BOM DIA✥━━━━══ ࿇\\\
var ase = new Date();
var tempo = ase.getHours();
switch(tempo){
case 0: tempo = `Boa noite ${pushname}🌛`; break;
case 1: tempo = `Boa noite ${pushname}🌛`; break;
case 2: tempo = `Boa noite ${pushname}🌛`; break;
case 3: tempo = `Bom Dia ${pushname}✨`; break;
case 4: tempo = `Bom Dia ${pushname}✨`; break;
case 5: tempo = `Bom Dia ${pushname}✨`; break;
case 6: tempo = `Bom Dia ${pushname}✨`; break;
case 7: tempo = `Bom Dia ${pushname}✨`; break;
case 8: tempo = `Bom Dia ${pushname}✨`; break;
case 9: tempo = `Bom Dia ${pushname}✨`; break;
case 10: tempo = `Bom Dia ${pushname}✨`; break;
case 11: tempo = `Boa tarde ${pushname}🔥`; break;
case 12: tempo = `Boa tarde ${pushname}🔥`; break;
case 13: tempo = `Boa tarde ${pushname}🔥`; break;
case 14: tempo = `Boa tarde ${pushname}🔥`; break;
case 15: tempo = `Boa tarde ${pushname}🌹`; break;
case 16: tempo = `Boa tarde ${pushname}🌹`; break;
case 17: tempo = `Boa tarde ${pushname}🌹`; break;
case 18: tempo = `Boa noite ${pushname}🌛`; break;
case 19: tempo = `Boa noite ${pushname}🌛`; break;
case 20: tempo = `Boa noite ${pushname}🌛`; break;
case 21: tempo = `Boa noite ${pushname}🌛`; break;
case 22: tempo = `Boa noite ${pushname}🌛`; break;
case 23: tempo = `Boa noite ${pushname}🌛`; break;
}
///࿇ ══━━━━✥FIM DAS MSG DE BOM DIA✥━━━━══ ࿇\\\

          ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                     ///CONSTS DE NOME E NUMERO\\\
         ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\    
        const ownerNumber = await doctor.decodeJid(global.owner)
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        const namebot = await doctor.decodeJid(global.bot)
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        const nameWoner = await doctor.decodeJid(global.name)
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        const nami = await doctor.decodeJid(global.nami)
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        const V = await doctor.decodeJid(global.V)
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        const botNumber = await doctor.decodeJid(doctor.user.id)
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        const itsMe = m.sender == botNumber ? true : false
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        const text = q = args.join(" ")
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        const quoted = m.quoted ? m.quoted : m
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
            
        ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                        ///CONSTS DE PREMIUM\\\
         ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\    
	    const isPremium2 = prem2.includes(m.sender)
	   //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
	    const premm2 = isPremium2 ? 'É PREMIUM' : 'NÃO É PREMIUM' 
	    //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        const mime = (quoted.msg || quoted).mimetype || ''
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
	    const isMedia = /image|video|sticker|audio/.test(mime)
	   //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
	   //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
	      
           ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                          ///CONSTS DE GRUPO\\\
         ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\    
        const groupMetadata = m.isGroup ? await doctor.groupMetadata(m.chat).catch(e => {}) : ''
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        const groupName = m.isGroup ? groupMetadata.subject : ''
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        const participants = m.isGroup ? await groupMetadata.participants : ''
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
    	const doctordmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆ 
         ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                                      ///MENUS\\\
        ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\            
        const { help } = require('./banco de dados/menus/help.js')
        const { menuclaro } = require('./banco de dados/menus/menuclaro.js')
        const { menuescuro } = require('./banco de dados/menus/menuescuro.js')
         ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                             ///VERIFICADOS\\\
        ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\            
        //selo com bom dia, boa tarde e boa noite\\
        const selo = { key: {fromMe: false,participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "doctor", "caption": `${tempo}`}}}
        const selo2 = { key: {participant: `0@s.whatsapp.net`, mentionedJid: `${doctor}`, ...(m.from ?{ remoteJid: `${m.from}` } : {}) },message: { "extendedTextMessage": {"text":`aqui está ${pushname} \n ANA BOT MD` }} }             
        const dfrply = fs.readFileSync('./banco de dados/fotos/logo.png')
        const Doc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `𝐂𝐎𝐍𝐓𝐀 𝐕𝐄𝐑𝐈𝐅𝐈𝐂𝐀𝐃𝐀 𝐏𝐄𝐋𝐎 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏`, jpegThumbnail: dfrply}}}
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
       ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                        // SELO TOCAVEL\\
      ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
    const reply = (teks) => {
            doctor.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"Título": ` NÃO ME TOQUE✋`,"body": ` ۞ANA BOT MD`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./banco de dados/fotos/logo.png`),"sourceUrl": "https://instagram.com/_caique77_?igshid=YmMyMTA2M2Y="}}}, { quoted: selo})
        }     
        const replay = (teks) => {
            doctor.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"Título": ` TOCA AQUI NÃO❗`,"body": ` ۞⃯ANA BOT MD`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./banco de dados/fotos/doctor0.png`),"sourceUrl": "https://instagram.com/_caique77_?igshid=YmMyMTA2M2Y="}}}, { quoted: selo})
        }
        if (!doctor.public) {
            if (!m.key.fromMe) return
        }
        ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                        // MENSAGENS ALEATORIAS\\
       ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
//____random de espera
 var zeltas =['aguarde😐','aguarde🔄','tô com preguiça, mas calma','aguarde seu cmd❗️','enquanto isso vai um café?☕️','aguarde um pouco...','já tô mandando desgraça','quem espera sempre consegue, entt espera ai','calma ai otario','o tempo é relativo amigo','rlx que em menos de 3 minutos eu te envio😮‍💨','calma ai🖖','já estou enviando coroi','já estou enviando kerelo','já estou enviando poula','já estou enviando boy','já já te mando lek🤙','em breve te envio']
var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
const calmi = zalts
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆      
//____random de adm
var wix =['como eu vou fazer isso sem adm?','me da adm kerelo','passa o adm primeiro','vou esperar meu adm, enquanto isso vai um café?☕️','dps do adm','meu adm?','isso não é comando de adm? entt pq eu não sou um?','calma ai otario, meu adm né?','okok, e meu adm?']
var tenw = wix[Math.floor(Math.random() * wix.length)]
const notmoder = tenw
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆      
//____random de só em grupos
var wiar =['vai ter como eu fazer isso não, só nesse grupo que posso fazer:       https://chat.whatsapp.com/J8vRQ1shgSq7xnoh1b4DKp','entra aqui e tentar usar isso de novo       https://chat.whatsapp.com/J8vRQ1shgSq7xnoh1b4DKp','se vc entrar aqui, te juro que faço esse cmd       https://chat.whatsapp.com/J8vRQ1shgSq7xnoh1b4DKp','não vou mandar pra vc aqui não, entra no grupo         https://chat.whatsapp.com/J8vRQ1shgSq7xnoh1b4DKp','se tu quiser entra aqui no grupo primeiro       https://chat.whatsapp.com/J8vRQ1shgSq7xnoh1b4DKp','só em grupos boy        https://chat.whatsapp.com/J8vRQ1shgSq7xnoh1b4DKp','calma ai otario, meu grupo primeiro né?        https://chat.whatsapp.com/J8vRQ1shgSq7xnoh1b4DKp','okok entra no grupo      https://chat.whatsapp.com/J8vRQ1shgSq7xnoh1b4DKp']
var nort = wiar[Math.floor(Math.random() * wiar.length)]
const ot = nort
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆      
//____random de dono
var wir =['esse comando é apenas pro meu dono seu pola','Você não pods usar esse cmd, vc não é digno','vc não manda em mim otario','vou te mandar no dia de são nunca','não vou fazer não','nan, nem pense, pq tu não é meu dono','não vou mandar pq só meu zaltizinho pode usar esse cmd']
var nuit = wir[Math.floor(Math.random() * wir.length)]
const fort = nuit
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆      
//____random de premio
var wirar =['esse comando é apenas pros meus usuarios premios','Você não pode usar esse cmd, vc não é digno','vc não pode usar esse comando, pq não é um usuário premium','contrate meu plano premio primeiro e depous use esse cmd','não posso fazer isso para pessoar que não são premio','vc não é premium','não vou mandar pq só meus usuarios premium pode usar esse cmd']
var nut = wirar[Math.floor(Math.random() * wirar.length)]
const fut = nut
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆      
//____random emoji
var ji =['⏤͟͟͞͞🌻','๖ۣۜۜ͜͡ீ͜💙 ','✧͢⃟ᤢ🌸-','   ⃟⌭','❦ ⃟ ᭄',' 🐺 ⃟々']
var mo = ji[Math.floor(Math.random() * ji.length)]
const emoji = mo
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆      
//____msg do bot   
		mess = {
			wait: 'Por favor, aguarde um pouco.',
			success: 'Sucesso!',
			wrongFormat: 'Formato incorreto!! Por favor, leia o menu!',
			error: {
				stick: 'Isso não é uma figurinha',
				url: 'Erro no url',
			},
			only: {
				group: 'Somente em grupos!',
				owner: 'Somente para o meu dono!',
				gcadmin: 'Somente para Adms!',
                botadm: 'Eu preciso ter adm pra executar esse comando.',
			}
		}

        msg = {
            espera: 'Aguarde um pouco pfv',
            gp: 'Eu so posso executar esse comando em grupos.',
            dono: 'Somente meu dono pode usar esse comando.',
            adm: 'Esse comando é so para adms',
            botadm: 'Eu preciso ter adm pra executar esse comando :)'
        }

        // PÚBLICO E PRIVADO
        if (!doctor.public) {
            if (!m.key.fromMe) return
        }

        ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
          ///DESING DO TERMUX, NÃO MECHA SE NÃO SOUBER\\\
         ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\    
        if (m.message) {
        	await doctor.readMessages([mek.key])
            console.log(chalk.black(chalk.bgWhite('Ana bot md')) + '\n' + chalk.red('┃mensagem'), chalk.cyan(budy || m.mtype) + '\n'  + chalk.red('┃o usuario usou o comando em:'), chalk.cyan(m.isGroup ? pushname : 'chat privado' + '\n' + chalk.red('┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')))
        }
	// ESCREVER NA DATABASE A CADA 1         setInterval(() => {
            fs.writeFileSync('./banco de dados/database.json', JSON.stringify(global.db, null, 2))
           

        // RESPOSTA DO COMANDO COM MÍDIA 
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
        let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: doctor.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, doctor.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        doctor.ev.emit('messages.upsert', msg)
  }
      
        switch(command) { //o seu burro do krl, quando for adicionar algum comando é em baixo desse switch 
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                   ///AREA DOS MENUS\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  
case 'help': {
let buttons = [
{buttonId: `${prefix}menu2`, buttonText: {displayText: '⏅ 𝐌 𝐄 𝐍 𝐔 𝟐⏅'}, type: 1}, 
{buttonId: `${prefix}menu`, buttonText: {displayText: '⏅ 𝐌 𝐄 𝐍 𝐔 ⏅'}, type: 1}]
let thumbInfo = `${help(prefix, tempo, pushname)}`;
blabla = fs.readFileSync('./banco de dados/fotos/logo.png');
buttonMessage = {image: blabla, caption: `${thumbInfo}`, 
footer: `© _Copyright by blue exorcist modz 
não apague nada desse comando
pode modificar tudo menos o comando de help`, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage, {quoted: Doc})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'menu': {
data = fs.readFileSync('./banco de dados/apis/fotos/foto.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}menu2`, buttonText: {displayText: '⏅ 𝐌 𝐄 𝐍 𝐔 𝟐⏅'}, type: 1}, 
{buttonId: `${prefix}ping`, buttonText: {displayText: '⏅ 𝐏 𝐈 𝐍 𝐆 ⏅'}, type: 1}]
let thumbInfo = `${menuclaro(namebot, nameWoner, ownerNumber, emoji, V, prefix, tempo, pushname)}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `${menuescuro(emoji, prefix, tempo, pushname)}`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
//caso vc queira um menu que não fique
//mudando a foto
//apague o menu acima e logo depois apague
//os // desse menu abaixo
//case 'menu': {
//let buttons = [
//{buttonId: `${prefix}menu2`, buttonText: {displayText: '⏅ 𝐌 𝐄 𝐍 𝐔 𝟐⏅'}, type: 1}, 
//{buttonId: `${prefix}menulist`, buttonText: {displayText: '⏅ 𝐌 𝐄 𝐍 𝐔 𝐋 𝐈 𝐒 𝐓 ⏅'}, type: 1}]
//let thumbInfo = `
//┏━━━━━━━━━━━━━━━┓
//┃[][■■■■■DOCTOR■■■■■■■][]┃
//┃┗━━━━━━━━━━━━━━┛
//┃OLA ${tempo}
//┗┓
//┏┨BEM VINDO(A) AO MEU MENU
//┃├━━━━━━━━━━━━━━
//┃┃ⓘ Esse usuário ${pushname} 
//┃┃${premm2} 
//┃├━━━━━━━━━━━━━━
//┃┃            ❰INFORMAÇÕES ❱
//┃┃
//┃┃Ativo a ${runtime(process.uptime())}
//┃┃Prefix: ❬ ${prefix} ❭
//┃┃Bot: ${namebot}
//┃┃Dono: ${nameWoner}
//┃┃Versão: ${V} 
//┃┃Nome: ${pushname}
//┃┃Numero do dono: ${ownerNumber}
//┃┃seu numero @${m.sender.split("@")[0]} 
//┃┃
//┣┛
//┗━━━━━━━━━━━━━━┓
//┏━━━━━━━━━━━━━━┛
//┃            ❰📝INFOR DO BOT 🐺❱
//┃
//┃ ${prefix}ping
//┗━━━━━━━━━━━━━━┓
//┏━━━━━━━━━━━━━━┛
//┃            ❰📝MENU DE GRUPO 👥️️❱
//┃
//┃ ${prefix}Marcar 
//┃ ${prefix}Ban 
//┃ ${prefix}Add 
//┃ ${prefix}Promote 
//┃ ${prefix}demote 
//┃ ${prefix}setdesc
//┃ ${prefix}setimgp
//┃ ${prefix}limpar
//┃ ${prefix}clear
//┗━━━━━━━━━━━━━━┓
//┏━━━━━━━━━━━━━━┛
//┃            ❰📝MENU DO DONO🕴 ❱
//┃
//┃ ${prefix}join
//┃ ${prefix}block
//┃ ${prefix}delete
//┃ ${prefix}getid
//┃ ${prefix}getcase
//┃ ${prefix}setbotpp
//┗━━━━━━━━━━━━━━┓
//┏━━━━━━━━━━━━━━┛
//┃      ❰📝MENU PREMIUM 💎❱
//┃
//┃${prefix}hentai
//┃${prefix}neko
//┃${prefix}loli
//┃${prefix}hentaigay
//┃${prefix}crash
//┃${prefix}crashuser
//┗━━━━━━━━━━━━━━┓
//┏━━━━━━━━━━━━━━┛
//┃    ❰📝MENU IMG ALEATORIA 😶‍🌫️❱
//┃
//┃${prefix}wallpaperdark
//┃${prefix}wallpaperanimes
//┃${prefix}wallpaper4k
//┃${prefix}wallpapersbranco
//┃${prefix}wallpapervermelho
//┃${prefix}wallpaperverde
//┃${prefix}wallpaperazul
//┃${prefix}wallpaperoxo
//┃${prefix}wallpaperamarelo
//┃${prefix}wallpaperosa
//┗━━━━━━━━━━━━━━┓
//┏━━━━━━━━━━━━━━┛
//┃        ❰📝MENU SHITPOST😅 ❱
//┃
//┃${prefix}shitpost
//┃${prefix}outroshiTpost
//┗━━━━━━━━━━━━━━┓
//┏━━━━━━━━━━━━━━┛
//┃       ❰📝MENU STICKER🖼 ❱
//┃
//┃${prefix}sgif
//┃${prefix}f
//┃${prefix}s
//┃${prefix}sticker
//┃${prefix}figu
//┃${prefix}figurinha
//┃${prefix}fig
//┗━━━━━━━━━━━━━━┓
//┏━━━━━━━━━━━━━━┛
//┃      ❰📝MENU DE JOGOS 🎯❱
//┃
//┃${prefix}roleta
//┃${prefix}roleta2
//┃${prefix}roleta3
//┃${prefix}magro
//┃${prefix}magra
//┃${prefix}gordo
//┃${prefix}gorda
//┃${prefix}velha
//┃${prefix}velho
//┃${prefix}nãobinario
//┃${prefix}hetero
//┃${prefix}trans
//┃${prefix}lesbica
//┃${prefix}pan
//┃${prefix}gay
//┃${prefix}bi
//┃${prefix}lgbt+
//┃${prefix}animal
//┃${prefix}cachorro
//┃${prefix}cadela
//┃${prefix}prostituta
//┃${prefix}prostituto
//┃${prefix}mendiga
//┃${prefix}mendigo
//┃${prefix}branca
//┃${prefix}branco
//┃${prefix}chata
//┃${prefix}chato
//┃${prefix}rica
//┃${prefix}rico
//┃${prefix}macaco
//┃${prefix}macaca
//┃${prefix}mamaca
//┃${prefix}mamaco
//┃${prefix}anarquico
//┃${prefix}comunista
//┃${prefix}nazista
//┃${prefix}amarela
//┃${prefix}amarelo
//┃${prefix}puto
//┃${prefix}puta
//┃${prefix}feio
//┃${prefix}feia
//┗━━━━━━━━━━━━━━┓
//┏━━━━━━━━━━━━━━┛
//┃     ❰📝MENU CONVERTEDOR ♻️❱
//┃
//┃${prefix}toim
//┃${prefix}toimage
//┃${prefix}tourl
//┃${prefix}togif
//┃${prefix}toaudio
//┃${prefix}toaud
//┃${prefix}toimg
//┃${prefix}toimage
//┗━━━━━━━━━━━━━━`;
//blabla = fs.readFileSync('./banco de dados/fotos/doctor.png');
//buttonMessage = {image: blabla, caption: `${thumbInfo}`, footer: `© _Copyright by Zalts_`, buttons: buttons, headerType: 4}
//doctor.sendMessage(m.chat, buttonMessage, {quoted: selo})
//}
//break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'menu2':
data = fs.readFileSync('./banco de dados/apis/fotos/fotodois.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
doctor.sendMessage(m.chat, {image: imagem, caption:
`
┏━━━━━━━━━━━━━━┓
┃[][■■■■■ANA BOT■■■■■■][]┃
┃┗━━━━━━━━━━━━━┛
┗┓
┏┨BEM VINDO(A)
┃┃AO MEU MENU2
┃├━━━━━━━━━━━━━━
┃┃            ❰INFORMAÇÕES ❱
┃┃
┃┃Prefix: ❬ ${prefix} ❭
┃┃Bot: ${namebot}
┃┃Dono: ${nameWoner}
┃┃Versão: ${V} 
┃┃Nome: ${pushname}
┃┃Numero do dono: ${ownerNumber}
┣┛
┗━━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━━┛
┃    ❰📝MENU ALEATORIO🐺❱
┃
┃${prefix}frase
┃${prefix}recadoprowhatsapp
┃${prefix}frasebonita
┃${prefix}frasecriativas
┗━━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━━┛
┃❰📝MENU DE JOGOS 🎯❱
┃
┃${prefix}roleta
┃${prefix}roleta2
┃${prefix}roleta3
┃${prefix}magro
┃${prefix}magra
┃${prefix}gordo
┃${prefix}gorda
┃${prefix}velha
┃${prefix}velho
┃${prefix}nãobinario
┃${prefix}hetero
┃${prefix}trans
┃${prefix}lesbica
┃${prefix}pan
┃${prefix}gay
┃${prefix}bi
┃${prefix}lgbt+
┃${prefix}animal
┃${prefix}cachorro
┃${prefix}cadela
┃${prefix}prostituta
┃${prefix}prostituto
┃${prefix}mendiga
┃${prefix}mendigo
┃${prefix}branca
┃${prefix}branco
┃${prefix}chata
┃${prefix}chato
┃${prefix}rica
┃${prefix}rico
┃${prefix}macaco
┃${prefix}macaca
┃${prefix}mamaca
┃${prefix}mamaco
┃${prefix}anarquico
┃${prefix}comunista
┃${prefix}nazista
┃${prefix}amarela
┃${prefix}amarelo
┃${prefix}puto
┃${prefix}puta
┃${prefix}feio
┃${prefix}feia
┗━━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━━┛
┃❰📝MENU CONVERTEDOR ♻️❱
┃
┃${prefix}toimg
┃${prefix}toimage
┃${prefix}tourl
┃${prefix}togif
┃${prefix}toaudio
┃${prefix}toaud
┃${prefix}toimg
┃${prefix}toimage
┗━━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━━┛
┃❰📝MENU STICKER ALET♻️❱
┃
┃${prefix}packsticker
┃${prefix}dado
┃${prefix}dado2
┃${prefix}emojimix
┃${prefix}stickeralet
┗━━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━━┛
┃❰📝MENU DE VIDEOS🎥❱
┃
┃${prefix}video1
┃${prefix}video2
┃${prefix}video3
┃${prefix}video4
┗━━━━━━━━━━━━━━
` },{quoted: selo})
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
//caso queira usar esse list é só apagar o @null e colocar o nome do comando, exemplo no help
case 'menulist': {
               let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `
╔╦════════════════╦╗
╬╬════════════════╬╬
██OLA CARO AMIGO, SIGA   ██
██OS MENUS ABAIXO PARA██
██SE ORIENTAR SOBRE O    ██
██BOT ANA MD                      ██
◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣
◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣
`,
                    description: `Seja bem vindo ao meu menu list\n\n`,
                    buttonText: "M  E  N  U  S",
                    footerText: `ANA 1.0 MD`,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "INFORMAÇÕES",
								"rows": [
									{
										"title": "🇲 🇪 🇳 🇺   🇵 🇷 🇮 🇳 🇨 🇮 🇵 🇦 🇱 ",
										"description": "Exibe a lista de recursos principais",
										"rowId": `${prefix}help`
									}
								]
							},
							{
								"title": "Descrição foda",
								"rows": [
									{
										"title": "BOTÃO 1",
										"description": "ELE FAZ OQ VC QUER",
										"rowId": `${prefix}@Null`
									},
									{
										"title": "BOTÃO2",
										"description": "ELE FAZ OQ VC QUISER",
										"rowId": `${prefix}@Null`
										},
									{
										"title": "BOTÃO3",
										"description": "ELE FAZ OQ VC QUISER",
										"rowId": `${prefix}@null`
										},
									{
										"title": "BOTÃO4",
										"description": "ELE FAZ OQ TU QUISER",
										"rowId": `${prefix}@NULL`
									}
								]
							},
						],
          listType: 1
                }
            }), {})
            doctor.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
               ///AREA DOS STICKER\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  
case 'fig': case 'figurinha': case 'figu': case 'sticker': case 's': case 'f': case 'sgif': {
    if (!m.isGroup) throw `esse tipo de comando é exclusivo do grupo doctor:\n\https://chat.whatsapp.com/J8vRQ1shgSq7xnoh1b4DKp`
    if (!quoted) throw `Marque um video ou imagem com o comando ${prefix + command}`
    reply(`${calmi}`)
            if (/image/.test(mime)) {
        let media = await quoted.download()
        let encmedia = await doctor.sendImageAsSticker(m.chat, media, selo, { packname: global.packname, author: global.author })
        await fs.unlinkSync(encmedia)
    } else if (/video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 11) return m.reply('Marque um video de até 10 segundos!')
        let media = await quoted.download()
        let encmedia = await doctor.sendVideoAsSticker(m.chat, media, selo, { packname: global.packname, author: global.author })
        await fs.unlinkSync(encmedia)
    } else {
        throw `Hmmm possivel erro, marque um video ou foto com o comando ${prefix + command}\nO video tem que durar 9 segundos`
        }
    }
    break    
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                     ///AREA DO DONO\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  
case 'join': {
                if (!isCreator) throw `${fort}`
                if (!text) throw 'falta o link do grupo!'
                m.reply(`${calmi}`)
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalido!'
                m.reply('espere meu nobre')
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await doctor.groupAcceptInvite(result).then((res) => console.log(jsonformat(res))).catch((err) => console.log(jsonformat(err)))
            }
            break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'setbotpp': {
                if (!isCreator) throw `${fort}`
                if (!quoted) return replay(`Enviar/Responder imagem com legenda ${prefix + command}`)
                if (!/image/.test(mime)) return replay(`Enviar/Responder imagem com legenda ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`Enviar/Responder imagem com legenda ${prefix + command}`)
                let media = await doctor.downloadAndSaveMediaMessage(quoted)
                await doctor.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'delete': case 'del': case 'd': case 'apagar': {
	            if (!isCreator) throw `${fort}`
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Mencione uma mensagem do bot para ser deletada!'
                doctor.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break 
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'block': {
		if (!isCreator) throw `${fort}`
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await doctor.updateBlockStatus(users, 'unblock').then((res) => console.log(jsonformat(res))).catch((err) => console.log(jsonformat(err)))
	}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'getid':
if (!isCreator) throw `${fort}`
            m.reply(m.chat)
            break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'getcase':
try{
if (!isCreator) throw `${fort}`
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("doctor.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
m.reply(`${getCase(q)}`)
} catch(e) {
console.log(e)
m.reply('Case inexistente')
}
break         
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                 ///AREA DOS PLAY\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  
case 'play': case 'ytplay': {
    if (!m.isGroup) throw `${ot}`
    if (!text) throw `Example : ${prefix + command} pablo vitar seu amor me pegou`
    let yts = require("yt-search")
    let search = await yts(text)
    let dow = search.videos[Math.floor(Math.random() * search.videos.length)]
    let buttons = [
        {buttonId: `${prefix}ytmp3 ${dow.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
        {buttonId: `${prefix}ytmp4 ${dow.url}`, buttonText: {displayText: '► Video'}, type: 1}
    ]
    let buttonMessage = {
        image: { url: dow.thumbnail },
        caption: `
✏️ Título: ${dow.title}
⌛ Duração: ${dow.timestamp}
👁‍🗨 Visualizações : ${dow.views}
📅 Data De Envio: ${dow.ago}
🎭 Autor : ${dow.author.name}
👤 Canal: ${dow.author.url}
🎶 Descrição : ${dow.description}
🔗 Url : ${dow.url}`,
        footer: `🎶 Usuario: ${m.pushName}`,
        buttons: buttons,
        headerType: 4
    }
    doctor.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'ytmp3': case 'ytaudio': {
    if (!m.isGroup) throw `${ot}`
    let { yta } = require('./lib/y2mate')
    if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
    let quality = args[1] ? args[1] : '128kbps'
    let media = await yta(text, quality)
    if (media.filesize >= 100000) return m.reply('Arquivo acima do limite '+util.format(media))
    doctor.sendImage(m.chat, media.thumb, `⭔ Titulo : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolução : ${args[1] || '128kbps'}`, m)
    doctor.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'ytmp4': case 'ytvideo': {
    if (!m.isGroup) throw `${ot}`
    let { ytv } = require('./lib/y2mate')
    if (!text) throw `Exemplo : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
    let quality = args[1] ? args[1] : '360p'
    let media = await ytv(text, quality)
    if (media.filesize >= 100000) return m.reply('Arquivo acima do limite '+util.format(media))
    doctor.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Titulo : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolução : ${args[1] || '360p'}` }, { quoted: m })
}
break
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
            ///AREA DAS CASE DE GRUPO\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  
            case 'marcar': {
                if (!m.isGroup) throw (`${ot}`)
                if (!isBotAdmins) throw (mess.only.botadm)
                if (!doctordmins) throw (mess.only.gcadmin)
let teks = `══✪〘 *👥 Marquei geral* 〙✪══
 
 ➲ *frase do ~mamaco adm~ : ${q ? q : 'eu sou só um bot ;-;'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                doctor.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break

///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
	case 'kick': case 'ban': {
		if (!m.isGroup) throw (`${ot}`)
        if (!isBotAdmins) throw ("como  vou fzr isso se eu nem sou adm?")
        if (!doctordmins) throw (mess.only.gcadmin)
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		if (botNumber.includes(users) && ownerNumber.includes(users)) return m.reply('Por quê está tentando me banir???')
        await doctor.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => console.log(jsonformat(res))).catch((err) => console.log(jsonformat(err)))
	}
	break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'setdesc' : {
                if (!m.isGroup) return replay(`${ot}`)
                if (!isBotAdmins) return replay(`preciso ser adm primeiro`)
                if (!text) replay(`Onde está o texto❓`)
                m.reply(`descrição do grupo trocado para pelo ${pushname}`)
                await doctor.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'setimgp': {
                if (!m.isGroup) return replay(`${ot}`)
                if (!quoted) return replay(`Enviar/Responder imagem com legenda ${prefix + command}`)
                if (!doctordmins) throw (mess.only.gcadmin)
                if (!/image/.test(mime)) return replay(`Enviar/Responder imagem com legenda ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`Enviar/Responder imagem com legenda ${prefix + command}`)
                let media = await doctor.downloadAndSaveMediaMessage(quoted)
                await doctor.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
	case 'add': {
		if (!m.isGroup) throw (`${ot}`)
                if (!isBotAdmins) throw (mess.only.botadm)
                if (!doctordmins) throw (mess.only.gcadmin)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await doctor.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => console.log(jsonformat(res))).catch((err) => console.log(jsonformat(err)))
	}
	break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
	case 'promote': {
		if (!m.isGroup) throw (`${ot}`)
                if (!isBotAdmins) throw (mess.only.botadm)
                if (!doctordmins && !isCreator) throw (mess.only.gcadmin)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace('👮‍♂️ Mais um com poderes administrativos admnistrativos')
		await doctor.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => console.log(jsonformat(res))).catch((err) => console.log(jsonformat(err)))
	}
	break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
	case 'demote': {
		if (!m.isGroup) throw (`${ot}`)
                if (!isBotAdmins) throw (mess.only.botadm)
                if (!doctordmins) throw (mess.only.gcadmin)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await doctor.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => console.log(jsonformat(res))).catch((err) => console.log(jsonformat(err)))
	}
	break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'linkgp': case 'linkgc': {
                    if (!m.isGroup) return m.reply (`${ot}`)
                    let response = await doctor.groupInviteCode(m.chat)
                    doctor.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink do grupo: ${groupMetadata.subject}`, m, { detectLink: true })
                }
                break  
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'clear': case 'limpar': {
           	if (!m.isGroup) throw (`${ot}`)
               if (!isBotAdmins) throw `preciso ser adm primeiro`
               if (!doctordmins) throw (mess.only.gcadmin)
                          let buttonse = [
                    {buttonId: `${prefix}9086799`, buttonText: {displayText: 'obrigado por limpar meu chat Ana bot md'}, type: 1}
                ]
                let buttonMessagee = {
                    text: `\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`,
                    footer: 'SEU CHAT FOI LIMPO PELA ANA BOT\NBLUE EXORCIST MODZ',
                    buttons: buttonse,
                    headerType: 2
                }
                doctor.sendMessage(m.chat, buttonMessagee)
            }
            break 
case '9086799':
					rate = body.slice(6)
					var zalts =[`que isso pow tmj`,`por nada lindo`,`por nada Lindo`,`de nada me vale pow`,`de nada`,`que isso lek tmj`,`não, brigado vc`,`ta dboas men`,` sou foda né ${pushname}¿`,`tmj carai`,`tmj`,`que isso totoso` ,`ta dboas carai`]
					var zeltas =zalts[Math.floor(Math.random() * zalts.length)]
					reply(`${zeltas} `)
					break
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
          ///AREA DOS CONVERTEDORES\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  
case 'tourl': {
                m.reply(`${calmi}`)
		        let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await doctor.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
            case 'togif': {
                if (!quoted) return reply(`Marque a figurinha`)
                if (!/webp/.test(mime)) return m.reply(`Responder adesivo com legenda *${prefix + command}*`)
                m.reply(`${calmi}`)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await doctor.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await doctor.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Covertido de um webp' }, gifPlayback: true }, { quoted: selo })
                await fs.unlinkSync(media)
            }
            break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replay(`Enviar/responder vídeo/áudio que você deseja usar como áudio com legenda ${prefix + command}`)
            if (!quoted) return m.reply(`Enviar/responder vídeo/áudio que você deseja converter em áudio com legenda ${prefix + command}`)
            m.reply(`${calmi}`)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            doctor.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : selo })
            }
            break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
            case 'toimage': case 'toimg': {
                if (!quoted) return reply(`${calmi}`)
                if (!/webp/.test(mime)) reply(`Responder a figurinha com legenda *${prefix + command}*`)
                m.reply(`${calmi}`)
                let media = await doctor.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) m.reply(err)
                    let buffer = fs.readFileSync(ran)
                    doctor.sendMessage(m.chat, { image: buffer }, { quoted: selo })
                    fs.unlinkSync(ran)
                })
            }
            break
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                       ///AREA DOS +18\\\ ⚠️premium
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  
//_____HENTAI
case 'hentai': {
if (!isPremium2) throw `comando exclusivo para os meus usuarios premium`
replay(`${command} enviado no teu pv amigo`)
data = fs.readFileSync('./banco de dados/apis/premium/hentai.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/@tiomodzofc`,` aqui esta patrão`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}hentai`, buttonText: {displayText: 'PROXIMO HENTAI'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by blue exorcist modz`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.sender, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'hentaigay': {
if (!isPremium2) throw `comando exclusivo para os meus usuarios premium`
replay(`${command} enviado no teu pv amigo`)
data = fs.readFileSync('./banco de dados/apis/premium/hentaigay.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/@tiomodzofc`,` aqui esta patrão`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}hentaigay`, buttonText: {displayText: 'PROXIMO HENTAIGAY'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by blue exorcist modz `
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.sender, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'neko': {
if (!isPremium2) throw `comando exclusivo para os meus usuarios premium`
replay(`${command} enviado no teu pv amigo`)
data = fs.readFileSync('./banco de dados/apis/premium/neko.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/@tiomodzofc`,` aqui esta patrão`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}neko`, buttonText: {displayText: 'PROXIMO NEKO'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by blue exorcist modz`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.sender, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'loli': {
if (!isPremium2) throw `comando exclusivo para os meus usuarios premium`
replay(`${command} enviado no teu pv amigo`)
data = fs.readFileSync('./banco de dados/apis/premium/loli.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/@tiomodzofc`,` aqui esta patrão`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}loli`, buttonText: {displayText: 'PROXIMA LOLI'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by blue exorcist modz `
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.sender, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                 ///AREA DOS WALLPAPER\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  
case 'wallpapers4k': {// ┌─────────COMANDO CRIADO PELO ZALTS
//●❯─────────┘                                       © _Copyright by Zalts
data = fs.readFileSync('./banco de dados/apis/wallpapers/wallpapers4k.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/@tiomodzofc`,` aqui esta patrão`,`comando foda né?`,`comando foda né¿`,`curtiu o cmd né?`,`curtiu o comando ${pushname}`,`seu wallpaper já foi feito, aqui esta ele`,`prontin`,`terminei, aqui está`,`tome seu wallpaper`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapers4k`, buttonText: {displayText: 'PROXIMO WALLPAPER'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by blue exorcist modz`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage,{quoted: selo})
}
break

case 'wallpapershinchan': {//  ┌─────────COMANDO CRIADO PELO ZALTS
//●❯──────────┘                                       © _Copyright by Zalts
data = fs.readFileSync('./banco de dados/apis/wallpapers/wallpaper2.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/@tiomodzofc`,` aqui esta patrão`,`comando foda né?`,`comando foda né¿`,`curtiu o cmd né?`,`curtiu o comando ${pushname}`,`seu wallpaper já foi feito, aqui esta ele`,`prontin`,`terminei, aqui está`,`tome seu wallpaper`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapershinchan`, buttonText: {displayText: 'PROXIMO WALLPAPER'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/9b696f5e0228a88cc1854.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by blue exorcist modz`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage,{quoted: selo})
}
break


///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'wallpaperanimes': {//  ┌─────────COMANDO CRIADO PELO ZALTS
//●❯───────────┘                                       © _Copyright by Zalts
data = fs.readFileSync('./banco de dados/apis/wallpapers/wallpaperanimes.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/@tiomodzofc`,` aqui esta patrão`,`comando foda né?`,`comando foda né¿`,`curtiu o cmd né?`,`curtiu o comando ${pushname}`,`seu wallpaper já foi feito, aqui esta ele`,`prontin`,`terminei, aqui está`,`tome seu wallpaper`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperanimes`, buttonText: {displayText: 'PROXIMO WALLPAPER'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by blue exorcist modz `
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'wallpapersbranco': {// ┌─────────COMANDO CRIADO PELO ZALTS
//●❯───────────┘                                       © _Copyright by Zalts
data = fs.readFileSync('./banco de dados/apis/wallpapers/wallpapersbranco.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/@tiomodzofc`,` aqui esta patrão`,`comando foda né?`,`comando foda né¿`,`curtiu o cmd né?`,`curtiu o comando ${pushname}`,`seu wallpaper já foi feito, aqui esta ele`,`prontin`,`terminei, aqui está`,`tome seu wallpaper`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapersbranco`, buttonText: {displayText: 'PROXIMO WALLPAPER'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by blue exorcist modz`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'wallpapervermelho': {//  ┌─────────COMANDO CRIADO PELO ZALTS
//●❯────────────┘                                       © _Copyright by Zalts
data = fs.readFileSync('./banco de dados/apis/wallpapers/wallpapervermelho.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/@tiomodzofc`,` aqui esta patrão`,`comando foda né?`,`comando foda né¿`,`curtiu o cmd né?`,`curtiu o comando ${pushname}`,`seu wallpaper já foi feito, aqui esta ele`,`prontin`,`terminei, aqui está`,`tome seu wallpaper`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapervermelho`, buttonText: {displayText: 'PROXIMO WALLPAPER'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by blue exorcist modz`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'wallpaperverde': {//┌─────────COMANDO CRIADO PELO ZALTS
//●❯──────────┘                                       © _Copyright by Zalts
data = fs.readFileSync('./banco de dados/apis/wallpapers/wallpaperverde.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/@tiomodzofc`,` aqui esta patrão`,`comando foda né?`,`comando foda né¿`,`curtiu o cmd né?`,`curtiu o comando ${pushname}`,`seu wallpaper já foi feito, aqui esta ele`,`prontin`,`terminei, aqui está`,`tome seu wallpaper`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperverde`, buttonText: {displayText: 'PROXIMO WALLPAPER'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by blue exorcist modz`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'wallpaperazul': {//   ┌─────────COMANDO CRIADO PELO ZALTS
//●❯──────────┘                                       © _Copyright by Zalts
data = fs.readFileSync('./banco de dados/apis/wallpapers/wallpaperazul.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/@tiomodzofc`,` aqui esta patrão`,`comando foda né?`,`comando foda né¿`,`curtiu o cmd né?`,`curtiu o comando ${pushname}`,`seu wallpaper já foi feito, aqui esta ele`,`prontin`,`terminei, aqui está`,`tome seu wallpaper`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperazul`, buttonText: {displayText: 'PROXIMO WALLPAPER'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by blue exorcist modz `
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'wallpaperoxo': {// ┌─────────COMANDO CRIADO PELO ZALTS
//●❯─────────┘                                       © _Copyright by Zalts
data = fs.readFileSync('./banco de dados/apis/wallpapers/wallpaperoxo.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/@tiomodzofc`,` aqui esta patrão`,`comando foda né?`,`comando foda né¿`,`curtiu o cmd né?`,`curtiu o comando ${pushname}`,`seu wallpaper já foi feito, aqui esta ele`,`prontin`,`terminei, aqui está`,`tome seu wallpaper`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperoxo`, buttonText: {displayText: 'PROXIMO WALLPAPER'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by blue exorcist modz `
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'wallpaperamarelo': {// ┌─────────COMANDO CRIADO PELO ZALTS
//●❯───────────┘                                       © _Copyright by Zalts
data = fs.readFileSync('./banco de dados/apis/wallpapers/wallpaperamarelo.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/@tiomodzofc`,` aqui esta patrão`,`comando foda né?`,`comando foda né¿`,`curtiu o cmd né?`,`curtiu o comando ${pushname}`,`seu wallpaper já foi feito, aqui esta ele`,`prontin`,`terminei, aqui está`,`tome seu wallpaper`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperamarelo`, buttonText: {displayText: 'PROXIMO WALLPAPER'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by blue exorcist modz `
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'wallpaperosa': {// ┌─────────COMANDO CRIADO PELO ZALTS
//●❯─────────┘                                       © _Copyright by Zalts
data = fs.readFileSync('./banco de dados/apis/wallpapers/wallpaperosa.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/@tiomodzofc`,` aqui esta patrão`,`comando foda né?`,`comando foda né¿`,`curtiu o cmd né?`,`curtiu o comando ${pushname}`,`seu wallpaper já foi feito, aqui esta ele`,`prontin`,`terminei, aqui está`,`tome seu wallpaper`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperosa`, buttonText: {displayText: 'PROXIMO WALLPAPER'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by blue exorcist modz `
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage,{quoted: selo})
}
break
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                 ///AREA DOS SHITPOST\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  
case 'shitpost':
replay(`${command} enviado no teu pv amigo`)
data = fs.readFileSync('./banco de dados/apis/memes/shitpost.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
doctor.sendMessage(m.sender, {image: imagem, caption: `aqui está o seu ${command} ${pushname}\n\ngostou?` },{quoted: selo})
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'memedasam':
replay(`${command} enviado no teu pv amigo`)
data = fs.readFileSync('./banco de dados/apis/memes/memesdasam.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
doctor.sendMessage(m.sender, {image: imagem, caption: `aqui está o seu ${command} ${pushname}\n\ngostou?` },{quoted: selo})
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'outroshiTpost':
replay(`${command} enviado no teu pv amigo`)
data = fs.readFileSync('./banco de dados/apis/memes/outroshiTpost.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
doctor.sendMessage(m.sender, {image: imagem, caption: `aqui está o seu ${command} ${pushname}\n\ngostou?` },{quoted: selo})
break
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                 ///AREA DE JOGOS\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  
case 'roleta':	//Dark goxtoso //Zalts apaixonado💙
					if (!m.isGroup) throw `comando bloqueado🚫 \nentre no grupo para usalo:\n\https://chat.whatsapp.com/J8vRQ1shgSq7xnoh1b4DKp`
                   rate = body.slice(6)
					var foda =['🍇','🍌','🍍','🍎','🥕','🥑','🥦']
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					var fda =['🍇','🍌','🍍','🍎','🥕','🥑','🥦']
					var zaln = fda[Math.floor(Math.random() * foda.length)]
					var fodu =['🍇','🍌','🍍','🍎','🥕','🥑','🥦']
					var alemanha = fodu[Math.floor(Math.random() * foda.length)]
                    m.reply(`
*╔═══❖•ೋ° °ೋ•❖═══╗*
                 R O L E T A
┌━─━─━  
└ ${zaltin} ${zaln} ${alemanha}

🐺parabéns pela sua pontuação🐺
*╚═══❖•ೋ° °ೋ•❖═══╝* `)
					break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'roleta2':	//Dark goxtoso //Zalts apaixonado💙
					if (!m.isGroup) throw `comando bloqueado🚫 \nentre no grupo para usalo:\n\https://chat.whatsapp.com/J8vRQ1shgSq7xnoh1b4DKp`
                   rate = body.slice(6)
					var foda =['1','2','3','4','5','6','7']
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					var fda =['1','2','3','4','5','6','7']
					var zaln = fda[Math.floor(Math.random() * foda.length)]
					var fodu =['1','2','3','4','5','6','7']
					var alemanha = fodu[Math.floor(Math.random() * foda.length)]
                    m.reply(`
*╔═══❖•ೋ° °ೋ•❖═══╗*
                 R O L E T A
 ┌━─━─━  
 └${zaltin} ${zaln} ${alemanha}

🐺parabéns pela sua pontuação🐺
*╚═══❖•ೋ° °ೋ•❖═══╝* `)
					break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
	case 'roleta3':	//Dark goxtoso //Zalts apaixonado💙
					if (!m.isGroup) throw `comando bloqueado🚫 \nentre no grupo para usalo:\n\https://chat.whatsapp.com/J8vRQ1shgSq7xnoh1b4DKp`
                   rate = body.slice(6)
					var foda =['💚','💙','💜','❤','💛','🧡','❤️‍🔥','💗','🤎','🖤','🤍']
					var zatin = foda[Math.floor(Math.random() * foda.length)]
					var fda =['💚','💙','💜','❤','💛','🧡','❤️‍🔥','💗','🤎','🖤','🤍']
					var aln = fda[Math.floor(Math.random() * foda.length)]
					var fodu =['💚','💙','💜','❤','💛','🧡','❤️‍🔥','💗','🤎','🖤','🤍']
					var alemana = fodu[Math.floor(Math.random() * foda.length)]
                    m.reply(`
*╔═══❖•ೋ° °ೋ•❖═══╗*
                 R O L E T A
 ┌━─━─━  
 └${zatin} ${aln} ${alemana}

🐺parabéns pela sua pontuação🐺
*╚═══❖•ೋ° °ೋ•❖═══╝* `)
					break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
					case 'magro':	//Dark goxtoso //Zalts apaixonado💙
					case 'magra':	//Dark goxtoso //Zalts apaixonado💙
					case 'gordo':	//Dark goxtoso //Zalts apaixonado💙
					case 'gorda':	//Dark goxtoso //Zalts apaixonado💙
                   case 'velha':	//Dark goxtoso //Zalts apaixonado💙
					case 'velho':	//Dark goxtoso //Zalts apaixonado💙
					case 'nãobinario':	//Dark goxtoso //Zalts apaixonado💙
					case 'hetero':	//Dark goxtoso //Zalts apaixonado💙
					case 'trans':	//Dark goxtoso //Zalts apaixonado💙
					case 'lesbica':	//Dark goxtoso //Zalts apaixonado💙
					case 'pan':	//Dark goxtoso //Zalts apaixonado💙
					case 'gay':	//Dark goxtoso //Zalts apaixonado💙
					case 'bi':	//Dark goxtoso //Zalts apaixonado💙
					case 'lgbt+':	//Dark goxtoso //Zalts apaixonado💙
					case 'animal':	//Dark goxtoso //Zalts apaixonado💙
					case 'cachorro':	//Dark goxtoso //Zalts apaixonado💙
					case 'cadela':	//Dark goxtoso //Zalts apaixonado💙
					case 'prostituta':	//Dark goxtoso //Zalts apaixonado💙
					case 'prostituto':	//Dark goxtoso //Zalts apaixonado💙
					case 'mendiga':	//Dark goxtoso //Zalts apaixonado💙
					case 'mendigo':	//Dark goxtoso //Zalts apaixonado💙
					case 'branca':	//Dark goxtoso //Zalts apaixonado💙
					case 'branco':	//Dark goxtoso //Zalts apaixonado💙
					case 'chata':	//Dark goxtoso //Zalts apaixonado💙
					case 'chato':	//Dark goxtoso //Zalts apaixonado💙
					case 'rica':	//Dark goxtoso //Zalts apaixonado💙
					case 'rico':	//Dark goxtoso //Zalts apaixonado💙
					case 'macaco':	//Dark goxtoso //Zalts apaixonado💙
					case 'macaca':	//Dark goxtoso //Zalts apaixonado💙
					case 'mamaca':	//Dark goxtoso //Zalts apaixonado💙
					case 'mamaco':	//Dark goxtoso //Zalts apaixonado💙
					case 'anarquico':	//Dark goxtoso //Zalts apaixonado💙
					case 'comunista':	//Dark goxtoso //Zalts apaixonado💙
					case 'nazista':	//Dark goxtoso //Zalts apaixonado💙
					case 'amarela':	//Dark goxtoso //Zalts apaixonado💙
					case 'amarelo':	//Dark goxtoso //Zalts apaixonado💙
					case 'puto':	//Dark goxtoso //Zalts apaixonado💙
					case 'puta':	//Dark goxtoso //Zalts apaixonado💙
					case 'corna':	//Dark goxtoso //Zalts apaixonado💙
					case 'corno':	//Dark goxtoso //Zalts apaixonado💙
					case 'linda':	//Dark goxtoso //Zalts apaixonado💙
					case 'lindo':	//Dark goxtoso //Zalts apaixonado💙
					case 'branca':	//Dark goxtoso //Zalts apaixonado💙
					case 'branco':	//Dark goxtoso //Zalts apaixonado💙
					case 'preta':	//Dark goxtoso //Zalts apaixonado💙
					case 'preto':	//Dark goxtoso //Zalts apaixonado💙
					case 'gostosa':	//Dark goxtoso //Zalts apaixonado💙
					case 'gostoso':	//Dark goxtoso //Zalts apaixonado💙
					case 'gasosa':	//Dark goxtoso //Zalts apaixonado💙
					case 'gasoso':	//Dark goxtoso //Zalts apaixonado💙
					case 'puta':	//Dark goxtoso //Zalts apaixonado💙
					case 'puto':	//Dark goxtoso //Zalts apaixonado💙
					case 'feia':	//Dark goxtoso //Zalts apaixonado💙
					case 'feio':	//Dark goxtoso //Zalts apaixonado💙
					if (!m.isGroup) throw `comando bloqueado🚫 \nentre no grupo para usalo:\n\https://chat.whatsapp.com/J8vRQ1shgSq7xnoh1b4DKp`
                    rate = body.slice(6)
					var zeltas =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','88','88','89','90','91','92','93','94','95','96','99','99','99','100','101','102','103','104','105','106','107','108','109','110','111','112','113','114','115','116','117','118','119','120']
					var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
					m.reply(`Como você é ${command} @${m.sender.split("@")[0]} 
                    \n\nSua porcentagem de ${command} é: ${zalts}% `)
					break
					///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                            ///AREA DAS FRASES RANDOM\\\
                   ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  
					///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
					case 'frase':	//Dark goxtoso //Zalts apaixonado💙
					if (!m.isGroup) throw `comando bloqueado🚫 \nentre no grupo para usalo:\n\https://chat.whatsapp.com/J8vRQ1shgSq7xnoh1b4DKp`
                    rate = body.slice(6)
					var foda =['amor imaturo diz: Eu te amo porque preciso de você','A vida começa a cada cinco minutos','Onde as palavras falham, a música fala','Um bom viajante não tem planos','Uma vez que aceitamos nossos limites, vamos além deles','O que não nos mata nos fortalece','Se você caminha sozinho, você vai mais rápido Se vocês caminharem juntos, vocês irão mais longe','Uma vida cheia de erros não é apenas mais honrosa, mas é mais sábia do que uma vida gasta sem fazer nada','Nunca perca o senso de humor e aprenda a rir de suas próprias falhas','A preocupação é como uma cadeira de balanço, ela mantém você ocupado, mas não leva a lugar nenhum','O homem que viveu mais tempo não é aquele que completou mais anos, mas aquele que mais experimentou a vida','Se você pode sonhar, você pode fazer','O impossível é o fantasma dos tímidos e o refúgio dos covardes','O caminho que temos que percorrer 998 é cheio de surpresas. Você nunca estará preparado para aqueles que o tocam, sejam eles felizes ou sombrios, porque isso faz parte de ganhar experiência. E descobrir quão agradáveis ​​ou infelizes são aqueles que esperam por você, é algo que você nunca poderá evitar','A felicidade não é algo que você adia para o futuro, é algo que você projeta para o presente','Os amigos devem ser como dinheiro, que antes de precisar, você sabe o seu valor','O homem que viveu mais tempo não é aquele que completou mais anos, mas aquele que mais experimentou a vida']
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					m.reply(` ${zaltin} `)
					break
					///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
					case 'recadoprowhatsapp':	//Dark goxtoso //Zalts apaixonado💙
					if (!m.isGroup) throw `comando bloqueado🚫 \nentre no grupo para usalo:\n\https://chat.whatsapp.com/J8vRQ1shgSq7xnoh1b4DKp`
                    rate = body.slice(6)
					var foda =['Felicidade é só questão de ser.','Acredite: sempre tem algo bom guardado para você','Concentre-se no que está buscando, não no que está deixando para trás.','A vida é muito curta pra não viver sorrindo por aí!','Onde há vontade, há chance de dar certo!','Dance no seu ritmo! 💃','Só você sabe o que te deixará feliz.','Não se estresse com o que está fora do seu controle.','Aprenda a apreciar as voltas que o mundo dá.','Comece a se amar. O resto virá depois.','Maior que a tristeza de não haver vencido é a vergonha de não ter lutado!','Reciprocidade, para as coisa boas. Imunidade, para as coisas ruins.','Coragem, a vida gosta de pessoas destemidas.', 'Compartilhe seus sentimentos. Nem todas as pessoas sabem adivinhar','Continue caminhando, não tem problema se for devagar.','Melhor amar do que ser amargo!','Não corrigir nossas falhas é o mesmo que cometer novos erros','Quando o caminho se torna duro, só os duros continuam caminhando','Florescer exige passar por todas as estações!','Quando as coisas simples parecem especiais, você percebe como a vida pode ser boa.','Os aprendizados deixam a vida especial.','Feliz daquele que encontra o verdadeiro amor sem as cicatrizes da decepção']
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					m.reply(` ${zaltin} `)
					break
					///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
					case 'frasecriativas':	//Dark goxtoso //Zalts apaixonado💙
					if (!m.isGroup) throw `comando bloqueado🚫 \nentre no grupo para usalo:\n\https://chat.whatsapp.com/J8vRQ1shgSq7xnoh1b4DKp`
                    rate = body.slice(6)
					var foda =['Não conte os dias, viva-os! ☀️😎','Tudo que vem, vem com algum propósito. Assim como tudo que vai, vai por uma razão. 🌸🌀','Eu não gosto de cobrar atitude de ninguém porque eu tenho de sobra. 😉','Gostar, eu gosto de muita gente, mas a minha prioridade sempre será eu mesma. ✨','As pessoas que criticam, são as mesmas que copiam. 👀','Aprendi que meu único limite é a minha mente. 🌎','Fazendo dos meus sonhos, um objetivo. 💭']
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					m.reply(` ${zaltin} `)
					break
					///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
					case 'frasebonita':	//Dark goxtoso //Zalts apaixonado💙
					if (!m.isGroup) throw `comando bloqueado🚫 \nentre no grupo para usalo:\n\https://chat.whatsapp.com/J8vRQ1shgSq7xnoh1b4DKp`
                    rate = body.slice(6)
					var foda =['Viver em paz é um luxo. É saber que, apesar dos pesares, ficar bem é prioridade. ✨','Somos ferramentas para a vida seguir em frente. 🌎','Ao invés de pensar nas marcas que a vida deixa em você, reflita: Quais as marcas você está deixando na vida? 💭','Segue seu coração, tudo vai dar certo. ♥️','Permita-se sentir tudo que está dentro de você! ✨','Cada etapa da vida, lhe demandará uma versão mais forte de você. 🍃','A vida é como uma rosa, cada pétala um sonho, cada espinho uma realidade🌷🙉','A arma dos fracos é criticar os fortes. A arma dos fortes é ignorar os fracos!👌','Pare de olhar para trás. Você já sabe onde esteve, agora precisa saber pra onde vai🌙🍃','Só faz sentido o que te faz sentir.']
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					m.reply(` ${zaltin} `)
					break
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
          ///AREA DE STICKER RANDOM\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  
case 'emojimix': {
	     if (!text) return replay(`Exemplo : ${prefix + command} 😡+🤔`)
		reply(`${calmi}`)
        let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await doctor.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'packsticker': {
 if (mek.key.fromMe) return 
var zeltas =['aguarde','aqui está o seu dado','aguarde seu sticker','enquanto isso vai um café?☕️','aguarde um pouco']
var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
var badin =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','88','88','89','90','91','92','93','94','95','96','97','98','99','100','101','102','103','104','105','106','107','108','109','110','111','112','113','114','115']
var oto = badin[Math.floor(Math.random() * zeltas.length)]
var bladin =['115','114','113','112','111','110','109','108','107','106','105','104','103','102','101','100','99','98','97','96','95','94','93','39','29','19','09','98','88','88','68','58','48','38','28','18','08','97','87','77','67','57','47','37','27','17','07','96','86','76','66','56','46','36','26','16','06','95','85','75','65','55','45','35','25','15','05','94','84','74','64','54','44','34','24','04','93','83','73','63','53','43','33','23','13','03','92','82','72','62','52','42','32','22','12','02','91','81','71','61','51','41','31','21','11','01','9','8','7','6','5','4','3','2','1']
var otu = bladin[Math.floor(Math.random() * zeltas.length)]
var bdin =['64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','88','88','89','90','91','92','93']
var o = bdin[Math.floor(Math.random() * zeltas.length)]
var badn =['111','122','113','41','15','62','97','18','19','120','131','112','103','14','12','116','17','18','29','10','21','12','86','88','88','89','90','91','92','93','94','95','96','97','98','99','100','101','102','103']
var oo = badn[Math.floor(Math.random() * zeltas.length)]
m.reply(`${zalts}`);
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/${oto}.webp`)}, {quoted: selo});
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/${otu}.webp`)}, {quoted: selo});
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/${oo}.webp`)}, {quoted: selo});
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/${o}.webp`)}, {quoted: selo});
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'stickeralet': {
 if (mek.key.fromMe) return 
var zeltas =['aguarde','logo logo enviarei','calma ai','enquanto isso vai um café?☕️','aguarde um pouco']
var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
var badin =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','42','43','44','45','46','47','48','49','50','51','52','53','54','55']
var oto = badin[Math.floor(Math.random() * badin.length)]
m.reply(`${zalts}`);
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/${oto}.webp`)}, {quoted: selo});
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'dado': {
 if (mek.key.fromMe) return 
var zeltas =['aguarde','aqui está o seu dado','aguarde seu dado','enquanto isso vai um café?☕️','aguarde um pouco']
var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
var badin =['1','2','3','4','5','6']
var oto = badin[Math.floor(Math.random() * badin.length)]
m.reply(`${zalts}`);
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/dados/${oto}.webp`)}, {quoted: selo});
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'dado2': {
 if (mek.key.fromMe) return 
var zeltas =['aguarde','aqui está o seu dado','aguarde seu dado','enquanto isso vai um café?☕️','aguarde um pouco']
var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
var badin =['01','02','03','04','05','06']
var oto = badin[Math.floor(Math.random() * badin.length)]
m.reply(`${zalts}`);
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/dados/${oto}.webp`)}, {quoted: selo});
}
break
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
          ///AREA DOS VIDEOS RANDOM\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  
case 'video1': {
 if (mek.key.fromMe) return 
var zeltas =['aguarde','aqui está o seu video','aguarde seu video','enquanto isso vai um café?☕️','aguarde um pouco']
var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
var badin =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']
var oto = badin[Math.floor(Math.random() * badin.length)]
m.reply(`${zalts}`);
doctor.sendMessage(m.chat, {video: fs.readFileSync(`./banco de dados/vid/${oto}.mp4`)}, {quoted: selo});
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'video2': {
 if (mek.key.fromMe) return 
var zeltas =['aguarde','aqui está o seu video','aguarde seu video','enquanto isso vai um café?☕️','aguarde um pouco']
var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
var badin =['17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
var oto = badin[Math.floor(Math.random() * badin.length)]
m.reply(`${zalts}`);
doctor.sendMessage(m.chat, {video: fs.readFileSync(`./banco de dados/vid/${oto}.mp4`)}, {quoted: selo});
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'video3': {
 if (mek.key.fromMe) return 
var zeltas =['aguarde','aqui está o seu video','aguarde seu video','enquanto isso vai um café?☕️','aguarde um pouco']
var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
var badin =['32','33','35','36','37','38','39','40','41','42','43','44','45','46','47']
var oto = badin[Math.floor(Math.random() * badin.length)]
m.reply(`${zalts}`);
doctor.sendMessage(m.chat, {video: fs.readFileSync(`./banco de dados/vid/${oto}.mp4`)}, {quoted: selo});
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'video4': {
 if (mek.key.fromMe) return 
var zeltas =['aguarde','aqui está o seu video','aguarde seu video','enquanto isso vai um café?☕️','aguarde um pouco']
var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
var badin =['48','49','50','51','52','53','54','55','56','57','58','59','60','61','62']
var oto = badin[Math.floor(Math.random() * badin.length)]
m.reply(`${zalts}`);
doctor.sendMessage(m.chat, {video: fs.readFileSync(`./banco de dados/vid/${oto}.mp4`)}, {quoted: selo});
}
break

case 'meninas': {

 if (mek.key.fromMe) return 

var zeltas =['aguarde','aqui está o seu video','aguarde seu video','enquanto isso vai um café?☕️','aguarde um pouco']
var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
var badin =['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14']
var oto = badin[Math.floor(Math.random() * badin.length)]
m.reply(`${zalts}`);
doctor.sendMessage(m.chat, {video: fs.readFileSync(`./banco de dados/meninas/${oto}.mp4`)}, {quoted: selo});
}
break

case 'meninas2': {

 if (mek.key.fromMe) return 

var zeltas =['aguarde','aqui está o seu video','aguarde seu video','enquanto isso vai um café?☕️','aguarde um pouco']
var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
var badin =['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14']
var oto = badin[Math.floor(Math.random() * badin.length)]
m.reply(`${zalts}`);
doctor.sendMessage(m.chat, {video: fs.readFileSync(`./banco de dados/meninas2/${oto}.mp4`)}, {quoted: selo});
}
break

case 'meninas3': {



 if (mek.key.fromMe) return 

var zeltas =['aguarde','aqui está o seu video','aguarde seu video','enquanto isso vai um café?☕️','aguarde um pouco']
var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
var badin =['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14']
var oto = badin[Math.floor(Math.random() * badin.length)]
m.reply(`${zalts}`);
doctor.sendMessage(m.chat, {video: fs.readFileSync(`./banco de dados/meninas3/${oto}.mp4`)}, {quoted: selo});
}
break

case 'meninas1': {



 if (mek.key.fromMe) return 

var zeltas =['aguarde','aqui está o seu video','aguarde seu video','enquanto isso vai um café?☕️','aguarde um pouco']
var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
var badin =['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14']
var oto = badin[Math.floor(Math.random() * badin.length)]
m.reply(`${zalts}`);
doctor.sendMessage(m.chat, {video: fs.readFileSync(`./banco de dados/meninas1/${oto}.mp4`)}, {quoted: selo});
}
break

///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------

///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------

///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------

///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------

///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
//info do bot

case 'ping': case 'botstatus': case 'statusbot': {
    const used = process.memoryUsage()
    const cpus = os.cpus().map(cpu => {
        cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
        return cpu
    })
    const cpu = cpus.reduce((last, cpu, _, { length }) => {
        last.total += cpu.total
        last.speed += cpu.speed / length
        last.times.user += cpu.times.user
        last.times.nice += cpu.times.nice
        last.times.sys += cpu.times.sys
        last.times.idle += cpu.times.idle
        last.times.irq += cpu.times.irq
        return last
    }, {
        speed: 0,
        total: 0,
        times: {
            user: 0,
            nice: 0,
            sys: 0,
            idle: 0,
            irq: 0
    }
    })
    let timestamp = speed()
    let latensi = speed() - timestamp
    neww = performance.now()
    oldd = performance.now()
    respon = `
╔═════ ▓▓ ࿇ ▓▓ ═════╗
║            ❰INFORMAÇOES❱
║informações sendo puxadas
║para o ${pushname}
║
║nome do bot = ${namebot}
║criador = wa.me/${ownerNumber}
║Tempo de resposta ${latensi.toFixed(4)} _Segundos_ 
║Tempo ativo : ${runtime(process.uptime())}
╚══════ ≪ •❈• ≫ ══════╝`.trim()
replay(respon)
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'nomebot': {
replay(`BOT = ${namebot}`)
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'numerodono': {
replay(`NUMERO DO DONO = wa.me/${ownerNumber}`)
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'numerodobot': {
replay(`BOT = ${botNumber}`)
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------

            default:
 if (budy.match(`@351933471425`)) {
 if (mek.key.fromMe) return 
var zeltas =['jájá ele vai ver sua msg','pare de marcar meu dono🖐😐','só tô vendo vc marcar meu criador','pare de marcar foido','já já ele aparece, enquanto isso vai um café?☕️','aguarde que logo logo ele estará aqui']
var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
var badin =['1','2','3','@556699717091']
var oto = badin[Math.floor(Math.random() * badin.length)]
m.reply(`${zalts}`);
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/menções/${oto}.webp`)}, {quoted: selo});
 }
//━━━━━━━❰･❉･❱━━━━━━━\\
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.database
		    if (!(budy.toLowerCase() in msgs)) return
		    doctor.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.yellowBright(`┌────────────────────────────────────────────────❮●
└atualizou'${__filename}' com sucesso`))
	delete require.cache[file]
	require(file)
})
