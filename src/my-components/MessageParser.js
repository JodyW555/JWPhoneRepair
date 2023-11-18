/** @format */

// MessageParser starter code
class MessageParser {
	constructor(actionProvider, state) {
		this.actionProvider = actionProvider;
	}
	parse(message) {
		const lowerCaseMessage = message.toLowerCase();
		if (lowerCaseMessage.includes("hello")) {
			this.actionProvider.greet();
		}
	}
}

export default MessageParser;
