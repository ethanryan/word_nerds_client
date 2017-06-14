import React from 'react'

import Story from './Story'


const StoryList = (props) => {

  return(
    <div className="StoryList-blue">

      <Story
        // passing StoryList props down to Story
        handleDeleteStory={props.handleDeleteStory}

        renderEditForm={props.renderEditForm}

        stories={props.stories}

        heroName={props.heroName}

      />
      <br></br>
      <br></br>

      <p>StoryList mounts and renders Story, which contains eachStory</p>
    </div>
  )
}

export default StoryList
