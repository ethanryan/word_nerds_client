import React from 'react'

import OneStory from './OneStory'

const AllStories = (props) => {

  return(
    <div className="AllStories-green">

      <OneStory
        handleDeleteStory={props.handleDeleteStory}
        stories={props.stories}
      />
      <br></br>
      <br></br>

      <p>AllStories mounts and renders Story, which contains eachStory</p>
    </div>
  )
}

export default AllStories
