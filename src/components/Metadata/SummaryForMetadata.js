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

            <h2>
              Total stories: {props.stories.length}
            </h2>

            <h2>
              Total users: {props.users.length}
            </h2>

            <h2>
              Total plots: {props.plots.length}
            </h2>
          </Card.Content>
        </Card>
      </div>

    </div>
  )

}

export default SummaryForMetadata
