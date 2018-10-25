import React from 'react';

class QuillTextEditor extends React.Component {

  componentDidMount() {

    var toolbarOptions = [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],        // custom dropdown
      [{ 'size': ['small', false, 'large', 'huge'] }],
      [{ 'font': [] }],
      ['bold', 'italic', 'underline', 'strike', 'link'],
      [{ 'color': [] }, { 'background': [] }],          // toggled buttons
      ['blockquote', 'code-block'],
      ['video', 'image'],
      [{ 'align': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
      ['clean']                                         // remove formatting button
    ];

    window.quill = new window.Quill('#editor', { //NOTE: must be window.quill...
      modules: {
        toolbar: toolbarOptions,
      },
      theme: 'snow',
      placeholder: "Write something awesome..."
    });
  } //componentDidMount

  render() {
    return (
      <div>
          <div id="QuillTextEditor-container">
            {/* <!-- Create the editor container --> */}
            <div id="editor">
              <p>Hello World!</p>
              <p>Some initial <strong>bold</strong> text</p>
              <p></p>
            </div>
          </div>
      </div>
    )
  } //render
} //class

export default QuillTextEditor
