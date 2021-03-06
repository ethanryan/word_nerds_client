import React, { Component } from 'react'

import replacePlotTitleWithEmoji from '../../helpers/replacePlotTitleWithEmoji'
import getRandomSentence from '../../helpers/getRandomSentence'

import StoryShowSummary from '../StoryShow/StoryShowSummary'

import { Header, Form, Divider, Button, Loader, Segment } from 'semantic-ui-react'

import QuillTextEditor from '../Quill/QuillTextEditor'


class EditStoryForm extends Component {

  constructor(props) {
    super()

    this.state = {
      input: props.story.content,
      title: props.story.title,
      // image: '' //adding this
    }
    this.handleStoryChange = this.handleStoryChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleEditStoryFormSubmit = this.handleEditStoryFormSubmit.bind(this);
  }

  componentWillReceiveProps(props) { //need this lifecycle method to edit text in textarea
    this.setState({
      input: props.story.content,
      title: props.story.title
    })
  }

  handleTitleChange(event) {
    const title = event.target.value
    this.setState({
      title: title
    })
  }

  // handleStoryChange(event) {
  //   const story = event.target.value
  //   this.setState({
  //     input: story
  //   })
  // }

  handleStoryChange(updatedStory) {
    // console.log("EditStoryForm, handleStoryChange called! ---> updatedStory is: ", updatedStory)
    const story = updatedStory
    this.setState({
      input: story
    })
  }

  handleEditStoryFormSubmit(event) {
    console.log('handleEditStoryFormSubmit called, event is: ', event)
    event.preventDefault()
    const updatedStory = {
      input: this.state.input,
      title: this.state.title,
      id: this.props.story.id
    }
    console.log('updatedStory is: ', updatedStory)
    this.props.handleUpdateStory(updatedStory)
    this.setState({input: ''})
  }

  handleRandomFirstSentence() {
    console.log('in EditStoryForm, handleRandomFirstSentence called.....')
    let randomSentence = getRandomSentence()
    console.warn('randomSentence is: ', randomSentence)
    // this.setState({input: randomSentence + " " + this.state.input}) //preserves changes, but adds new sentence to beginning
    this.setState({input: `<p>${randomSentence}</p>${this.props.story.content}`}) //replaces first sentence, but renders original story, without user changes
  }

  handleRandomLastSentence() {
    console.log('in EditStoryForm, handleRandomLastSentence called.....')
    let randomSentence = getRandomSentence()
    console.warn('randomSentence is: ', randomSentence)
    // this.setState({input: this.props.story.content + " " + randomSentence})
    this.setState({input: `${this.props.story.content}<p>${randomSentence}</p>`})
  }


  render() {
    // console.log('EditStoryForm this.props: ', this.props);
    // console.log('from EditStoryForm, this.state.input: ', this.state.input);
    // debugger

    let wordCount = (this.state.input ? this.state.input.split(' ').length : 0)

    // let paragraphs = (this.state.input ? this.state.input.split('-----').join('\n\n') : "paragraphs will go here")
    let storyContent = (this.state.input ? this.state.input : "storyContent will go here")

    let genres = (this.props.story.story_genre_names ? this.props.story.story_genre_names : 0)

    let plots = (this.props.story.story_plot_titles ? this.props.story.story_plot_titles.split(", ").map((plotTitle) => {
      return (
        replacePlotTitleWithEmoji(plotTitle)
      )
    }).join('   ') : 0)

    return(
      <div>
        {
          (this.props.story.id) ?
          <Form id="EditStoryForm" onSubmit={this.handleEditStoryFormSubmit}>
            <h3>Edit Story</h3>

            <Header as='h1'>
              <span>{this.state.title}</span>
            </Header>

            <StoryShowSummary
              story_id={this.props.story.id}
              // storyCreator={this.props.story.user.name}
              storyCreator={this.props.story.user_name}
              wordCount={wordCount}
              genres={genres}
              plots={plots}
            />

            <Divider section />

            <Form.Field label='Title'
              placeholder="title here"
              control='input'
              width={16}
              value={this.state.title} //value of input field is state.title, coming from componentWillReceiveProps
              onChange={this.handleTitleChange}
            />

            <Form.Field label='Edit Story'
              // className="EditStoryForm-linebreaks" //NOTE: what is this???
              // placeholder="this is where the story content goes for editing"
              // control='textarea' rows='35'
              // width={16}
              // value={paragraphs}
              // onChange={this.handleStoryChange}
            />

            <QuillTextEditor
              storyContent={storyContent}
              handleStoryChange={this.handleStoryChange}
            />

            <div>
              <Button.Group>
                <Form.Button
                  content='Save Story'
                  type="submit"
                  primary compact
                />

              {
                // <Form.Button color='purple'
                //   compact
                //   type="button"
                //   content='First Line'
                //   onClick={() => {this.handleRandomFirstSentence()}}
                // />
                //
                // <Form.Button color='orange'
                //   compact
                //   type="button"
                //   content='Last Line'
                //   onClick={() => {this.handleRandomLastSentence()}}
                // />
              }
              
              </Button.Group>

              {
                (this.props.editStoryFormIsModal) ?
                <Button
                  basic
                  floated='right'
                  onClick={() => this.props.closeModal()}>
                  Cancel
                </Button>
                :
                null
              }
            </div>

          </Form>
          :
          <Segment>
            <Loader active inline='centered' />
          </Segment>
        }
      </div>
    )
  }
}

EditStoryForm.defaultProps = {
  story: 'EditStory content here', //need this so props aren't null
  title: 'EditStory title here'
}

export default EditStoryForm
