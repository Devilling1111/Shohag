module.exports = {
	config: {
		name: "goiadmin",
		author: "cliff",
		role: 2,
		shortDescription: " ",
		longDescription: "",
		category: "BOT",
		guide: "{pn}"
	},

onChat: function({ api, event }) {
	if (event.senderID !== "61551846081032") {
		var aid = ["61551846081032"];
		for (const id of aid) {
		if ( Object.keys(event.mentions) == id) {
			var msg = ["বস আলভী চৌধুরী কই থুমি থুমারে এক বলদে ডাকে😁🤣", "বস আলভী চৌধুরী কে আর একবার মেনশন দিলে তোমারে থাবরাইয়া মুতের কালার চেঞ্জ কইরা ফালামু 🤭🙈🤖", "যা বলার আমাকে বলো য়ামাল বস আলভী চৌধুরী এখন বিজি আছে🥰","য়ামাল বস আলভী চৌধুরী কে এতো ডাকো কেন😒 ভালো টালো বাসো নাকি🤭","য়ামাল বস আলভী চৌধুরী কে আর একবার মেনশন দিলে তোমার নাকের মধ্যে ঘুষি মারমু😡","বস আলভী চৌধুরী এখন অফিস এর কাজে বিজি আছে যা বলার আমাকে বলো"];
			return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
		}
		}}
},
onStart: async function({}) {
	}
};