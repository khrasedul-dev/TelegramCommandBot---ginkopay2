module.exports = (ctx,count)=>{
    ctx.telegram.sendMessage( ctx.chat.id , `Invite a friend and you will receive a reward equal to 1% of their staking deposit\n\nYour Referral is: ${count} \n\nReferral link:\nhttps://t.me/${ctx.botInfo.username}?start=${ctx.from.id}`)
    .catch((e)=>{
        console.log(e)
        ctx.reply("Something is wrong")
    })
}