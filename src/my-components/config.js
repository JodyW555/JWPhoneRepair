/** @format */

// Config starter code
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

//import { LearningOptions } from "./my-components/LearningOptions/LearningOptions";

const config = {
	botName: "FAQBot",
	initialMessages: [createChatBotMessage(`Hello do you have a question?`)],
	customStyles: {
		botMessageBox: {
			backgroundColor: "wheat",
		},
		chatButton: {
			backgroundColor: "CadetBlue",
		},
	},
};

export default config;

{
	/*NOT WORKING 
	widget: "learningOptions",
		}),
	],

	widgets: [{ widgetName: "learningOptions", widgetFunc: (props) => <LearningOptions {...props} /> }],
};*/
}
