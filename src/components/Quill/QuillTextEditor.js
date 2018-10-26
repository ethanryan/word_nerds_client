import React from 'react';

import Quill from 'quill';


function getStoryContent() {
  var editor = document.getElementsByClassName('ql-editor') //this returns an HTMLCollection...
  let storyContent = editor[0].innerHTML
  return storyContent
}


class QuillTextEditor extends React.Component {

  componentDidMount() {
    console.log('0000000. QuillTextEditor, componentDidMount...')

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

    // window.quill = new window.Quill('#editor', { //NOTE: must be window.quill...
    let quill = new Quill('#editor', { //NOTE: must be window.quill...
      modules: {
        toolbar: toolbarOptions,
      },
      theme: 'snow',
      placeholder: "Write something awesome...",
    });

    this.setStoryContentAsHTML() //in componentDidMount, setStoryContentAsHTML...

    quill.on('text-change', () => {
      // console.log('Text change!');
      // var editor = document.getElementsByClassName('ql-editor') //this returns an HTMLCollection...
      // let storyContent = editor[0].innerHTML
      let storyContent = getStoryContent()
      // console.log('in QuillTextEditor, storyContent is: ', storyContent)
      this.props.handleStoryChange(storyContent)
    });

  } //componentDidMount

  setStoryContentAsHTML() {
    console.log('in QuillTextEditor, setStoryContentAsHTML called...')
    // var htmlToInsert = "<p>here is some <strong>awesome</strong> text</p><p>mo FUCKA</p>"
    var htmlToInsert = this.props.storyContent //getting this from EditStoryForm...
    var editor = document.getElementsByClassName('ql-editor')
    // editor[0].innerHTML = `${htmlToInsert}<p><br></p>` //NOTE: using vanilla JavaScript to replace the innerHTML with our story content... and adding extra para to the end...
    editor[0].innerHTML = htmlToInsert //NOTE: using vanilla JavaScript to replace the innerHTML with our story content... and adding extra para to the end...
    //NOTE: above is same as dangerouslySetInnerHTML! it is a dangerous practice. need to make sure my html doesn't contain any malicious scripts within it, like JavaScript or PHP or whatever.
  }

  // componentDidUpdate(prevProps) { // Typical usage (don't forget to compare props):
  //   if (this.props.userID !== prevProps.userID) {
  //     this.fetchData(this.props.userID);
  //   }
  // }

  componentWillReceiveProps(nextProps) { //need this lifecycle method to edit text in textarea
    console.warn('QuillTextEditor -> componentWillReceiveProps, nextProps is: ', nextProps)

    // this.setStoryContentAsHTML() //calling this here gives console error: "The given range isn't in document."
    //CALLING ABOVE BREAKS APP, NEED TO RESTART CHROME.....

    // this.setState({
      // input: props.story.content,
      // title: props.story.title
    // })
  }

  componentDidUpdate(prevProps) {
    if (this.props.storyContent !== prevProps.storyContent) { //NOTE: if storyContent changes, for example, from new random last sentence, updated the story in the Quill editor...
      console.warn("PROPS ARE DIFFERENT!!!!")
      // this.setStoryContentAsHTML() //calling this here gives console error: "The given range isn't in document."
    }
  }

  render() {
    // console.log('in QuillTextEditor, this.props is: ', this.props)
    console.log('in QuillTextEditor render --> this.props.storyContent is: ', this.props.storyContent)
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
