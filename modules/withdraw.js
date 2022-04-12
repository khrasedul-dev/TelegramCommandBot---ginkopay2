module.exports = (ctx)=>{
    ctx.telegram.sendMessage( ctx.chat.id , `Then remember to withdraw the entire amount after one year or request your reward or after 6 months if you are part of the gold package. \n\nTo withdraw your prize or fund, fill out this form \n\nTo start tap on "start" button`, {
        reply_markup: {
            inline_keyboard:[
                [{ text: "Start", callback_data: "form"}]
            ]
        }
    }).catch((e)=>{
        console.log(ctx)
        ctx.reply("Something is wrong")
    })

}