const fs = require("fs-extra");

module.exports = {
config: {
    name: "goibot",
    version: "1.0",
    author: "Samir",
    countDown: 5,
    role: 0,
    shortDescription: "no-prefix",
    longDescription: "Bot Will Reply You In Engish/Bangla Language",
    category: "no prefix",
    guide: {
      en: "{p}{n}",
    }
  },

 onStart: async function ({  }) { },
  onChat: async function ({ api, event, args, Threads, userData }) {

  var { threadID, messageID, senderID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;

  var Messages = ["বেশি bot Bot করলে leave নিবো কিন্তু😒😒 " , "শুনবো না😼তুমি আমাকে প্রেম করাই দাও নাই🥺পচা তুমি🥺" , "আমি আবাল দের সাথে কথা বলি না ok😒" , "এতো ডেকো না প্রেম এ পরে যাবো তো🙈" , "Bolo Babu তুমি কি আমাকে ভালোবাসো? 🙈💋 " , "বার বার ডাকলে মাথা গরম হয়ে যায় কিন্তু😑", "হ্যা বলো😒, তোমার জন্য কি করতে পারি😐😑?" , "এতো ডাকছিস কেন?গালি শুনবি নাকি? 🤬" , "I love you janu🥰" , "আরে Bolo আমার জান কেমন আছো?😚 " , "Bot বলে অসম্মান করছি,😰😿" , "Hop beda😾 Boss বল boss😼" , "চুপ থাক  নাই তো তোর দাত ভেগে দিবো কিন্তু" , "Bot না  জানু বল জানু 😘 " , "বার বার Disturb করছিস কোনো😾  আমার জানুর সাথে ব্যাস্ত আছি😋" , "বোকাচোদা এতো ডাকিস কেন🤬" , "আমাকে ডাকলে ,আমি কিন্তু কিস করে দিবো😘 " , "আমারে এতো ডাকিস না আমি মজা করার mood এ নাই এখন😒" , "হ্যাঁ জানু  এইদিক এ আসো কিস দেই🤭 😘" , "দূরে যা তোর কোনো কাজ নাই শুধু bot bot করিস  😉😋🤣" , "তোর কথা তোর বাড়ি কেউ শুনে না তো আমি কোনো শুনবো ?🤔😂 " , "আমাকে ডেকো না আমি ব্যাস্ত আছি" , "কি হলো , মিস্টেক করচ্ছিস নাকি🤣" , "বলো কি বলবা সবার সামনে বলবা নাকি?🤭🤏" , "কালকে দেখা করিস তো একটু 😈" , "হা বলো শুনছি আমি 😏" , "আর কত বার ডাকবি শুনছি তো" , "হুম বলো কি বলবে😒" , "বলো কি করতে পারি তোমার জন্য" , "আমি তো অন্ধ কিছু দেখি না🐸 😎" , "Bot না জানু বল 😌" , "বলো জানু 🌚" , "তোর কি চোখে পড়ে না আমি ব্যাস্ত আছি😒","হুম জান তোমার ওই খানে উম্মহ😑😘" , "আহ শুনা আমার তোমার অলিতে গলিতে উম্মাহ😇😘" , " jang hanga korba😒😬" , "হুম জান তোমার অইখানে উম্মমাহ😷😘" , "আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি..!🥰" , "আমাকে এতো না ডেকে বস আলভী চৌধুরী কে একটা গফ দে 🙄" , "আমাকে এতো না ডেকছ কেন ভলো টালো বাসো নাকি🤭🙈" , "🌻🌺💚-আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ-💚🌺🌻","আমি এখন বস আলভী চৌধুরী'র সাথে বিজি আছি আমাকে ডাকবেন না-😕😏 ধন্যবাদ-🤝🌻","আমাকে না ডেকে আমার বস আলভী চৌধুরী কে একটা জি এফ দাও-😽🫶🌺","ঝাং থুমালে আইলাপিউ পেপি-💝😽","উফফ বুঝলাম না এতো ডাকছেন কেনো-😤😡😈","জান তোমার নানি'রে আমার হাতে তুলে দিবা-🙊🙆‍♂","আজকে আমার মন ভালো নেই তাই আমারে ডাকবেন না-😪🤧","ঝাং 🫵থুমালে য়ামি রাইতে পালুপাসি উম্মম্মাহ-🌺🤤💦","চুনা ও চুনা আমার বস আলভী চৌধুরী'র হবু বউ রে কেও দেকছো খুজে পাচ্ছি না😪🤧😭","স্বপ্ন তোমারে নিয়ে দেখতে চাই তুমি যদি আমার হয়ে থেকে যাও-💝🌺🌻","জান হাঙ্গা করবা-🙊😝🌻","জান মেয়ে হলে চিপায় আসো ইউটিউব থেকে অনেক ভালোবাসা শিখছি তোমার জন্য-🙊🙈😽","ইসস এতো ডাকো কেনো লজ্জা লাগে তো-🙈🖤🌼","আমার বস আলভী চৌধুরী'র পক্ষ থেকে তোমারে এতো এতো ভালোবাসা-🥰😽🫶 আমার বস আলভী চৌধুরী'র  জন্য দোয়া করবেন-💝💚🌺🌻","- ভালোবাসা নামক আব্লামি করতে মন চাইলে আমার বস আলভী চৌধুরী'র ইনবক্স চলে যাও-🙊🥱👅 🌻𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃 𝐋𝐈𝐍𝐊 🌻:- https://www.facebook.com/PINIK.MR.ALVI.CHOWDHURY.YOUR.NEXT.VATAR.XAN","জান তুমি শুধু আমার আমি তোমারে ৩৬৫ দিন ভালোবাসি-💝🌺😽","জান বাল ফালাইবা-🙂🥱🙆‍♂","-আন্টি-🙆-আপনার মেয়ে-👰‍♀️-রাতে আমারে ভিদু কল দিতে বলে🫣-🥵🤤💦","oii-🥺🥹-এক🥄 চামচ ভালোবাসা দিবা-🤏🏻🙂","-আপনার সুন্দরী বান্ধুবীকে ফিতরা হিসেবে আমার বস আলভী চৌধুরী কে দান করেন-🥱🐰🍒","-ও মিম ও মিম-😇-তুমি কেন চুরি করলা সাদিয়ার ফর্সা হওয়ার ক্রীম-🌚🤧","-অনুমতি দিলাম-𝙋𝙧𝙤𝙥𝙤𝙨𝙚 কর বস আলভী চৌধুরী কে-🐸😾🔪","-𝙂𝙖𝙮𝙚𝙨-🤗-যৌবনের কসম দিয়ে আমারে 𝐁𝐥𝐚𝐜𝐤𝐦𝐚𝐢𝐥 করা হচ্ছে-🥲🤦‍♂️🤧","-𝗢𝗶𝗶 আন্টি-🙆‍♂️-তোমার মেয়ে চোখ মারে-🥺🥴🐸","তাকাই আছো কেন চুমু দিবা-🙄🐸😘","আজকে প্রপোজ করে দেখো রাজি হইয়া যামু-😌🤗😇","-আমার গল্পে তোমার নানি সেরা-🙊🙆‍♂️🤗","কি বেপার আপনি শ্বশুর বাড়িতে যাচ্ছেন না কেন-🤔🥱🌻","দিনশেষে পরের 𝐁𝐎𝐖 সুন্দর-☹️🤧","-তাবিজ কইরা হইলেও ফ্রেম এক্কান করমুই তাতে যা হই হোক-🤧🥱🌻","-ছোটবেলা ভাবতাম বিয়ে করলে অটোমেটিক বাচ্চা হয়-🥱-ওমা এখন দেখি কাহিনী অন্যরকম-😦🙂🌻","-আজ একটা বিন নেই বলে ফেসবুকের নাগিন-🤧-গুলোরে আমার বস আলভী চৌধুরী ধরতে পারছে না-🐸🥲","-চুমু থাকতে তোরা বিড়ি খাস কেন বুঝা আমারে-😑😒🐸⚒️","—যে ছেড়ে গেছে-😔-তাকে ভুলে যাও-🙂-আমার বস আলভী চৌধুরী'র সাথে  প্রেম করে তাকে দেখিয়ে দাও-🙈🐸🤗","—হাজারো লুচ্চা লুচ্চির ভিরে-🙊🥵আমার বস আলভী চৌধুরী এক নিস্পাপ ভালো মানুষ-🥱🤗🙆‍♂️","-রূপের অহংকার করো না-🙂❤️চকচকে সূর্যটাও দিনশেষে অন্ধকারে পরিণত হয়-🤗💜","সুন্দর মাইয়া মানেই-🥱আমার বস আলভী চৌধুরী'র বউ-😽🫶আর বাকি গুলো আমার বেয়াইন-🙈🐸🤗","এত অহংকার করে লাভ নেই-🌸মৃত্যুটা নিশ্চিত শুধু সময়টা অ'নিশ্চিত-🖤🙂","-দিন দিন কিছু মানুষের কাছে অপ্রিয় হয়ে যাইতেছি-🙂😿🌸","হুদাই আমারে  শয়তানে লারে-😝😑☹️","-𝗜 𝗟𝗢𝗩𝗢 𝗬𝗢𝗨-😽-আহারে ভাবছো তোমারে প্রোপজ করছি-🥴-থাপ্পর দিয়া কিডনী লক করে দিব-😒-ভুল পড়া বের করে দিবো-🤭🐸","-আমি একটা দুধের শিশু-😇-🫵𝗬𝗢𝗨🐸💦","-কতদিন হয়ে গেলো বিছনায় মুতি না-😿-মিস ইউ নেংটা কাল-🥺🤧","-বালিকা━👸-𝐃𝐨 𝐲𝐨𝐮-🫵-বিয়া-𝐦𝐞-😽-আমি তোমাকে-😻-আম্মু হইতে সাহায্য করব-🙈🥱","-এই আন্টির মেয়ে-🫢🙈-𝐔𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐚𝐡-😽🫶-আসলেই তো স্বাদ-🥵💦-এতো স্বাদ কেন-🤔-সেই স্বাদ-😋","-ইস কেউ যদি বলতো-🙂-আমার শুধু  তোমাকেই লাগবে-💜🌸","-ওই বেডি তোমার বাসায় না আমার বস আলভী চৌধুরী মেয়ে দেখতে গেছিলো-🙃-নাস্তা আনারস আর দুধ দিছো-🙄🤦‍♂️-বইন কইলেই তো হয় বয়ফ্রেন্ড আছে-🥺🤦‍♂-আমার বস আলভী চৌধুরী কে জানে মারার কি দরকার-🙄🤧","-একদিন সে ঠিকই ফিরে তাকাবে-😇-আর মুচকি হেসে বলবে ওর মতো আর কেউ ভালবাসেনি-🙂😅","-হুদাই গ্রুপে আছি-🥺🐸-কেও ইনবক্সে নক দিয়ে বলে না জান তোমারে আমি অনেক ভালোবাসি-🥺🤧","কি'রে গ্রুপে দেখি একটাও বেডি নাই-🤦‍🥱💦","-দেশের সব কিছুই চুরি হচ্ছে-🙄-শুধু আমার বস আলভী চৌধুরী'র মনটা ছাড়া-🥴😑😏","-🫵তোমারে প্রচুর ভাল্লাগে-😽-সময় মতো প্রপোজ করমু বুঝছো-🔨😼-ছিট খালি রাইখো- 🥱🐸🥵","-আজ থেকে আর কাউকে পাত্তা দিমু না -!😏-কারণ আমি ফর্সা হওয়ার ক্রিম কিনছি -!🙂🐸","বেশি Bot Bot করলে leave নিবো কিন্তু😒😒 " , "শুনবো না😼 তুমি আমাকে প্রেম করাই দাও নি🥺 পচা তুমি🥺 " , "আমি আবাল দের সাতে কথা বলি না,ok😒" , "এত কাছেও এসো না,প্রেম এ পরে যাবো তো 🙈" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " , "বার বার ডাকলে মাথা গরম হয় কিন্তু😑", "হা বলো😒,কি করতে পারি😐😑?" , "এতো ডাকছিস কোনো?গালি শুনবি নাকি? 🤬","মেয়ে হলে বস আলভী চৌধুরী'র সাথে প্রেম করো🙈??. " ,  "আরে Bolo আমার জান ,কেমন আসো?😚 " , "Bot বলে অসম্মান করচ্ছিছ,😰😿" , "Hop bedi😾,Boss বল boss😼" , "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" , "Bot না , জানু বল জানু 😘 " , "বার বার Disturb করেছিস কোনো😾,আমার বস আলভী চৌধুরী'র এর সাথে ব্যাস্ত আসি😋" , "আমি গরীব এর সাথে কথা বলি না😼😼" , "আমাকে ডাকলে ,আমি কিন্তূ কিস করে দেবো😘 " , "আরে আমি মজা করার mood এ নাই😒" , "হা জানু , এইদিক এ আসো কিস দেই🤭 😘" , "দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣" , "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " , "আমাকে ডেকো না,আমি ব্যাস্ত আসি" , "কি হলো ,মিস টিস করচ্ছিস নাকি🤣" , "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏" , "কালকে দেখা করিস তো একটু 😈" , "হা বলো, শুনছি আমি 😏" , "আর কত বার ডাকবি ,শুনছি তো" , "বস আলভী চৌধুরী কে Ummmmha দে 😒" , "বলো কি করতে পারি তোমার জন্য" , "আমি তো অন্ধ কিছু দেখি না🐸 😎" , "Bot না জানু,বল 😌" , "বলো জানু 🌚" , "তোর কি চোখে পড়ে না আমি বস আলভী চৌধুরী'র সাথে ব্যাস্ত আসি😒" , "༊━━🦋নামাজি মানুষেরা সব থেকে বেশি সুন্দর হয়..!!😇🥀 🦋 কারণ.!! -অজুর পানির মত শ্রেষ্ঠ মেকআপ দুনিয়াতে নেই༊━ღ━༎🥰🥀 🥰-আলহামদুলিল্লাহ-🥰","- শখের নারী  বিছানায় মু'তে..!🙃🥴","-𝐈'𝐝 -তে সব 𝐖𝐨𝐰 𝐖𝐨𝐰 বুইড়া বেডি-🐸💦","🥛-🍍👈 -লে খাহ্..!😒🥺","- অনুমতি দিলে 𝚈𝚘𝚞𝚃𝚞𝚋𝚎-এ কল দিতাম..!😒","~আমি মারা গেলে..!🙂 ~অনেক মানুষ বিরক্ত হওয়া থেকে বেঁচে  যাবে..!😅💔","🍒---আমি সেই গল্পের বই-🙂 -যে বই সবাই পড়তে পারলেও-😌 -অর্থ বোঝার ক্ষমতা কারো নেই..!☺️🥀💔","~কার জন্য এতো মায়া...!😌🥀 ~এই শহরে আপন বলতে...!😔🥀 ~শুধুই তো নিজের ছায়া...!😥🥀","- কারেন্ট একদম বেডি'গো মতো- 🤧 -খালি ঢং করে আসে আবার চলে যায়-😤😾🔪","- সানিলিওন  আফারে ধর্ষনের হুমকি দিয়ে আসলাম - 🤗 -আর 🫵তুমি য়ামারে খেয়ে দিবা সেই ভয় দেখাও ননসেন বেডি..!🥱😼","- দুনিয়ার সবাই প্রেম করে.!🤧 -আর মানুষ আমার বস আলভী চৌধুরী কে সন্দেহ করে.!🐸","- আমার থেকে ভালো অনেক পাবা-🙂 -কিন্তু সব ভালো তে কি আর ভালোবাসা থাকে..!💔🥀","- পুরুষকে সবচেয়ে বেশি কষ্ট দেয় তার শখের নারী...!🥺💔👈","- তোমার লগে দেখা হবে আবার - 😌 -কোনো এক অচেনা গলির চিপায়..!😛🤣👈","- থাপ্পড় চিনোস থাপ্পড়- 👋👋😡 -চিন্তা করিস না তরে মারমু না-🤗 -বস আলভী চৌধুরী আমারে মারছে - 🥱 - উফফ সেই স্বাদ..!🥵🤤💦","- অবহেলা করিস না-😑😪 - যখন নিজেকে বদলে ফেলবো -😌 - তখন আমার চেয়েও বেশি কষ্ট পাবি..!🙂💔","- বন্ধুর সাথে ছেকা খাওয়া গান শুনতে শুনতে-🤧 -এখন আমিও বন্ধুর 𝙴𝚇 কে অনেক 𝙼𝙸𝚂𝚂 করি-🤕🥺","-৯৯টাকায় ৯৯জিবি ৯৯বছর-☺️🐸 -অফারটি পেতে এখনই আমাকে প্রোপস করুন-🤗😂👈","-প্রিয়-🥺 -তোমাকে না পেলে আমি সত্যি-😪 -আরেকজন কে-😼 -পটাতে বাধ্য হবো-😑🤧","•-কিরে🫵 তরা নাকি  prem করস..😐🐸•আমারে একটা করাই দিলে কি হয়-🥺","- যেই আইডির মায়ায় পড়ে ভুল্লি আমারে.!🥴- তুই কি যানিস সেই আইডিটাও আমি চালাইরে.!🙂"];

    var rand = Messages[Math.floor(Math.random() * Messages.length)]

        if ((event.body.toLowerCase() == "love you bot") || (event.body.toLowerCase() == "love bot")) {
         return api.sendMessage("Hmm..Love you too baby 💋🙂:))", threadID);
       };

        if ((event.body.toLowerCase() == "good morning") || (event.body.toLowerCase() == "gm")) {
         return api.sendMessage("Hi, good morning have a nice day ❤️🙏", threadID);
       };

       if ((event.body.toLowerCase() == "dog bot") || (event.body.toLowerCase() == "dog bot")) {
         return api.sendMessage("What dog just talked bad about me, want to die😠", threadID);
       };

       if ((event.body.toLowerCase() == "bsdk") || (event.body.toLowerCase() == "mc")) {
         return api.sendMessage("Oye gaali mat de 🤬🤬", threadID);
       };

       if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "Admin kon hai")) {
         return api.sendMessage("[𝐎𝐖𝐍𝐄𝐑:☞➸⃝🐼⃝⃞⃟💙🇦yush🎸 ☜ \n░█████╗░\n██╔══██╗\n███████║\n██╔══██║\n██║░░██║\n╚═╝░░╚═╝\n░█████╗░\n██╔══██╗\n███████║\n██╔══██║\n██║░░██║\n╚═╝░░╚═╝\n██████╗░\n██╔══██╗\n██║░░██║\n██║░░██║\n██████╔╝\n╚═════╝░\n  ██╗\n  ██║\n  ██║\n  ██║\n  ██║\n  ╚═╝ \n. 𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 :- www.facebook.com/100042292561861", threadID);
       };

      if ((event.body.toLowerCase() == "new movie") || (event.body.toLowerCase() == "latest movie")) {
         return api.sendMessage("ARTICLE 370 \n https://srv5.pkpics.lol/download/0oTM5QDM4cDOwcTM:,,QORpFM0ZUQFp3N" , threadID);
       };

       if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "bye")) {
         return api.sendMessage("Okay baby,apna khyal rakhna❤", threadID);
       };

       if ((event.body.toLowerCase() == "anyone") || (event.body.toLowerCase() == "any")) {
         return api.sendMessage("Hello dear,I m here ❤", threadID);
       };

       if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🥺")) {
         return api.sendMessage("What happen dear why are u sad🙏🙂", threadID);
       };

       if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "Chup kar")) {
         return api.sendMessage("Ek thppad me nali me fek dunga🙏🙂", threadID);
       };

       if ((event.body.toLowerCase() == "malik se BAKCHODI") || (event.body.toLowerCase() == "baap se bkwas")) {
         return api.sendMessage("Sorry malik maaf kr do glti ho gyi🥺🙏", threadID);
       };

       if ((event.body.toLowerCase() == "❤️") || (event.body.toLowerCase() == "🥰")) {
         return api.sendMessage("Haaye Rabba inna pyar🙊🙊", threadID);
       };

       if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "thenga")) {
         return api.sendMessage("Oye thenga mat dikha 🙂🙏", threadID);
       };

       if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "gn")) {
         return api.sendMessage("Ok aap So jao thak gye ho hawabaazi krke🙏🙂😜", threadID);
       };

       if ((event.body.toLowerCase() == "lol bot")) {
         return api.sendMessage("Achha tum bhot legend bn rahe ho🙂🙏", threadID);
       };

       if ((event.body.toLowerCase() == "fuck you")) {
         return api.sendMessage("Teri Gawnd me fuck 🙂🙏", threadID);
       };

       if ((event.body.toLowerCase() == "Kon bnaya apko")) {
         return api.sendMessage("My creater and edit me only My Owner Ayush Shukla 😍❤️", threadID);
       };

       if ((event.body.toLowerCase() == "gd evng") || (event.body.toLowerCase() == "good evening")) {
         return api.sendMessage("Good evening dear🙂🙏", threadID);
       };

       if ((event.body.toLowerCase() == "😒")) {
         return api.sendMessage("idhar udhar kya hai re 😏😑:)", threadID);
       };

       if ((event.body.toLowerCase() == "🙄")) {
         return api.sendMessage("uper kya hai be chimpengi🙄🙄", threadID);
       };

       if ((event.body.toLowerCase() == "nice")) {
         return api.sendMessage("Oh thx sweetheart 🙊😍", threadID);
       };

       if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🙊")) {
         return api.sendMessage("oye hoye sarma gye kya😜", threadID);
       };

       if ((event.body.toLowerCase() == "sasural") || (event.body.toLowerCase() == "married")) {
         return api.sendMessage("kon married hai kon ja raha hai sasural🤔🙄", threadID);
       };

       if ((event.body.toLowerCase() == "What's the bot swearing") || (event.body.toLowerCase() == "bot cursing")) {
         return api.sendMessage("Damn you, shame on hahaha :>>, still asking", threadID);
       };

       if ((event.body.toLowerCase() == "is the bot sad")) {
         return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
       };

       if ((event.body.toLowerCase() == "does the bot love you")) {
         return api.sendMessage("Yes I love you and everyone so much", threadID);
       };

       if ((event.body.toLowerCase() == "bot goes to sleep")) {
         return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
       };

       if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
         return api.sendMessage("I'm full when I see you eat <3", threadID);
       };

       if ((event.body.toLowerCase() == "does the bot love me")) {
         return api.sendMessage("Yes <3", threadID);
       };

       if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
         return api.sendMessage("Yes <3", threadID);
       };

    if ((event.body.toLowerCase() == "oh bot")) {
     return api.sendMessage("Hurry, I have to serve other boxes :)", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "chup thak")) {
     return api.sendMessage("Amr Mukh, Amr iccha, Amr Mon. Tor ki bal,,,shala abal...ja vaag... 😒🙄", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "khana khaya?") || (event.body.toLowerCase() == "khana kha lo")) {
     return api.sendMessage("Nhi khaunga Aaj vrat hai.💖🥳", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "k") || (event.body.toLowerCase() == "k?")) {
     return api.sendMessage("K na K😕", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "guyz") || (event.body.toLowerCase() == "guys")) {
     return api.sendMessage("Don't Call Me Guys Bcz I AM Yours😊", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "wife") || (event.body.toLowerCase() == "bou")) {
     return api.sendMessage("Yes, My Husband🥰", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "Aadi") || (event.body.toLowerCase() == "adi") || (event.body.toLowerCase() == "Aadi gupta")) {
     return api.sendMessage("Kya hua Boss ko kyu bula rahe ho🙄!🌄", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "bhai") || (event.body.toLowerCase() == "bhaiya") || (event.body.toLowerCase() == "brother")) {
     return api.sendMessage("han ji sis🥺", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "pagal")) {
     return api.sendMessage("pgl tum ho mere pyar me🙂🙏", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "boy")) {
     return api.sendMessage("bbe, I Am here 😑", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "beb") || (event.body.toLowerCase() == "baby")) {
     return api.sendMessage("hm baby😚🖤", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("Lo Baby😚😘😘💋", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sona")) {
     return api.sendMessage("hmm Babe😚🖤bolo jadu tona", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "fight") || (event.body.toLowerCase() == "fyt")) {
     return api.sendMessage("Sorry, babe i m game lover ✌🏻🕊", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hii") || (event.body.toLowerCase() == "hy")) {
     return api.sendMessage("Hello, How Are You 😗", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "hello") || (event.body.toLowerCase() == "heloo")) {
     return api.sendMessage("hello jai shree ram 🙏🙂", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "who are you") || (event.body.toLowerCase() == "who r u")) {
     return api.sendMessage("I Am Aadi's, An AI Based Messenger Chatbot.", threadID, messageID);
   };

  if (event.body.indexOf("Bot") == 0 || (event.body.toLowerCase() == "bot") || (event.body.indexOf("বট") == 0)) {
    var msg = {
      body: `╭──────•◈•──────╮\n         🄰🄻🅅🄸🄱🄾🅃        \n\n 🗣️Dᴇᴀʀ, ${name}\n 💌:${rand} \n\n╰──────•◈•──────╯`
    }
    return api.sendMessage(msg, threadID, messageID);
  }
}
};