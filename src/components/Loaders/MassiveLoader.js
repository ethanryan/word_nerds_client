import React from 'react'

import { Container, Dimmer, Loader } from 'semantic-ui-react'

const MassiveLoader = (props) => {

  return(
      <Container>
        <Dimmer active inverted>
          <Loader inverted size='massive'>
            Loading...
          </Loader>
        </Dimmer>
      </Container>
  )
}

export default MassiveLoader
