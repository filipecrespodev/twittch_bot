const tmi = require('tmi.js');

const client = new tmi.Client({
	options: { debug: true },
	connection: {
		secure: true,
		reconnect: true
	},
	identity: {
		username: '<USERNAME>',
		password: 'oauth:<PASS>'
	},
	channels: ['<CHANEL']
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	console.log(tags, channel, message);
	if(self) return;
	finalMessagemessage = message.toLowerCase().trim()

	if(finalMessagemessage === '!hello' || finalMessagemessage === '!oi') {
		client.say(channel, `Bem vindo @${tags.username}!`);
	}
});

client.on("subscription", function (channel, username, methods ) {
	// client.say(channel, username + " Has subscribed PogChamp " )
});

client.on("resub", function (channel, username, months, message, userstate, methods) {
	// client.say(channel, username + " Has subscribed for " + months + " months in a row PogChamp " )
});


client.on("raid", function (channel, username, viewers) {

});

client.on("connected", function(address, port){
	client.action("imhalfwaydecent", "Hello Half!")
});