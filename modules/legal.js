module.exports = (ctx)=>{
    ctx.telegram.sendMessage(ctx.chat.id , `Hello ${ctx.from.first_name} \n\nTo read our terms and conditions or privacy policy \n\nKindly tap on buttons` , {
        reply_markup: {
            inline_keyboard: [
                [{text: "Terms and Conditions" , callback_data: "tc"}], [{text: "Privacy policy" , callback_data:"pp"}]
            ]
        }
    })
    .catch((e)=>{
        console.log(e)
        ctx.reply("Something is wrong")
    })
}