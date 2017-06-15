import React from 'react'

import Story from './Story'


const AllStories = (props) => {

  return(
    <div className="AllStories-black">

      <Story
        handleDeleteStory={props.handleDeleteStory}
        renderEditForm={props.renderEditForm}
        stories={props.stories}
      />
      <br></br>
      <br></br>

      <p>AllStories mounts and renders Story, which contains eachStory</p>
      <p>(it's just like StoryList, but renders where the forms are)</p>
    </div>
  )
}

export default AllStories
