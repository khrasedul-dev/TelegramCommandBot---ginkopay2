const tc = (ctx)=>{

    ctx.telegram.sendDocument(ctx.chat.id , {source: "./doc/tc.pdf",filename: "Terms and Condition.pdf"})

    .catch((e)=>{
        console.log(e)
        ctx.reply("Something is wrong")
    })
}

const pp = (ctx)=>{

    ctx.telegram.sendDocument(ctx.chat.id , {source: "./doc/pp.pdf",filename: "Privacy Policy.pdf"})

    .catch((e)=>{
        console.log(e)
        ctx.reply("Something is wrong")
    })
}

module.exports = {tc , pp}