import React from 'react'

import { Link } from 'react-router-dom'

import { Button } from 'semantic-ui-react'

const CreatePage = (props) => {

  return(
    <div>

      <h1>Create Page!!!</h1>

      <Link
        to={`/stories/create`}>
        <Button primary fluid>
          Create A Short Story
        </Button>
      </Link>

    </div>
  )
}

export default CreatePage
