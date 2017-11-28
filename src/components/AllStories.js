import React from 'react'

import OneStory from './OneStory'


const AllStories = (props) => {

  ///add scrollToTop function here

  // console.log('hello from AllStories')
  return(

    <div key={props.id} className="AllStories-green">

      <OneStory
        handleDeleteStory={props.handleDeleteStory}
        stories={props.stories}
      />

      {/* <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button> */}


      <p>AllStories mounts and renders Story, which contains eachStory</p>
    </div>
  )
}

export default AllStories
