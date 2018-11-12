import React from 'react';

import Quill from 'quill';


class QuillReadOnly extends React.Component {

  componentDidMount() {
    // console.log('0000000. QuillReadOnly, componentDidMount...')

    new Quill('#editor', { //NOTE: must be window.quill...
      readOnly: true,
      placeholder: "Write something awesome...",
    });

    this.setStoryContentAsHTML() //in componentDidMount, setStoryContentAsHTML...
  } //componentDidMount

  setStoryContentAsHTML() {
    console.log('in QuillReadOnly, setStoryContentAsHTML called...')
    // var htmlToInsert = "<p>here is some <strong>awesome</strong> text</p><p>mo FUCKA</p>"
    var htmlToInsert = this.props.storyContent //getting this from EditStoryForm...
    var editor = document.getElementsByClassName('ql-editor')
    // editor[0].innerHTML = `${htmlToInsert}<p><br></p>` //NOTE: using vanilla JavaScript to replace the innerHTML with our story content... and adding extra para to the end...
    editor[0].innerHTML = htmlToInsert //NOTE: using vanilla JavaScript to replace the innerHTML with our story content... and adding extra para to the end...
    //NOTE: above is same as dangerouslySetInnerHTML! it is a dangerous practice. need to make sure my html doesn't contain any malicious scripts within it, like JavaScript or PHP or whatever.
  }

  render() {
    // console.log('in QuillReadOnly, this.props is: ', this.props)
    // console.log('in QuillReadOnly render --> this.props.storyContent is: ', this.props.storyContent)
    return (
      <div>
          <div id="QuillReadOnly-container">
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

export default QuillReadOnly
