import React from 'react'

import OneStoryForMetadata from './OneStoryForMetadata'
import SummaryForMetadata from './SummaryForMetadata'

import scrollToTop from '../../helpers/scrollToTop'

import { Button } from 'semantic-ui-react'

const Metadata = (props) => {

  console.log('hello from Metadata')
  return(

    <div key={props.id} className="AllStoriesForMetadata-purple">

      <SummaryForMetadata
        stories={props.stories}
        plots={props.plots}
        userCount={props.userCount}
      />

      <OneStoryForMetadata
        stories={props.stories}
      />

      <Button primary
        onClick={scrollToTop}>
        Scroll To Top
      </Button>

    </div>
  )
}

export default Metadata
