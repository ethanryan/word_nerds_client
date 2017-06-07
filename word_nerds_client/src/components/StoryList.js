import React from 'react'

const StoryList = (props) => {
  console.log('StoryList props: ', props)

  //props.storyList below === an array of story Objects from my API
  //need .content key/value within each 'story' object

  const eachStory = props.storyList.map(story => {return (
    <h1>
      <li>{story.content}</li>
    </h1>
) })

  return(
    <div className="StoryList-blue">
      <ul>{ eachStory }</ul>
      <p>each story can be clicked, which renders it in the EditStoryForm</p>
    </div>
  )

}

export default StoryList
