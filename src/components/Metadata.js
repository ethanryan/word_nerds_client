import React from 'react'

import OneStoryForMetadata from './OneStoryForMetadata'
import SummaryForMetadata from './SummaryForMetadata'


const Metadata = (props) => {

  console.log('hello from Metadata')
  return(

    <div key={props.id} className="AllStoriesForMetadata-purple">

      <SummaryForMetadata
        stories={props.stories}
        users={props.users}
      />

      <OneStoryForMetadata
        stories={props.stories}
      />

    </div>
  )
}

export default Metadata
