import React from 'react'

import OneStory from './OneStory'

import { Card, Loader, Segment } from 'semantic-ui-react'

const AllStories = (props) => {

  ///add scrollToTop function here
  const filteredStories = props.stories.filter(story => story.user_id === props.user_id)

  // console.log('hello from AllStories')
  return(

    <div key={props.id} className="AllStories-green">

      <div className="AllStories-header">
        <Card fluid>
          <Card.Content>
          <h1 className="center">{props.username}'s stories</h1>

          {filteredStories.length === 0 ?
            <Segment>
              <Loader active inline='centered' />
            </Segment>
            : <h3 className="center">total stories: {filteredStories.length}</h3>}

        </Card.Content>
        </Card>
      </div>

      <OneStory
        handleUpdateStory={props.handleUpdateStory}
        handleDeleteStory={props.handleDeleteStory}
        userStories={filteredStories} //passing OneStory userStories, not all stories in database...
        user_id={props.user_id}
        storyShowIsModal={props.storyShowIsModal}
        openModal={props.openModal}
        closeModal={props.closeModal}
        storyShowModalIsEditable={props.storyShowModalIsEditable}
        toggleStoryShowModalToEditable={props.toggleStoryShowModalToEditable}
        activeModalStoryId={props.activeModalStoryId}
        indexOfStoryModal={props.indexOfStoryModal}
      />

      {/* <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button> */}

      {/* <p className="center">AllStories mounts and renders OneStory, which contains eachStory</p> */}
    </div>
  )
}

export default AllStories
