const btc = (ctx) =>{

    ctx.reply('2N3oefVeg6stiTb5Kh3ozCSkaqmx91FDbsm')
    .catch((e)=>{
        console.log(e)
        ctx.reply("Something is wrong")
    })
}

const usdc = (ctx) =>{

    ctx.reply('0x07865c6e87b9f70255377e024ace6630c1eaa37f')
    .catch((e)=>{
        console.log(e)
        ctx.reply("Something is wrong")
    })
}

const eth = (ctx) =>{

    ctx.reply('0x2aea4932e78ce7944534c12c7bc3e22bda9d0e2199063e771f7d6162c62a0752')
    .catch((e)=>{
        console.log(e)
        ctx.reply("Something is wrong")
    })
}

module.exports = {btc , usdc , eth }