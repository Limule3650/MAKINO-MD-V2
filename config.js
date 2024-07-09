const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


global.Owner = ["237693538738"];
global.OwnerNumber = ["237693538738"];
global.ownertag = ["237693538738"]; 
global.OwnerName =  "god Limule Solitarius";
global.BotName = "🐦Makino-md-v2";
global.packname = "seijuro akashi";                             //Do not change.
global.author = "🐦Makino md Limule-Brown";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"sFTDEfADV6WsVkUj4MHnunp18hxuCTWNhMePj/jKC1M="},"public":{"type":"Buffer","data":"cxbIyJgFP98k74lurEl36q0ahwn3+Fc7GKObexNhdkY="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"mKcwvrXLL+mz8zzMQSMBtFHxiN9stP/pAy8GUse3LE0="},"public":{"type":"Buffer","data":"wc1dkwdYXYXCp8ZDTHPV+QafUl+9m5vz9nTWiIDaGns="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"WOFC9Z2LCubtXtx8l87Rfss0wxMNBs6sZ1KQsPt72XY="},"public":{"type":"Buffer","data":"mo8vEZkubh6yMqyUrsP8cwXkvYu1He+zvfbSLRXMGFU="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"YGdBFe/ktof7wZMt9FYCjHeA5PuWI2rAyXHuat2djkM="},"public":{"type":"Buffer","data":"4VLiP6ICINwLUUwZpeEFUTIIFEQ7/YFNzYHTNM1/qmU="}},"signature":{"type":"Buffer","data":"kgOpel73GbRrVDw95BNNvWUSKBqtWgdvDvHsUeL3OYktYQgc0drb57k+K9zLYsNL9YZbNTa1Hl8mizSORvSCDg=="},"keyId":1},"registrationId":128,"advSecretKey":"vggEsra0Q3OrpfEtLgOZG4yOhl5x4BxIytmOb5IOLWE=","processedHistoryMessages":[{"key":{"remoteJid":"237686724137@s.whatsapp.net","fromMe":true,"id":"0A1DA8C26586D75DECA4F3D24A7ACF7A"},"messageTimestamp":1720503551},{"key":{"remoteJid":"237686724137@s.whatsapp.net","fromMe":true,"id":"EC3693C426D2E2669340955CCDB1BA4E"},"messageTimestamp":1720503552}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"4wP2qsIvRtea9KEe9vCdvQ","phoneId":"32878d86-4f88-4e22-a879-de0e1511f1a7","identityId":{"type":"Buffer","data":"2+GwbRCNoK+zlyYTbUDWf56PUDg="},"registered":true,"backupToken":{"type":"Buffer","data":"8BSHwhhUxK7RSHnAhf43xqMsmgE="},"registration":{},"pairingCode":"7MEKFK7P","me":{"id":"237686724137:6@s.whatsapp.net","name":"𝑮𝑼𝑰 𝑪𝑹𝑰𝑴𝑺𝑶𝑵 <§𝐁𝐑𝐎𝐖𝐍]"},"account":{"details":"CMfR+7EDEO+Zs7QGGAEgACgA","accountSignatureKey":"akm0BBW4wx4AcRBGnAL7li0c3w05UB+4keOEKr6+hhc=","accountSignature":"6cOiDlOFClClXTM4TF7Fc+XpujSbp2kYeQu03HRAnI6D4bv4kQbUyqAzuvCAO3/OSKDhtWdR72mMjn200NVWBQ==","deviceSignature":"HFXrZR190iXhbXFj/uW8F3I3D1JM5uXP1f1H7OtzOUO09HvjJ2DGWCbWA6MpEB8j2qcbHdUt2ukdu4gbWj1SBw=="},"signalIdentities":[{"identifier":{"name":"237686724137:6@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BWpJtAQVuMMeAHEQRpwC+5YtHN8NOVAfuJHjhCq+voYX"}}],"platform":"smba","lastAccountSyncTimestamp":1720503548,"myAppStateKeyId":"AAAAAB/N"}`
global.prefa = ["/"]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
