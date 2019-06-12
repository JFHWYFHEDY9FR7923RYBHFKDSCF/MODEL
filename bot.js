const Discord = require('discord.js');

const client = new Discord.Client();

const fs = require("fs");

const prefix = "#";

const adminprefix = "#";
 
client.on('ready', () => {
    console.log('I am ready!');
});

 
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`star Bot- Script By : 7md `);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers ' Script By : 7md  Codes ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`نشر اكواد| #تقديم `,"https://www.twitch.tv/dggamingbot")
client.user.setStatus("idle")
 
});


client.on('message', async message => {
    var command = message.content.toLowerCase().split(" ")[0];
    var prefix = '#';// Toxic Codes
    var name = '';// Toxic Codes
    var age = '';// Toxic Codes
    var fromwhere = '';// Toxic Codes
    var fa2dh = '';// Toxic Codes
    var filter = m => m.author.id === message.author.id;// Toxic Codes
    var subChannel = message.guild.channels.find(c => c.name=== '✽-submissions');// Toxic Codes
   
    if(command == prefix + 'تقديم') {// Toxic Codes
        if(message.author.bot) return;
        if(message.channel.type === 'dm') return;
 
        var modRole = message.guild.roles.find(r => r.name === '• Support');// Toxic Codes
       
        if(message.guild.member(message.author).roles.has(modRole.id)) return message.channel.send(':x: | معك الرتبة');// Toxic Codes
        if(!subChannel) return message.channel.send(':x: | يجب ان يتوفر روم اسمه `✽-التقديمات`');// Toxic Codes
       
        message.channel.send(':timer: | **اكتب اسمك الحقيقي الان من فضلك**').then(msgS => {
            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                name = collected.first().content;
                collected.first().delete();
                msgS.edit(':timer: | **من فضلك اكتب عمرك الان**').then(msgS => {
                    message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                        age = collected.first().content;
                        collected.first().delete();
                        msgS.edit(':timer: | **من فضلك اكتب من اي بلد انت**').then(msgS => {
                            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                                fromwhere = collected.first().content;
                                collected.first().delete();
                                msgS.edit(':timer: | **من فضلك اكتب سبب تقديمك على الرتبة والمهارات اللتي لديك لتقديمها**').then(msgS => {
                                    message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                                        fa2dh = collected.first().content;
                                        collected.first().delete();
                                       
                                        let embedS = new Discord.RichEmbed()
                                        .setAuthor(message.author.tag, message.author.avatarURL)
                                        .setThumbnail(message.author.avatarURL)
                                        .setDescription('**\n:no_entry: هل انت متأكد انك تريد التقديم؟**')
                                        .setColor('GREEN')
                                        .addField('الاسم', name, true)
                                        .addField('العمر', age, true)
                                        .addField('من وين', fromwhere, true)
                                        .addField('المهارات وسبب التقديم على الرتبة', fa2dh, true)
                                        .setTimestamp()
                                        .setFooter(message.guild.name, message.guild.iconURL)
                                       
                                        msgS.delete();
                                        message.channel.send(embedS).then(msgS => {
                                            msgS.react('✅').then(() => msgS.react('❎'))
                                           
                                            let yesSure = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                                            let no = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                                           
                                            let yesSend = msgS.createReactionCollector(yesSure);
                                            let dontSend = msgS.createReactionCollector(no);
                                           
                                            yesSend.on('collect', r => {
                                                msgS.delete();
                                                message.channel.send(':white_check_mark: | تم تقديم طلبك بنجاح انتظر النتيجة في روم support-accept').then(msg => msg.delete(5000));
                                               
                                                let subMsg = new Discord.RichEmbed()
                                                .setAuthor(message.author.tag, message.author.avatarURL)
                                                .setColor('GREEN')
                                                .setThumbnail(message.author.avatarURL)
                                                .addField('الاسم', name)
                                                .addField('العمر', age)
                                                .addField('من وين', fromwhere)
                                                .addField('لماذا يريد التقديم', fa2dh)
                                                .addField('حسابه', message.author)
                                                .addField('ايدي حسابه', message.author.id, true)
                                               
                                                subChannel.send(subMsg).then(msgS => {
                                                    msgS.react('✅').then(() => msgS.react('❎'))
                                                   
                                                    let accept = (reaction, user) => reaction.emoji.name === '✅'  && user.id === 
                                                        ('444126346676011028', '489250265485279243');
                                                    let noAccept = (reaction, user) => reaction.emoji.name === '❎' && user.id === 
                                                        ('444126346676011028', '489250265485279243');
                                                 
 
                                                    let acceptRe = msgS.createReactionCollector(accept);
                                                    let noAcceptRe = msgS.createReactionCollector(noAccept);
                                                   
                                                    acceptRe.on('collect', r => {
                                                        msgS.delete();
                                                        message.author.send(`:white_check_mark: | تم قبولك بسيرفر **${message.guild.name}**`);
                                                        message.guild.member(message.author).addRole(modRole.id);
                                                        message.guild.channels.find(r => r.name === '✽-القبول-الرفض').send(`:white_check_mark: | تم قبولك [ <@${message.author.id}> ]`);
                                                    }).catch();
                                                    noAcceptRe.on('collect', r => {
                                                        msgS.delete();
                                                        message.author.send(`:x: | تم رفضك بسيرفر **${message.guild.name}**`);
                                                        message.guild.channels.find(r => r.name === '✽-القبول-الرفض').send(`:x: | تم رفضك [ <@${message.author.id}> ]`);
                                                    }).catch();
                                                })
                                            });// Toxic Codes
                                            dontSend.on('collect', r => {
                                                msgS.delete();
                                                message.channel.send(':x: | تم الغاء تقديمك');// Toxic Codes
                                            });
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }
});
 
client.on("message", msg => {
    if(msg.author.bot) return;
if(!msg.guild.member(msg.author).hasPermission("MANAGE_ROLES")) return;
    if(msg.channel.type === 'dm') return;
  let prefix = '#'; //البرفكس
  let msgarray = msg.content.split(" ");
  let cmd = msgarray[0];
  let args = msgarray.slice(1);
  if(cmd === `${prefix}قبول`){
   
   
 
    let aUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
  if(!aUser) return msg.channel.send("Couldn't find users.");
 
 
     
     
      let ac = msg.guild.channels.find(`name`,"✽-القبول-الرفض");
      if(!ac) return msg.channel.send("Couldn't find `اسم الروم` channel. ");
      ac.send(`** تم بنجاح قبولك    ${aUser}**`)
 
      msg.delete().catch(O_o=>{});
      var role = msg.guild.roles.find(`name`, '• Support');
      var role2 = msg.guild.roles.find(`name`, '• Support Plus');
      var role3 = msg.guild.roles.find(`name`, '• Support Master');
      if(!role) return msg.guild.channel.send("Could't find `اسم رتبت السبورت` role.");
      aUser.addRole(role);
      aUser.addRole(role2);
      aUser.addRole(role3);
     
          return;
      }
      });
 
client.on("message", msg => {
    if(msg.author.bot) return;
if(!msg.guild.member(msg.author).hasPermission("MANAGE_ROLES")) return;
    if(msg.channel.type === 'dm') return;
  let prefix = '#'; //البرفكس
  let msgarray = msg.content.split(" ");
  let cmd = msgarray[0];
  let args = msgarray.slice(1);
  if(cmd === `${prefix}رفض`){
   
   
 
    let aUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
  if(!aUser) return msg.channel.send("Couldn't find users.");
 
 
     
     
      let ac = msg.guild.channels.find(`name`,"✽-القبول-الرفض");
      if(!ac) return msg.channel.send("Couldn't find `اسم الروم` channel. ");
      ac.send(`** تم للاسف رفضك${aUser}**`)
 
      msg.delete().catch(O_o=>{});
     
     
          return;
      }
      });
 
client.on("message", msg => {
    if(msg.author.bot) return;
    if(msg.channel.type === 'dm') return;
if(!msg.guild.member(msg.author).hasPermission("MANAGE_ROLES")) return;
  let prefix = '#'; //البرفكس
  let msgarray = msg.content.split(" ");
  let cmd = msgarray[0];
  let args = msgarray.slice(1);
  if(cmd === `${prefix}سحب`){
   
   
 
    let aUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
  if(!aUser) return msg.channel.send("Couldn't find users.");
 
 
     
     
     
 
      msg.delete().catch(O_o=>{});
      var role = msg.guild.roles.find(`name`, '• Support');
      var role2 = msg.guild.roles.find(`name`, '• Support Plus');
      var role3 = msg.guild.roles.find(`name`, '• Support Master');
      if(!role) return msg.guild.channel.send("Could't find `اسم رتبت السبورت` role.");
      aUser.removeRole(role);
      aUser.removeRole(role2);
      aUser.removeRole(role3);
     
          return;
      }
      });
 
