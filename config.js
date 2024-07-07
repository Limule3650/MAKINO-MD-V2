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


global.Owner = [""];
global.OwnerNumber = ["237693538738"];
global.ownertag = [""]; 
global.OwnerName =  "god Limule Solitarius";
global.BotName = "🐦Makino-md-v2";
global.packname = "seijuro akashi";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"KH0Dpeaw3m6x/St2oQA82QzSh37/ACPsZ4sZIFvpZ0g="},"public":{"type":"Buffer","data":"Sv36I7OJU8iWnyk/tzgul/K+lacvGy3Yz9OCsXbj9no="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"6JeQR9wUhDlvszlaIll9JWU7PFlID4RTcGhPgocZ41o="},"public":{"type":"Buffer","data":"s3L0ecXNZMGReFLvIcQnyvWd20yTqylw2Q5hqJ4SHFk="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"AHvKdK4D9jjFUxXwX11foRQSavW0dAz6x/4Gud0PFnE="},"public":{"type":"Buffer","data":"heHdRVDTBkHEuJgCQny5D+XU//cBoWbKR6TIr5m7ExY="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"yFflPTlK6AoU6kBeylO6y+tOavp02tPf18v7PdFIcmM="},"public":{"type":"Buffer","data":"TDCQZUipo2eQFmHM9SlJTX3skVFetQVbM4gmZFPwGHw="}},"signature":{"type":"Buffer","data":"XghLud4Z7HYGJTSYRC1Sk/GwIAcUz2FeB/raAaV84ESO/AGM8zcXLQr03Hcz+oJuxxp8tnN/gPwpfgibzNohAg=="},"keyId":1},"registrationId":188,"advSecretKey":"1f2g1PUyQcW1aAsMooPgIutLV+PNu3ZIS8nHx311DAE=","processedHistoryMessages":[{"key":{"remoteJid":"237686724137@s.whatsapp.net","fromMe":true,"id":"58137E7BC072F93AA80B855F6D2740CA"},"messageTimestamp":1720394435},{"key":{"remoteJid":"237686724137@s.whatsapp.net","fromMe":true,"id":"5A53105B8B309E37017BADF3E4D43D80"},"messageTimestamp":1720394435}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"u2TH95LzREq_SnNtZQH2ig","phoneId":"17219a2a-8dab-4c8e-ba6d-eb0cea308b7d","identityId":{"type":"Buffer","data":"7di8NNWzQQOLr30KiWLlDXbPXsM="},"registered":true,"backupToken":{"type":"Buffer","data":"Wv11kOHS60uP/Hi8zPher+MFXjs="},"registration":{},"pairingCode":"GE8673WP","me":{"id":"237686724137:2@s.whatsapp.net","name":"Seijuro Akashi"},"account":{"details":"CMHR+7EDELTFrLQGGAIgACgA","accountSignatureKey":"akm0BBW4wx4AcRBGnAL7li0c3w05UB+4keOEKr6+hhc=","accountSignature":"cstvpMmgACvCOOjknv7JMVgjUFEKakYb1nplyOj5gqCQt6bNOrtfqHbBSPgZ50mN2/pZQMgoBaqBMKIy3KI2DQ==","deviceSignature":"uXJ93oI1HQmvZvyQTgERqSygZ7wsZKVfBiZTF+5wbys529mHoobgrzulHVboly1ymVNpnnpGKqxHm9DX9XSUBg=="},"signalIdentities":[{"identifier":{"name":"237686724137:2@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BWpJtAQVuMMeAHEQRpwC+5YtHN8NOVAfuJHjhCq+voYX"}}],"platform":"smba","lastAccountSyncTimestamp":1720394433,"myAppStateKeyId":"AAAAAENs"}`
global.prefa = ["."]

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
