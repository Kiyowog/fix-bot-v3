import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)


if (command == 'whmods1') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;Fahri ?;Bot;;Md\nFN:Fahri ?, Md\nNICKNAME:🗿 Owner FHBOTZMD Bot\nORG:WH\nTITLE:MODS\nitem1.TEL;waid=62877851755350:+62 877-8517-55350\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://www.youtube.com/channel/WindahBasudara\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:fahrifqofc@yahoo.com\nitem3.X-ABLabel:💌 Mail Owner FHBOTZMD\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🔖 KEPO LU YAH\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fakes })
let caption = `👋 Hai *${name} @${who.split("@")[0]}*, Nih Owner *${conn.user.name}* kak`
    await conn.sendButton(m.chat, caption, author, null, [['🎀 Sapa Owner', 'Huuu']], m, { quoted: tag_own, mentions: conn.parseMention(caption) })
}
if (command == 'whmods2') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${author};;;\nFN:${author}\nORG:${author}\nTITLE:\nitem1.TEL;waid=62877851755350:+62 877-8517-55350\nitem1.X-ABLabel:${author}\nX-WA-BIZ-DESCRIPTION:${htjava} saya adalah owner sekaligus developer dari bot ini.\nX-WA-BIZ-NAME:${author}\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fakes })
}
function E(I,Z){return P(Z-0x32b,I);}(function(I,Z){const l=I();function A(I,Z){return P(I-0x222,Z);}while(!![]){try{const R=parseInt(A(0x387,'\x5d\x29\x64\x52'))/0x1+-parseInt(A(0x38f,'\x55\x24\x68\x61'))/0x2+-parseInt(A(0x37f,'\x35\x6e\x63\x59'))/0x3*(parseInt(A(0x376,'\x71\x52\x5a\x79'))/0x4)+-parseInt(A(0x397,'\x61\x21\x46\x4e'))/0x5*(parseInt(A(0x38e,'\x47\x57\x65\x72'))/0x6)+parseInt(A(0x370,'\x47\x57\x65\x72'))/0x7+-parseInt(A(0x382,'\x40\x42\x6e\x44'))/0x8*(-parseInt(A(0x395,'\x76\x66\x7a\x59'))/0x9)+parseInt(A(0x390,'\x48\x67\x48\x37'))/0xa;if(R===Z)break;else l['push'](l['shift']());}catch(i){l['push'](l['shift']());}}}(G,0x7e5c1));function P(I,Z){const l=G();return P=function(R,i){R=R-0x14b;let A=l[R];if(P['\x56\x65\x66\x4b\x44\x4d']===undefined){var E=function(a){const r='\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';let L='',j='';for(let g=0x0,u,W,N=0x0;W=a['\x63\x68\x61\x72\x41\x74'](N++);~W&&(u=g%0x4?u*0x40+W:W,g++%0x4)?L+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff&u>>(-0x2*g&0x6)):0x0){W=r['\x69\x6e\x64\x65\x78\x4f\x66'](W);}for(let D=0x0,U=L['\x6c\x65\x6e\x67\x74\x68'];D<U;D++){j+='\x25'+('\x30\x30'+L['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](D)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);}return decodeURIComponent(j);};const m=function(a,r){let L=[],g=0x0,u,W='';a=E(a);let N;for(N=0x0;N<0x100;N++){L[N]=N;}for(N=0x0;N<0x100;N++){g=(g+L[N]+r['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](N%r['\x6c\x65\x6e\x67\x74\x68']))%0x100,u=L[N],L[N]=L[g],L[g]=u;}N=0x0,g=0x0;for(let D=0x0;D<a['\x6c\x65\x6e\x67\x74\x68'];D++){N=(N+0x1)%0x100,g=(g+L[N])%0x100,u=L[N],L[N]=L[g],L[g]=u,W+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](a['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](D)^L[(L[N]+L[g])%0x100]);}return W;};P['\x6c\x6f\x5a\x46\x77\x48']=m,I=arguments,P['\x56\x65\x66\x4b\x44\x4d']=!![];}const h=l[0x0],J=R+h,t=I[J];return!t?(P['\x48\x53\x50\x5a\x71\x53']===undefined&&(P['\x48\x53\x50\x5a\x71\x53']=!![]),A=P['\x6c\x6f\x5a\x46\x77\x48'](A,i),I[J]=A):A=t,A;},P(I,Z);}if(command==E('\x49\x65\x68\x6b',0x48e))try{const sentMsg=await conn[E('\x30\x34\x50\x51',0x49f)](m[E('\x51\x55\x61\x38',0x491)],[[''+nomorown,''+await conn[E('\x67\x31\x4d\x5d',0x487)](nomorown+'\x40\x73\x2e\x77\x68\x61\x74\x73\x61\x70\x70\x2e\x6e\x65\x74'),E('\x28\x28\x30\x5e',0x47b),'\ud83d\udeab\x20\x44\x6f\x6e\x27\x74\x20\x63\x61\x6c\x6c\x20\x6d\x65\x20\ud83e\udd7a',E('\x47\x5b\x66\x45',0x483),'\ud83c\uddee\ud83c\udde9\x20\x49\x6e\x64\x6f\x6e\x65\x73\x69\x61',E('\x40\x42\x6e\x44',0x49c),'\ud83d\udc64\x20\x47\x61\x64\x61\x20\x70\x61\x77\x61\x6e\x67\x20\x6e\x69\x68\x20\x73\x65\x6e\x67\x67\x6f\x6c\x20\x64\x6f\x6e\x67\x20\ud83d\ude14'],[''+conn[E('\x70\x5d\x23\x25',0x49d)][E('\x5a\x54\x65\x49',0x486)][E('\x47\x57\x65\x72',0x47d)]('\x40')[0x0],''+await conn['\x67\x65\x74\x4e\x61\x6d\x65'](conn[E('\x6c\x42\x6d\x46',0x489)]['\x6a\x69\x64']),E('\x34\x6e\x76\x2a',0x48f),E('\x71\x52\x5a\x79',0x496),E('\x53\x30\x76\x45',0x484),E('\x55\x65\x47\x4c',0x48a),E('\x4b\x7a\x55\x53',0x485),'\ud83e\udd16\x20\x48\x61\x6e\x79\x61\x20\x62\x6f\x74\x20\x62\x69\x61\x73\x61\x20\x79\x61\x6e\x67\x20\x6b\x61\x64\x61\x6e\x67\x20\x73\x75\x6b\x61\x20\x65\x72\x6f\x72\x20\u263a']],fakes);await conn[E('\x5d\x5e\x35\x30',0x493)](m[E('\x32\x33\x4b\x23',0x47a)],E('\x68\x64\x43\x21',0x47e)+m[E('\x4b\x7a\x55\x53',0x48d)][E('\x5a\x54\x65\x49',0x49a)]('\x40')[0x0]+E('\x68\x64\x43\x21',0x494),sentMsg,{'\x6d\x65\x6e\x74\x69\x6f\x6e\x73':[m['\x73\x65\x6e\x64\x65\x72']]});}catch{const sentMsg=await conn[E('\x6f\x23\x4c\x67',0x495)](m[E('\x30\x34\x50\x51',0x476)],''+nomorown,''+await conn[E('\x68\x64\x43\x21',0x482)](nomorown+E('\x61\x2a\x59\x5d',0x477)),m);await conn[E('\x41\x4a\x51\x5e',0x4a1)](m['\x63\x68\x61\x74'],E('\x50\x39\x6e\x78',0x49b)+m[E('\x48\x67\x48\x37',0x48c)]['\x73\x70\x6c\x69\x74']('\x40')[0x0]+'\x20\x69\x74\x75\x20\x6e\x6f\x6d\x6f\x72\x20\x74\x65\x61\x6d\x20\x64\x65\x76\x65\x6c\x6f\x70\x65\x72\x6b\x75\x2c\x20\x6a\x61\x6e\x67\x61\x6e\x20\x64\x69\x20\x61\x70\x61\x2d\x61\x70\x61\x69\x6e\x20\x79\x61\x20\x6b\x61\x6b\ud83d\ude16',sentMsg,{'\x6d\x65\x6e\x74\x69\x6f\x6e\x73':[m['\x73\x65\x6e\x64\x65\x72']]});}function G(){const h=['\x44\x6d\x6b\x39\x41\x32\x34','\x57\x36\x79\x50\x57\x36\x65\x52\x46\x38\x6b\x66\x43\x75\x6d\x76\x62\x76\x6a\x59\x46\x4c\x64\x64\x4a\x47','\x69\x38\x6f\x47\x72\x66\x56\x64\x4a\x38\x6b\x37\x57\x36\x33\x63\x4c\x71','\x57\x35\x30\x78\x75\x73\x4c\x48\x57\x36\x6c\x63\x55\x72\x2f\x63\x51\x67\x65\x4f\x62\x47','\x67\x38\x6f\x66\x78\x53\x6b\x47','\x38\x6a\x2b\x49\x49\x53\x6f\x48\x44\x53\x6f\x7a\x6c\x38\x6f\x31\x7a\x33\x31\x69\x57\x4f\x72\x6d\x57\x36\x54\x6e\x63\x78\x70\x64\x51\x71','\x63\x6d\x6f\x72\x57\x52\x44\x67\x57\x36\x31\x39\x61\x4d\x38\x2b\x64\x57','\x57\x50\x48\x71\x63\x33\x65\x49','\x64\x43\x6b\x67\x65\x31\x44\x39\x67\x43\x6b\x44\x57\x51\x6a\x56\x57\x37\x65','\x77\x62\x2f\x63\x48\x59\x72\x4e\x57\x35\x76\x71\x75\x57\x52\x64\x54\x47','\x6a\x4c\x70\x64\x4f\x6d\x6f\x69\x43\x43\x6b\x5a\x57\x50\x64\x64\x54\x53\x6f\x56\x57\x50\x53\x4c\x78\x61','\x57\x4f\x2f\x64\x56\x43\x6b\x62\x75\x38\x6f\x58\x66\x6d\x6b\x55\x57\x37\x69\x34\x57\x52\x5a\x64\x56\x4e\x69','\x69\x53\x6b\x63\x63\x33\x79\x38\x68\x38\x6b\x7a','\x57\x34\x37\x63\x52\x43\x6f\x7a\x63\x6d\x6b\x47\x75\x38\x6f\x58\x57\x50\x61\x70\x57\x4f\x5a\x64\x4d\x76\x50\x6a\x57\x52\x50\x51\x57\x34\x56\x63\x55\x58\x47','\x68\x38\x6f\x4b\x42\x59\x7a\x50\x57\x35\x70\x64\x4a\x47','\x38\x6a\x59\x37\x54\x65\x70\x64\x49\x43\x6b\x4e\x6f\x38\x6b\x52\x57\x4f\x34\x39\x57\x35\x4f\x47\x63\x53\x6b\x32\x57\x34\x61\x5a\x7a\x6d\x6f\x36\x57\x51\x53\x77\x57\x35\x54\x71\x57\x35\x78\x64\x48\x38\x6f\x65\x57\x36\x4e\x64\x4b\x43\x6f\x50\x65\x74\x35\x55\x57\x36\x47\x51\x57\x52\x7a\x38','\x61\x53\x6f\x76\x74\x61','\x6e\x53\x6b\x51\x57\x52\x35\x78\x57\x50\x4f\x61\x57\x34\x4b','\x6b\x43\x6b\x70\x57\x35\x64\x64\x4a\x67\x6c\x63\x55\x62\x33\x63\x52\x72\x44\x78','\x57\x4f\x62\x57\x57\x36\x7a\x62','\x38\x6b\x51\x30\x4a\x2f\x67\x70\x4c\x7a\x37\x63\x53\x65\x30\x78\x79\x63\x33\x63\x4e\x43\x6b\x52\x57\x36\x78\x63\x50\x68\x34','\x45\x75\x4f\x63\x57\x50\x2f\x64\x54\x6d\x6b\x2f\x57\x52\x38\x38\x77\x43\x6b\x34\x67\x67\x4e\x64\x4c\x47','\x57\x50\x57\x68\x57\x35\x48\x42\x42\x4d\x69','\x46\x72\x65\x6e\x57\x34\x78\x63\x54\x4a\x30','\x62\x6d\x6b\x38\x43\x53\x6b\x44\x57\x52\x34\x30\x57\x34\x53','\x38\x6c\x67\x78\x4f\x38\x6f\x4e\x68\x6d\x6f\x34\x57\x37\x7a\x31\x64\x76\x57\x37\x6b\x57\x34\x4a\x65\x53\x6f\x30\x57\x52\x33\x57\x4b\x42\x6f\x32','\x6c\x6d\x6f\x49\x69\x43\x6b\x6b\x6d\x4d\x79\x72\x57\x35\x4a\x64\x4a\x65\x37\x63\x49\x53\x6b\x64','\x57\x35\x75\x49\x57\x36\x68\x63\x4e\x61','\x46\x71\x35\x51\x57\x34\x2f\x63\x49\x53\x6f\x48\x57\x36\x43','\x67\x47\x37\x64\x4b\x6d\x6f\x34\x70\x57','\x7a\x43\x6b\x6f\x63\x30\x31\x39\x68\x6d\x6b\x74\x57\x51\x71\x47\x57\x34\x6d\x35\x57\x4f\x2f\x64\x51\x6d\x6b\x32\x66\x57\x5a\x64\x48\x57\x79\x2f\x78\x67\x6a\x47\x57\x52\x7a\x58\x57\x35\x52\x64\x4f\x74\x56\x63\x4b\x53\x6b\x51\x63\x38\x6b\x4b\x61\x6d\x6f\x50\x57\x52\x50\x56\x42\x49\x52\x63\x56\x68\x68\x64\x54\x31\x56\x57\x51\x6a\x49\x6d','\x57\x35\x37\x64\x4c\x6d\x6f\x42\x6a\x4d\x74\x64\x47\x76\x46\x64\x52\x75\x78\x64\x4e\x68\x61','\x38\x6b\x77\x64\x4e\x43\x6b\x46\x75\x66\x4e\x64\x49\x63\x76\x2f\x7a\x38\x6f\x4a\x57\x4f\x31\x30\x65\x72\x62\x30\x67\x43\x6b\x6a\x63\x6d\x6b\x47\x46\x43\x6f\x6c\x57\x34\x56\x57\x4c\x42\x55\x2b','\x57\x35\x38\x7a\x76\x63\x54\x4b\x57\x36\x37\x64\x4c\x71\x64\x63\x56\x77\x65\x65\x6d\x6d\x6f\x51','\x57\x50\x52\x64\x53\x38\x6b\x2b\x77\x6d\x6b\x4d\x57\x52\x52\x63\x4f\x74\x42\x64\x48\x6d\x6f\x65\x57\x37\x70\x63\x4f\x61\x47','\x57\x35\x35\x71\x57\x4f\x65\x6d\x6d\x49\x44\x4f\x6a\x43\x6f\x32\x42\x43\x6b\x7a\x74\x53\x6f\x66\x57\x52\x47','\x67\x38\x6f\x6d\x72\x6d\x6f\x52\x57\x35\x30','\x6c\x63\x2f\x64\x53\x62\x66\x46\x77\x61\x64\x63\x4c\x38\x6f\x34\x57\x36\x38','\x38\x6b\x32\x42\x55\x62\x56\x64\x4a\x53\x6b\x33\x57\x37\x4e\x64\x56\x59\x4b\x37\x57\x37\x6a\x47\x73\x38\x6f\x4e\x57\x4f\x57\x71\x57\x50\x52\x64\x4c\x4c\x65\x6e\x66\x6d\x6f\x58\x57\x51\x6c\x63\x55\x53\x6b\x56\x57\x52\x38\x70\x57\x37\x4a\x63\x4c\x76\x30\x45\x57\x36\x34\x6b\x57\x35\x6c\x64\x48\x38\x6b\x4d\x6f\x38\x6b\x65\x57\x36\x39\x64\x43\x76\x65\x68\x57\x34\x35\x71\x57\x52\x62\x35\x78\x43\x6f\x43\x7a\x62\x56\x63\x4c\x53\x6b\x6d\x57\x36\x42\x63\x48\x73\x69\x75\x57\x37\x78\x63\x55\x53\x6b\x71','\x57\x52\x78\x64\x48\x31\x69\x30','\x57\x51\x64\x64\x49\x64\x57\x46\x7a\x6d\x6b\x32\x57\x36\x6d\x4b','\x7a\x6d\x6b\x57\x7a\x68\x37\x64\x48\x43\x6b\x7a\x57\x36\x2f\x63\x4b\x47\x6e\x4d\x6b\x65\x76\x30\x57\x50\x37\x64\x4b\x53\x6f\x52','\x57\x50\x2f\x63\x50\x4e\x53\x58\x57\x4f\x30\x47\x6e\x47','\x65\x59\x56\x63\x49\x47\x37\x64\x56\x47','\x57\x4f\x46\x63\x4a\x38\x6b\x65\x42\x4c\x57\x4e\x57\x4f\x53\x61\x57\x36\x2f\x63\x4f\x78\x64\x63\x52\x57\x79\x2b'];G=function(){return h;};return G();}

 //knp di enc? , biar kgk di rename deksripsi Developer nya, kalau untuk nomor nya bakal otomatis berubah pas kalian ubah di config.js
}
handler.help = ['whmods1', 'whmods2', 'whmods3']
handler.tags = ['info']

handler.command = /^(whmods1|whmods2|whmods3)$/i

export default handler
