const btc = (ctx) =>{

    ctx.reply('BTC : \n3EJKYDLMD4Q4h8QyKGWxNW82fdPxTnRpZ8')
    .catch((e)=>{
        console.log(e)
        ctx.reply("Something is wrong")
    })
}

const usdc = (ctx) =>{

    ctx.reply('USDC : \n0x132d5de7db71d757c0e75807188cc38d38dfe336')
    .catch((e)=>{
        console.log(e)
        ctx.reply("Something is wrong")
    })
}

const eth = (ctx) =>{

    ctx.reply('ETH : \n0x132d5de7db71d757c0e75807188cc38d38dfe336')
    .catch((e)=>{
        console.log(e)
        ctx.reply("Something is wrong")
    })
}

module.exports = {btc , usdc , eth }