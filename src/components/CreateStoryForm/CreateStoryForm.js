import React from 'react'

import CreateStoryFormNotModal from './CreateStoryFormNotModal'

// import CreateStoryFormModal from './CreateStoryFormModal'
// import CreateMiniStoryFormModal from './CreateMiniStoryFormModal'

// import { Card, Segment } from 'semantic-ui-react'


const CreateStoryForm = (props) => {

  return(
    <div className="center not-a-modal-wrapper">

        {/* <div className="modal-trigger-description">
          <Card fluid>
            <Card.Content>
              <Card.Header>
                  <b>Create Your Story</b>
              </Card.Header>
              <Card.Description>
                <ul className="modal-trigger-description-list">
                  <li>1. Click a button below.</li>
                  <li>2. Choose a genre.</li>
                  <li>3. Give your characters names and genders.</li>
                  <li>4. Click the 'Submit' button.</li>
                  <li>5. Read, edit, and enjoy your story!</li>
                </ul>
            </Card.Description>
            </Card.Content>
          </Card>
        </div> */}


        {/* <div className="modal-trigger">
          <Card fluid>
            <Card.Content>
              <CreateMiniStoryFormModal
                handleSubmit={props.handleSubmit}
                handleClearForm={props.handleClearForm}
                user_id={props.user_id}
                genreSelection={props.genreSelection}
                plots={props.plots}
                handleGenreChange={props.handleGenreChange}
                characterProps={props.characterProps}
                handleHeroNameChange={props.handleHeroNameChange}
                handleShadowNameChange={props.handleShadowNameChange}
                handleFriendNameChange={props.handleFriendNameChange}
                handleLoverNameChange={props.handleLoverNameChange}
                handleMentorNameChange={props.handleMentorNameChange}
                handleTricksterNameChange={props.handleTricksterNameChange}
                handleHeroGenderChange={props.handleHeroGenderChange}
                handleShadowGenderChange={props.handleShadowGenderChange}
                handleFriendGenderChange={props.handleFriendGenderChange}
                handleLoverGenderChange={props.handleLoverGenderChange}
                handleMentorGenderChange={props.handleMentorGenderChange}
                handleTricksterGenderChange={props.handleTricksterGenderChange}
              />

              <Segment>Create a 5 sentence mini story.</Segment>
            </Card.Content>
          </Card>
        </div> */}

        <div className="modal-trigger">
          {/* <Card fluid> */}
            {/* <Card.Content> */}
              <CreateStoryFormNotModal
                scrollToTop={props.scrollToTop}
                handleSubmit={props.handleSubmit}
                handleClearForm={props.handleClearForm}
                user_id={props.user_id}
                genreSelection={props.genreSelection}
                plots={props.plots}
                handleGenreChange={props.handleGenreChange}
                //below will be passed down to CreateStoryFormCreateCharacters:
                characterProps={props.characterProps}
                handleCharacterNameChange={props.handleCharacterNameChange}
                handleCharacterGenderChange={props.handleCharacterGenderChange}
              />
              {/* above will render trigger to button and modal inside trigger... */}

              {/* <Segment>Create a 500-word short story.</Segment> */}
            {/* </Card.Content> */}
          {/* </Card> */}
        </div>

    </div>
  )
}

export default CreateStoryForm
