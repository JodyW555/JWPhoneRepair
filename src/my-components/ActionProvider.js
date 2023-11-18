/** @format */

// ActionProvider starter code
class ActionProvider {
	constructor(createChatBotMessage, setStateFunc) {
		this.createChatBotMessage = createChatBotMessage;
		this.setState = setStateFunc;
	}

	greet() {
		const greetingMessage = this.createChatBotMessage("Please state your purpose...");
		this.updateChatbotState(greetingMessage);
	}

	updateChatbotState(message) {
		this.setState((prevState) => ({
			...prevState,
			message: { ...prevState.messages, message },
		}));
	}
}

export default ActionProvider;
