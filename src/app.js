import tmi from 'tmi.js'
import { CHANNEL_NAME, OAUTH_TOKEN, BOT_USERNAME } from './constants'

const options = {
	options: { debug: true },
	connection: {
		secure: true,
		reconnect: true
	},
	identity: {
		username: BOT_USERNAME,
		password: OAUTH_TOKEN
	},
	channels: CHANNEL_NAME
};

const client = new tmi.Client(options);
client.connect();

client.on('message', (channel, userState, message, self) => {
	// console.log(userState, channel, message);
});
