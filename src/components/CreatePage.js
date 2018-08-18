import React from 'react'

import { Link } from 'react-router-dom'

import { Container, Card, Divider } from 'semantic-ui-react'


const CreatePage = (props) => {

  return(
    <div className="CreatePage-style">

      <Container>

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

        <Link
          to={`/stories/create`}>
          <button id="create-story-button">
            Create A Short Story
          </button>
        </Link>

        <Divider />

        <p>
          More story options coming soon!
        </p>

      </Container>

    </div>
  )
}

export default CreatePage
