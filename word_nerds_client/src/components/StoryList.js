import React from 'react'

const StoryList = (props) => {
  console.log('StoryList props: ', props)

  const eachStory = props.storyList.map(story => {return (<li>{story}</li>) })

  return(
    <div>
      <ul>{ eachStory }</ul>
      <p>each story can be clicked, which renders it in the EditStoryForm</p>
    </div>

  )

}

export default StoryList
