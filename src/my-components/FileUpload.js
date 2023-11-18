/** @format */

import React, { useState } from "react";

function FileUpload() {
	const [file, setFile] = useState(null);

	function handleFileChange(event) {
		setFile(event.target.files[0]);
	}

	function handleUploadClick() {
		const formData = new FormData();
		formData.append("file", file);

		fetch("/upload", {
			method: "POST",
			body: formData,
		})
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((error) => console.error(error));
	}

	return (
		<div>
			<h3>Please upload a photo of your damaged phone</h3>
			<input type="file" onChange={handleFileChange} />
			<button onClick={handleUploadClick}>Upload</button>
		</div>
	);
}

export { FileUpload };
