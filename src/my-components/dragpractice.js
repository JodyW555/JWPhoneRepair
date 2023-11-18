/** @format */
import React from "react";
import { useDrag, useDrop, DragPreviewImage } from "react-dnd";

function DraggableItem({ item, index, moveItem }) {
	const [{ isDragging }, drag, preview] = useDrag({
		item: { type: "item", index },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});

	const [, drop] = useDrop({
		accept: "item",
		hover(item, monitor) {
			if (item.index !== index) {
				moveItem(item.index, index);
			}
		},
	});

	return (
		<>
			<DragPreviewImage connect={preview} src={item.image} />
			<div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
				{item.name}
			</div>
		</>
	);
}

function DroppableArea({ items, moveItem }) {
	const [, drop] = useDrop({
		accept: "item",
	});

	return (
		<div ref={drop}>
			{items.map((item, index) => (
				<DraggableItem key={item.id} item={item} index={index} moveItem={moveItem} />
			))}
		</div>
	);
}
