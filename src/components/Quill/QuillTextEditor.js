import React from 'react';

class QuillTextEditor extends React.Component {

  componentDidMount() {
    console.log('QuillTextEditor, componentDidMount...')

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
      placeholder: "Write something awesome...",
    });

    // var htmlToInsert = "<p>here is some <strong>awesome</strong> text</p><p>mo FUCKA</p>"
    var htmlToInsert = this.props.storyContent //getting this from EditStoryForm...
    var editor = document.getElementsByClassName('ql-editor')
    editor[0].innerHTML = htmlToInsert //NOTE: using vanilla JavaScript to replace the innerHTML with our story content...
    //NOTE: above is same as dangerouslySetInnerHTML! it is a dangerous practice. need to make sure my html doesn't contain any malicious scripts within it, like JavaScript or PHP or whatever.

    window.quill.on('text-change', () => {
      // console.log('Text change!');
      var editor = document.getElementsByClassName('ql-editor')
      let storyContent = editor[0].innerHTML
      console.log('storyContent is: ', storyContent)

      this.props.handleStoryChange(storyContent)
    });

  } //componentDidMount

  // componentDidUpdate(prevProps) { // Typical usage (don't forget to compare props):
  //   if (this.props.userID !== prevProps.userID) {
  //     this.fetchData(this.props.userID);
  //   }
  // }

  componentDidUpdate(prevProps) {
    if (this.props.storyContent !== prevProps.storyContent) { //NOTE: if storyContent changes, for example, from new random last sentence, updated the story in the Quill editor...
      // console.warn("PROPS ARE DIFFERENT!!!!")
      var htmlToInsert = this.props.storyContent //getting this from EditStoryForm...
      var editor = document.getElementsByClassName('ql-editor')
      editor[0].innerHTML = htmlToInsert //NOTE: using vanilla JavaScript to replace the innerHTML with our story content...
    }
  }

  render() {
    console.log('in QuillTextEditor, this.props is: ', this.props)
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
