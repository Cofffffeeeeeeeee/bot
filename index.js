const Discord = require('discord.js');
const { prefix,token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('ready')
}) 


client.on('message', message => {
    //console.log(message.content);

     if(message.content.startsWith('cf')) {
    message.channel.send("taci ba")
     }

     if(message.content.startsWith('el_cholo')) {
        message.channel.send("da-l dracu de pedofil")
     }

     if(message.content.startsWith('welcome')) {
        message.channel.send("Bine ai venit alaturi de noi")
     }

     if(message.content.startsWith('Welcome')) {
        message.channel.send("Bine ai venit alaturi de noi")
     }

     if(message.content.startsWith('povestea valentinului')) {
        message.channel.send("A intrat odata un baiat pe nume Valentin.Acesta a jucat cu noi Skribbl 4 zile si 4 nopti.Apoi a facut marea greseala de a da mesaj detinatoarei acestui server.Direct detinatoarea a apelat la Григорий Распутин, aceastea isi dadu seama ca Valentin incearca sa se dea la ea.Am creat o lunga conversatie afland ca Valentin are o obsesie pentru animalele de companie.La un moment dat, subtil, Valentin a cerut poze deocheate cu detinatoarea .Atunci,, detinatoarea a apelat la pozele unei fete de 14 ani de pe instagram. Dupa asta si Valentin a trimis o poza. Acea poza spunea tot. O putzica de mongol in 2 culori, asemanatoare cu steagul poloniei. Dupa asta, Valentin a fost bagat intr-un voice chat cu vreo 7 persoane unde a fost facut de rusine.") 
     }

     if(message.content.startsWith('Vio')) {
        message.channel.send("aka nimfomana moldoveanca suprema")
     }

     if(message.content.startsWith('Rasputin')) {
        message.channel.send("Russia's greatest love machine")
     }

     if(message.content.startsWith('Te iubesc')) {
        message.channel.send("si eu draga mr")
     }

     if(message.content.startsWith('Cf')) {
        message.channel.send("ce faceti ba")
    }
 
})

client.on('message', message => {
    if (message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {
        //console.log(message.content);

        if(message.content.startsWith(`${prefix}kick`)) {
            //message.channel.send("kick")

            let member = message.mentions.members.first();
            member.kick().then((member) => {
                message.channel.send(":wave:" + "l-am scos da-l dracu")
            })

        }

    }

})

client.on('message', message => {
    //console.log(message.content);

     if(message.content.startsWith('ba')) {
    message.channel.send("BA MUIE")
     }

     if(message.content.startsWith('gasca')) {
        message.channel.send("aka sclavul sexual al lui Vio")
     }

     if(message.content.startsWith('Imi place de vio')) {
        message.channel.send("Vezi ba dracu ca e a lui Gasca si ti-o iei grav")
     }

     if(message.content.startsWith('gay')) {
        message.channel.send("U so gay bro")
     }

     if(message.content.startsWith('ia d-aici')) {
        message.channel.send("na amenda in mortii ma-tii")
     }

})

client.on('message', message => {
    //console.log(message.content);

     if(message.content.startsWith('mr')) {
    message.channel.send("oh mr")
     }

     if(message.content.startsWith('esti o rafinata')) {
        message.channel.send("esti super tunata")
         }

})

client.on('message', message => {
    //console.log(message.content);

     if(message.content.startsWith('vivi')) {
    message.channel.send("Mos Craciun porn version")
     }

     if(message.content.startsWith('beatrice')) {
        message.channel.send("Isi daruieste chilotii de Craciun but doar lui vivi")
     }

     if(message.content.startsWith('Adelin')) {
      message.channel.send("Sarpe ssss")
   } 

    if(message.content.startsWith('Dani')) {
      message.channel.send("Sclavul lui coffeee")
   } 

   if(message.content.startsWith('Coffeee')) {
      message.channel.send("Iti da cu ban hammer ul in cap")
   } 

   if(message.content.startsWith('nb')) {
      message.channel.send("Va urez o noapte secs <3")
   } 

   if(message.content.startsWith('miku')) {
      message.channel.send("pulicu lui teo")
   } 

   if(message.content.startsWith('Reflex')) {
      message.channel.send("kiddo")
   } 

   if(message.content.startsWith('da muie')) {
      message.channel.send("cine dracu te crezi")
   } 

   if(message.content.startsWith('ce plm vrei')) {
      message.channel.send("sa te comporti secs")
   } 

   if(message.content.startsWith('bot')) {
      message.channel.send("ce vreti ba,nu mai poate botul sa doarma")
   } 

   if(message.content.startsWith('tu taci')) {
      message.channel.send("stfu kiddo")
   } 

   if(message.content.startsWith('teo')) {
      message.channel.send("a,iubitelul lui miku")
   } 

   if(message.content.startsWith('Au')) {
      message.channel.send("au coaie :(")
   } 

   if(message.content.startsWith('mister cat')) {
      message.channel.send("baiat de munte")
   } 

   if(message.content.startsWith('ce faci ba')) {
      message.channel.send("ma cacam si eu linistit")
   } 

   if(message.content.startsWith('fain')) {
      message.channel.send("stiu,nu?")
   } 

   if(message.content.startsWith('nu')) {
      message.channel.send("e nu")
   } 

   if(message.content.startsWith('Nu')) {
      message.channel.send("e nu")
   } 
    })

client.login(process.env.BOT_TOKEN);
