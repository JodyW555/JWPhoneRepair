/** @format */

//Import all dependencies, other Components
import { useState } from "react";
import { Slideshow } from "./Slideshow";
import { Dragndrop } from "./Dragndrop";
import ChatBot from "react-chatbot-kit";
import { FileUpload } from "./FileUpload";

import "./App.css";

import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import config from "./config";

{
	/* 
import Demo4 from "./Demo4";
import Demo5 from "./Demo5";*/
}

//Function Component
function AdvancedJS() {
	//State
	const [clickedButton, setClickedButton] = useState(0);
	const toggleDemo = (index) => {
		setClickedButton(index);
	};

	//Component UI: HTML Rendering
	return (
		<>
			<h1>Advanced JS Page</h1>
			<div class="m-2" id="Authenticity">
				<h3>Statement of authenticity</h3>
				<p>I confirm that:</p>
				<ul>
					<li>This is an original assessment and is entirely my own work.</li>
					<li>
						It contains no material previously published or written by another person or myself except where
						due acknowledgement is made in the text.
					</li>
					<li>
						No material which to a substantial extent, has been submitted for any other academic course, is
						included without acknowledgement
					</li>
				</ul>
			</div>
			<div style={{ minHeight: "60vh" }}>
				{/*BUTTONS AND DEMOS*/}
				<div class="row mt-2 p-0">
					{/*Column 1 */}
					<div class="col-12 col-md-2 bg-white ">
						<div class="row">
							<button class="col-6 col-md-12 btn btn-info mb-1" onClick={() => toggleDemo(1)}>
								Slideshow{" "}
							</button>
							<button class="col-6 col-md-12 btn btn-info mb-1" onClick={() => toggleDemo(2)}>
								Drag and Drop{" "}
							</button>
							<button class="col-6 col-md-12 btn btn-info mb-1" onClick={() => toggleDemo(3)}>
								ChatBot{" "}
							</button>
							<button class="col-6 col-md-12 btn btn-info mb-1" onClick={() => toggleDemo(4)}>
								SVG Map{" "}
							</button>
							<button class="col-6 col-md-12 btn btn-info mb-1" onClick={() => toggleDemo(5)}>
								File Upload{" "}
							</button>
						</div>
					</div>
					{/*Column 2*/}
					<div class="col-12 col-md-10" style={{ backgroundColor: "PeachPuff" }}>
						<div class="row" style={{ minHeight: "50vh" }}>
							<div class="col-12" style={{ display: clickedButton === 1 ? "block" : "none" }}>
								<Slideshow />
								{/*Demo 1 */}
							</div>
							<div class="col-12" style={{ display: clickedButton === 2 ? "block" : "none" }}>
								<Dragndrop />
								{/*<Demo2 />*/}
							</div>
							<div class="col-12" style={{ display: clickedButton === 3 ? "block" : "none" }}>
								<ChatBot
									height="50"
									config={config}
									actionProvider={ActionProvider}
									messageParser={MessageParser}
								/>
								{/*<Demo3 />*/}
							</div>
							<div class="col-12" style={{ display: clickedButton === 4 ? "block" : "none" }}>
								<img src="./images/nz.svg" alt="NZ Map" />
								{/*<Demo4 />*/}
							</div>
							{/*Demo 4 */}
							<div class="col-12" style={{ display: clickedButton === 5 ? "block" : "none" }}>
								<FileUpload />
								{/*<Demo5 />*/}
							</div>
							{/*Demo 5 */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default AdvancedJS;
