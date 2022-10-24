import React from 'react';
import {CKEditor} from "ckeditor4-react";
import {useEffect, useRef} from "react";

// @ts-ignore
const MyCKEditor = ({ onChange, editorLoaded, name, value }) => {

	const editorRef = useRef();
	// @ts-ignore
	const { CKEditor, ClassicEditor } = editorRef.current || {}

	useEffect(() => {
		// @ts-ignore
		editorRef.current = {
			CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
			ClassicEditor: require("@ckeditor/ckeditor5-build-classic")
		};
	}, []);

	return (
		<>
			{editorLoaded ? (
				<CKEditor
					type=""
					name={name}
					editor={ClassicEditor}
					data={value}
					onChange={(event: any, editor: { getData: () => any; }) => {
						const data = editor.getData();
						onChange(data);
					}}
				/>
			) : (
				<div>Editor loading</div>
			)}
		</>

	);
};

export default MyCKEditor;