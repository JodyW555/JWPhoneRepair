/** @format */

import React from "react";
import { useRef, useState } from "react";
import "./App.css";
//import { useDrag, useDrop, DragPreviewImage } from "react-dnd";
import Item1 from "./images/product_0.jpg";
import Item2 from "./images/product_1.jpg";
import Item3 from "./images/product_2.jpg";
import Item4 from "./images/product_3.jpg";
import Item5 from "./images/product_4.jpg";

//It worked, you can drag and drop to change order, but no images

const Dragndrop = () => {
	const dragItem = useRef();
	const dragOverItem = useRef();
	const [list, setList] = useState([Item1, Item2, Item3, Item4, Item5]);

	const dragStart = (e, position) => {
		dragItem.current = position;
		console.log(e.target.innerHTML);
	};

	const dragEnter = (e, position) => {
		dragOverItem.current = position;
		console.log(e.target.innerHTML);
	};

	const drop = (e) => {
		const copyListItems = [...list];
		const dragItemContent = copyListItems[dragItem.current];
		copyListItems.splice(dragItem.current, 1);
		copyListItems.splice(dragOverItem.current, 0, dragItemContent);
		dragItem.current = null;
		dragOverItem.current = null;
		setList(copyListItems);
	};

	return (
		<>
			{list &&
				list.map((item, index) => (
					<div
						style={{
							backgroundColor: "thistle",
							margin: "20px 25%",
							textAlign: "center",
							fontSize: "40px",
						}}
						onDragStart={(e) => dragStart(e, index)}
						onDragEnter={(e) => dragEnter(e, index)}
						onDragEnd={drop}
						key={index}
						draggable
					>
						{item}
					</div>
				))}
		</>
	);
};

export { Dragndrop };
