const fs = require('fs')
const chalk = require('chalk')
//*╔═══❖•ೋ° °ೋ•❖═══╗*
//    DEFINIÇÕES  DS NUMEROS E NOMES
//*╚═══❖•ೋ° °ೋ•❖═══╝*
global.V = ['1.0']//<--versão do bot
//-------------------------------------
global.bot = ['ana bot']//<--nome do bot
//-------------------------------------
global.name = ['BLUE EXORCIST MODZ']//<--nome do dono
//-------------------------------------
global.nami = ['BLUE']//<--nome fofo do dono
//-------------------------------------
global.prefa = ['','!','.','×','/','?']//<--prefix
//-------------------------------------
global.owner = ['351933471425']//<--numedo do dono
//-------------------------------------
global.sessionName = 'Qrcode'//<--nome da sessão
//-------------------------------------
//-------------------------------------
//-------------------------------------
//*╔═══❖•ೋ° °ೋ•❖═══╗*
//           NOME DAS FIG
//*╚═══❖•ೋ° °ೋ•❖═══╝*
global.author = '@blue exorcist modz'
//-------------------------------------
global.packname = `ANA BOT `
//-------------------------------------
//-------------------------------------
//-------------------------------------
global.apidados = 'https://apitestekarma.herokuapp.com'; // Compre sua api com o markos: wa.me/559491423691
global.apiToken = 'coloque sua api aqui'; // Compre seu token com o markos: wa.me/559491423691
global.sp = '⭔'
//*╔═══❖•ೋ° °ೋ•❖═══╗*
//            PALAVRAS E FALAS
//*╚═══❖•ೋ° °ೋ•❖═══╝*
global.mess = {
    success: '✓ Success',
    admin: 'n',
    botAdmin: 'n',
    owner: 'n',
    group: 'n',
    private: 'n',
    bot: 'n',
    wait: 'Aguarde...',
}
global.thumb = fs.readFileSync('./lib/doctor.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file) 
	console.log(chalk.yellowBright(`┌────────────────────────────────────────────────❮●
└atualizou'${__filename}' com sucesso`))
	delete require.cache[file]
	require(file)
})
