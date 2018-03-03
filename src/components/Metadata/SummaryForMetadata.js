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
            <h2>
              Total stories in database: {props.stories.length}
            </h2>
          </Card.Content>

          <Card.Content>
            <h2>
              Total users in database: {props.users.length}
            </h2>
          </Card.Content>

          <Card.Content>
            <h2>
              Total plots in database: {props.plots.length}
            </h2>
          </Card.Content>
        </Card>
      </div>

    </div>
  )

}

export default SummaryForMetadata
