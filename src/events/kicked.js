const Event = require('../library/Structures/Event');

class Kicked extends Event {

	run(reason, authenticated) {
		const msg = JSON.parse(reason);
		let message = msg.text;
		if (msg.extra) {
			msg.extra.forEach((obj) => {
				message += obj.text.replace(/[\n\t\r]/g, '');
			});
		}
		console.log(`[${this.client.USERNAME}] I got kicked from the server. (LoggedIn: ${authenticated})\nReason: ${message}`);

		if (!authenticated) return;
		// todo: remove todo from eslint
		// todo: implement bandwidth api
		// if (!message.includes('Restarting')) sendMessage(`[Kicked] (${client.username}): ${message}`);
	}

}

module.exports = Kicked;
