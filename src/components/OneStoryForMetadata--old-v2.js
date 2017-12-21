import React from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

const OneStoryForMetadata = (props) => {

  const eachStoryForMetadata = props.stories.map( (story) =>

      <Table.Row key={story.id ? story.id : "story.id"}>

        <Table.Cell>{story.id ? story.id : "story.id"}</Table.Cell>

        <Table.Cell>{story.title ? story.title : "story.title"}</Table.Cell>

        <Table.Cell>{story.user ? story.user.name : "story creator"}</Table.Cell>

        <Table.Cell>{story.content ? story.content.split(' ').length : 0}</Table.Cell>

        <Table.Cell>{story.content ? story.genres.map((genre) => {return (genre.name) }).join(', ') : 0}</Table.Cell>

        <Table.Cell>{story.content ? story.plots.map((plot) => {
          let plotTitle = plot.title
          return (plotTitle
            .replace("Halloween", "🔪")
            .replace("Alien", "👽")
            .replace("The Matrix", "⏰")
            .replace("Star Wars", "🚀")
            .replace("E.T.", "📞")
            .replace("Terminator", "🤖")
            .replace("Die Hard", "🔫")
            .replace("Thelma and Louise", "🚘")
            .replace("Home Alone", "😂")
            .replace("Beauty and the Beast", "🦊")
            .replace("La Strada", "💔")
            .replace("The Piano", "💙")
          )
        }).join('   ') : 0}</Table.Cell>

        <Table.Cell>{story.created_at ? new Date(story.created_at).toLocaleString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
          timeZoneName: 'short'
        }) : "story.created"}</Table.Cell>

        <Table.Cell>{story.updated_at ? new Date(story.updated_at).toLocaleString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
          timeZoneName: 'short'
        }) : "story.updated"}</Table.Cell>

      </Table.Row>
)



return(
  <div>
    <Table celled >

    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Story ID</Table.HeaderCell>
        <Table.HeaderCell>Title</Table.HeaderCell>
        <Table.HeaderCell>Creator</Table.HeaderCell>
        <Table.HeaderCell>Word Count</Table.HeaderCell>
        <Table.HeaderCell>Genres</Table.HeaderCell>
        <Table.HeaderCell>Plots</Table.HeaderCell>
        <Table.HeaderCell>Created</Table.HeaderCell>
        <Table.HeaderCell>Updated</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    { eachStoryForMetadata.reverse() }
  </Table.Body>

</Table>
    <p className="center">Word Nerds Metadata</p>
  </div>
)

}

export default OneStoryForMetadata
