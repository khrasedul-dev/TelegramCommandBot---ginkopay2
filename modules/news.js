module.exports = (ctx)=>{
    ctx.telegram.sendMessage(ctx.chat.id , `To get latest news from us join our telegram channel \n\nKindly tap on "Join" button`,{
        reply_markup: {
            inline_keyboard: [
                [{text: "Join" , url: "https://t.me/+Fnu5bqkWppg3ZWZk"}]
            ]
        }
    })
    .catch((e)=>{
        console.log(e)
        ctx.reply("Something is wrong")
    })
}