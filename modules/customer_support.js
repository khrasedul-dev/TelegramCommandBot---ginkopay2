module.exports = (ctx)=>{
    ctx.telegram.sendMessage(ctx.chat.id , `Hello ${ctx.from.first_name} \n\nTo get support from customer service. We will try to contract with you immediately \n\nKindly choose a button` , {
        reply_markup: {
            inline_keyboard: [
                [{text: "Customer support with telegram" , callback_data: "s_tg"}], [{text: "Customer support with email" , callback_data:"s_email"}]
            ]
        }
    })
    .catch((e)=>{
        console.log(e)
        ctx.reply("Something is wrong")
    })
}