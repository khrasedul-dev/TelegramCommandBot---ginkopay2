const tg = (ctx)=>{

    ctx.reply('Telegram: \n@khrasedul2')
    .catch((e)=>{
        console.log(e)
        ctx.reply("Something is wrong")
    })
}

const email = (ctx)=>{

    ctx.reply('Email: \nsupport@banqua.io')
    .catch((e)=>{
        console.log(e)
        ctx.reply("Something is wrong")
    })
}

module.exports = { tg , email}