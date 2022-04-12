const silver = (ctx)=>{

    ctx.telegram.sendMessage( ctx.chat.id , `Start 10 € to 50.00 € \nRewards 7% per year \nPayment every year`).catch((e)=>{
        console.log(e)
        ctx.reply("Something is wrong")
    })
}

const gold = (ctx)=>{

    ctx.telegram.sendMessage( ctx.chat.id , `Start 50.00 € \nRewards 10% per year \nPayment every 6 months`).catch((e)=>{
        console.log(e)
        ctx.reply("Something is wrong")
    })
}

module.exports = {silver , gold }