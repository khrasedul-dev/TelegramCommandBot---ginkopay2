module.exports = (ctx)=>{
    ctx.telegram.sendMessage( ctx.chat.id , `To	start with staking you must	deposit	your cryptocurrency. \nWe always recommend investing amounts that do not affect your daily life ... invest responsibly \n\nChoose any button for Deposit` , {
        reply_markup: {
            inline_keyboard: [
                [{text: "BTC" , callback_data: "btc"}, {text: "USDC", callback_data: "usdc"}],
                [{text: "ETH" , callback_data: "eth"}]
            ]
        }
    }).catch((e)=>{
        console.log(e)
        ctx.reply("Something is wrong")
    })
}