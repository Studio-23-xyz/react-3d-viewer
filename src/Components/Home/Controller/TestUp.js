import React, { useRef } from 'react';
import axios from 'axios';
import useFileUpload from 'react-use-file-upload';
const TestUp = () => {
	const {
		files,
		fileNames,
		fileTypes,
		totalSize,
		totalSizeInBytes,
		handleDragDropEvent,
		clearAllFiles,
		createFormData,
		setFiles,
		removeFile,
	} = useFileUpload();

	const inputRef = useRef();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = createFormData();
		console.log(
			files,
			fileNames,
			fileTypes,
			totalSize,
			totalSizeInBytes,
			handleDragDropEvent,
			clearAllFiles,
			createFormData,
			setFiles,
			removeFile
		);
		// try {
		// 	axios.post('https://some-api.com', formData, {
		// 		'content-type': 'multipart/form-data',
		// 	});
		// } catch (error) {
		// 	console.error('Failed to submit files.');
		// }
	};
	return (
		<div css={CSS}>
			<h1>Upload Files</h1>

			<p>
				Please use the form to your right to upload any file(s) of your
				choosing.
			</p>

			<div className="form-container">
				{/* Display the files to be uploaded */}
				<div>
					<ul>
						{fileNames.map((name) => (
							<li key={name}>
								<span>{name}</span>

								<span onClick={() => removeFile(name)}>
									<i className="fa fa-times" />
								</span>
							</li>
						))}
					</ul>

					{files.length > 0 && (
						<ul>
							<li>File types found: {fileTypes.join(', ')}</li>
							<li>Total Size: {totalSize}</li>
							<li>Total Bytes: {totalSizeInBytes}</li>

							<li className="clear-all">
								<button onClick={() => clearAllFiles()}>Clear All</button>
							</li>
						</ul>
					)}
				</div>

				{/* Provide a drop zone and an alternative button inside it to upload files. */}
				<div
					onDragEnter={handleDragDropEvent}
					onDragOver={handleDragDropEvent}
					onDrop={(e) => {
						handleDragDropEvent(e);
						setFiles(e, 'a');
					}}
				>
					<p>Drag and drop files here</p>

					<button onClick={() => inputRef.current.click()}>
						Or select files to upload
					</button>

					{/* Hide the crappy looking default HTML input */}
					<input
						ref={inputRef}
						type="file"
						multiple
						style={{ display: 'none' }}
						onChange={(e) => setFiles(e, 'a')}
					/>
				</div>
			</div>

			<div className="submit">
				<button onClick={handleSubmit}>Submit</button>
			</div>
		</div>
	);
};
export default TestUp;
