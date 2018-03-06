import React from 'react'
import { Card } from 'semantic-ui-react'

const SummaryForMetadata = (props) => {

  return(
    <div>

      <div className="summaryForMetadata center">
        <Card fluid >
          <Card.Header>
            <h3 className="summaryForMetadata-header">
              WordNerds Metadata
            </h3>
          </Card.Header>

          <Card.Content>
            <h4>
              Database Information
            </h4>

            <p>
              Total stories: <b>{props.stories.length}</b>
            </p>

            <p>
              Total users: <b>{props.users.length}</b>
            </p>

            <p>
              Total plots: <b>{props.plots.length}</b>
            </p>
          </Card.Content>
        </Card>
      </div>

    </div>
  )

}

export default SummaryForMetadata
