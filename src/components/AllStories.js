import React from 'react'

import OneStory from './OneStory'

import { Loader, Segment } from 'semantic-ui-react'

const AllStories = (props) => {

  ///add scrollToTop function here
  const filteredStories = props.stories.filter(story => story.user_id === props.user_id)

  // console.log('hello from AllStories')
  return(

    <div key={props.id} className="AllStories-green">

      <h1 className="center">{props.username}'s stories</h1>
      <h3 className="center">stories by: {props.username}</h3>
      <h3 className="center">total stories: {filteredStories.length === 0 ?
        <Segment>
          <Loader active inline='centered' />
        </Segment>
        : filteredStories.length}
      </h3>

        <OneStory
          handleUpdateStory={props.handleUpdateStory}
          handleDeleteStory={props.handleDeleteStory}
          stories={props.stories}
          user_id={props.user_id}
          storyShowIsModal={props.storyShowIsModal}
          openModal={props.openModal}
          closeModal={props.closeModal}
          storyShowModalIsEditable={props.storyShowModalIsEditable}
          toggleStoryShowModalToEditable={props.toggleStoryShowModalToEditable}
        />

        {/* <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button> */}


        <p>AllStories mounts and renders OneStory, which contains eachStory</p>
      </div>
    )
  }

  export default AllStories
