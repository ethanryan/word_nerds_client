import React from 'react'

const StoryList = (props) => {
  console.log('StoryList props: ', props)

  //props.storyList below === an array of story Objects from my API
  //need .content key/value within each 'story' object

  //adding index below so i stop getting warning message in console.
  const eachStory = props.storyList.map( (story, index) =>
      <li key={index}>
        <h1>
          {story.content}
        </h1>
      </li>
  )


  return(
    <div className="StoryList-blue">
      <ul>{ eachStory }</ul>
      <p>each story can be clicked, which renders it in the EditStoryForm</p>
    </div>
  )

}

export default StoryList
