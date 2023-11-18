/** @format */

//------------------------------------------------------------------
//Import all necessary sources, dependencies, libraries, other components
import React, { useState } from "react"; //Import React Component Class
import movie0 from "./images/movie0.jpg";
import movie1 from "./images/movie1.jpg";
import movie2 from "./images/movie2.jpg";
import movie3 from "./images/movie3.jpg";
import movie4 from "./images/movie4.jpg";

const images = [movie0, movie1, movie2, movie3, movie4];

function Slideshow() {
	const [currentSlide, setCurrentSlide] = useState(0);

	function handlePreviousClick() {
		if (currentSlide === images.length - 5) {
			setCurrentSlide(4);
		} else {
			setCurrentSlide(currentSlide - 1);
		}
	}

	function handleNextClick() {
		if (currentSlide === images.length - 1) {
			setCurrentSlide(0);
		} else {
			setCurrentSlide(currentSlide + 1);
		}
	}

	//Render HTML: Outputs the HTML/JSX to the DOM.
	return (
		<div style={slideShoStyle}>
			<button class="btn btn-warning" onClick={handlePreviousClick}>
				Previous
			</button>
			<img style={{ height: "400px" }} src={images[currentSlide]} alt={`Slide ${currentSlide}`} />
			<button class="btn btn-warning" onClick={handleNextClick}>
				Next
			</button>
		</div>
	);
}

//-----------------------------------------------------------------
//Define CSS variables
const slideShoStyle = {
	backgroundColor: "none",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
};

//------------------------------------------------------------------
//Export this Component
export { Slideshow };
