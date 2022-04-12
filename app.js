const { Telegraf , Composer , WizardScene , Stage , session } = require("micro-bot")
const mongoose = require('mongoose')
const infoStaking = require("./modules/infoStaking")
const deposit = require("./modules/deposit")
const { btc, usdc, eth } = require("./modules/depo_button")
const { silver, gold } = require("./modules/pack_button")
const withdraw = require("./modules/withdraw")
const news = require("./modules/news")
const referral = require("./modules/referral")
const legal = require("./modules/legal")
const { tc, pp } = require("./modules/legal_button")
const customer_support = require("./modules/customer_support")
const { tg, email } = require("./modules/customer_support_button")
const withdrawlModel = require("./model/withdrawlModel")
const userModel = require("./model/userModel")



// const bot = new Telegraf('5191338447:AAHNkSMTOQmXyR4CdrZqq4en2vttM7A6cw8')

const bot = new Composer()

//session init
bot.use(session())

//database connection
mongoose.connect('mongodb+srv://rasedul20:rasedul20@telegramproject.b9su4.mongodb.net/telegramProject?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then((d) => console.log('Database connected')).catch((e) => console.log(e))


//bot start command
bot.start(ctx=>{

    ctx.session.ref = ctx.startPayload || 0

    ctx.telegram.sendMessage( ctx.chat.id , `👋 Hello ${ctx.from.first_name}, \nWelcome to use ${ctx.botInfo.username}`)
    .then(()=>{

        const ref = ctx.session.ref

        userModel.find({userId : ctx.from.id})
        .then((user)=>{
            if (user.length > 0) {
                console.log("User exists")
            } else {
                if (ref > 0) {

                    const data = new userModel({
                        userId : ctx.from.id,
                        username : ctx.from.username,
                        name: ctx.from.first_name,
                        ref_by: ref,
                        ref_count: 0
                    })
                    data.save()
                    .then(()=>{
                        userModel.find({userId: ref})
                        .then((ref_user)=>{
                            if (ref_user.length > 0) {
                                const db_ref_count = ref_user[0].ref_count

                                userModel.updateOne({userId: ref}, { ref_count : db_ref_count + 1})
                                .then(()=>console.log("Data updated"))
                                .catch((e)=>{
                                    console.log(e)
                                    ctx.reply("Something is wrong!")
                                })
                            }
                        })
                        .catch((e)=>{
                            console.log(e)
                            ctx.reply("Something is wrong!")
                        })
                    })
                    .catch((e)=>{
                        console.log(e)
                        ctx.reply("Something is wrong!")
                    })


                } else {
                    const data = new userModel({
                        userId : ctx.from.id,
                        username : ctx.from.username,
                        name: ctx.from.first_name,
                        ref_by: 0,
                        ref_count: 0
                    })
                    data.save()
                    .then(()=>console.log("Data insert"))
                    .catch((e)=>{
                        console.log(e)
                        ctx.reply("Something is wrong!")
                    })
                }
            }
        })
        .catch((e)=>{
            console.log(e)
            ctx.reply("Something is wrong!")
        })
    })
    .catch((e)=>{
        console.log(e)
        ctx.reply("Something is wrong!")
    })

})


// -------------------------Info staking--------------------------

bot.command('info_staking', ctx=>{
    infoStaking(ctx)
})

bot.action('silver', ctx =>{
    silver(ctx)
})

bot.action('gold', ctx=>{
    gold(ctx)
})


// ---------------------------------Deposit------------------------

bot.command('deposit', ctx=>{
    deposit(ctx)
})

bot.action('btc',ctx=>{
    btc(ctx)
})

bot.action('usdc',ctx=>{
    usdc(ctx)
})

bot.action('eth',ctx=>{
    eth(ctx)
})

// -------------------------News-------------------------------

bot.command('news',ctx=>{
    news(ctx)
})

//----------------------------------Referral-----------------------------

bot.command('referral', ctx=>{
    userModel.find({userId: ctx.from.id})
    .then((data)=>{
        if (data.length > 0) {
            const count = data[0].ref_count || 0
            referral(ctx , count)
        }
    })
    .catch((e)=>{
        console.log(e)
        ctx.reply("Something is wrong!")
    })
    
})


//-----------------------------------Legal----------------------------

bot.command('legal',ctx=>{
    legal(ctx)
})

bot.action('tc', ctx=>{
    tc(ctx)
})

bot.action('pp', ctx=>{
    pp(ctx)
})

// ---------------------------------Support ---------------------------

bot.command('customer_support', ctx=>{
    customer_support(ctx)
})

bot.action('s_tg',ctx=>{
    tg(ctx)
})

bot.action('s_email',ctx=>{
    email(ctx)
})
// ---------------------------------Withdraw --------------------------

bot.command('withdraw',ctx=>{
    withdraw(ctx)
})

const input = new WizardScene('form',
    ctx=>{
        ctx.session.user = {}
        ctx.session.user.id = ctx.from.id

        ctx.reply('Write your full name')
        .catch((e)=>{
            console.log(e)
            ctx.reply("Something is wrong")
        })

        return ctx.wizard.next()
    },
    ctx=>{
        ctx.session.user.name = ctx.update.message.text

        ctx.reply('Write your email')
        .catch((e)=>{
            console.log(e)
            ctx.reply("Something is wrong")
        })

        return ctx.wizard.next()
    },
    ctx=>{
        ctx.session.user.email = ctx.update.message.text

        ctx.reply('Write your crypto (BTC - USDC - ETH) ')
        .catch((e)=>{
            console.log(e)
            ctx.reply("Something is wrong")
        })

        return ctx.wizard.next()
    },
    ctx=>{
        ctx.session.user.crypto = ctx.update.message.text

        ctx.reply('Write your wallet address ')
        .catch((e)=>{
            console.log(e)
            ctx.reply("Something is wrong")
        })

        return ctx.wizard.next()
    },
    ctx=>{
        
        const data = new withdrawlModel({
            userId : ctx.from.id,
            username: ctx.from.username,
            name: ctx.session.user.name,
            email: ctx.session.user.email,
            crypto: ctx.session.user.crypto,
            wallet: ctx.update.message.text
        })

        data.save()
        .then(()=>ctx.reply('You withdraw request is submitted'))
        .catch((e)=>{
            console.log(e)
            ctx.reply('Something is wrong!\nPlease try again')
        })
        return ctx.scene.leave()
    }
)

const stage = new Stage([input])
bot.use(stage.middleware())

bot.action('form',Stage.enter('form'))



// bot.launch().then(()=>console.log("bot started")).catch((e)=>console.log(e))
module.exports = bot

