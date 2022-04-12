const tg = (ctx)=>{

    ctx.reply('Telegram: \nContact with @khrasedul2')
    .catch((e)=>{
        console.log(e)
        ctx.reply("Something is wrong")
    })
}

const email = (ctx)=>{

    ctx.reply('Email: \nexample@mail.com')
    .catch((e)=>{
        console.log(e)
        ctx.reply("Something is wrong")
    })
}

module.exports = { tg , email}