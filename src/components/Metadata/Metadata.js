import React from 'react'

import OneStoryForMetadata from './OneStoryForMetadata'
import SummaryForMetadata from './SummaryForMetadata'

import { Button } from 'semantic-ui-react'

const Metadata = (props) => {

  console.log('hello from Metadata')
  return(

    <div key={props.id} className="AllStoriesForMetadata-purple">

      <SummaryForMetadata
        stories={props.stories}
        plots={props.plots}
        users={props.users}
      />

      <OneStoryForMetadata
        stories={props.stories}
      />

      <Button
        primary
        onClick={props.scrollToTop}
        >Scroll To Top
      </Button>


    </div>
  )
}

export default Metadata
