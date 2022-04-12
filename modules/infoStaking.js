module.exports = (ctx) =>{
    ctx.telegram.sendMessage( ctx.chat.id , `<b>What is	the	Staking</b> \n\nThe first crypto-coins adopted a consensus system called Proof of Work, which required the	work of some users, called Miners, specialized in the solution of mathematical calculations, through powerful	PCs, and in return received new	coins. There are many limitations of this system, from the consumption of energy to	the	fact that the miner must have at his disposal a very sophisticated computer	that allows him	to perform complex mathematical calculations. To overcome these drawbacks, an alternative method of consent, called Proof of Stake, has been devised. This method of consensus involves the validation of cryptocurrency blocks by those who own digital coins. In summary, miners do not need to work, but validators validate the blockchain by immobilizing their coins; storing a large number of coins will increase the likelihood of rewards. \n\n<b>How Banqua works</b>  \n\nbanqua operates with a managed staking, thanks to our financial analysts who manage your crypto stakes , operating with lower risks in the financial markets , startups and technologies, to have earnings and rewards every year` , {
        reply_markup: {
            inline_keyboard: [
                [{text: "Packeges Silver" , callback_data: "silver"},{text: "Packeges Gold" , callback_data: "gold"}]
            ]
        },
        parse_mode: "HTML"
        
    }).catch((e)=>{
        console.log(ctx)
        ctx.reply("Something is wrong")
    })
}