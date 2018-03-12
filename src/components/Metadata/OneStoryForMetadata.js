import _ from 'lodash'

import React from 'react'

import { Table } from 'semantic-ui-react'

class OneStoryForMetadata extends React.Component {
  constructor(props) {
    super(props)
    let sortedStories = props.stories.slice(0) //clone array, cuz sort mutates
    this.state = {
      column: null,
      data: sortedStories.reverse(), //don't get this get data before rendering, so need componentWillReceiveProps...
      direction: null,
    }
  }

  componentWillReceiveProps(nextProps) {
    // console.log('OneStoryForMetadata, nextProps is: ', nextProps)
    let sortedStories = nextProps.stories.slice(0) //clone array, cuz sort mutates
    this.setState({
      data: sortedStories.reverse() //reverse here and above, cuz here replaces above...
    })
  }

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state
    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      })
      return
    }
    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }


  render() {

    const { column, data, direction } = this.state

    // const storyObjectArray = this.props.stories

    // console.log('in OneStoryForMetadata, storyObjectArray is: ', storyObjectArray)
    // console.log('in OneStoryForMetadata, this.state.data is: ', this.state.data)

    return(

      <div className="OneStory-forMetadata">
        <Table sortable celled fixed>

          <Table.Header>
            <Table.Row>
              <Table.HeaderCell sorted={column === 'title' ? direction : null} onClick={this.handleSort('title')}>
                Title
              </Table.HeaderCell>
              <Table.HeaderCell sorted={column === 'user' ? direction : null} onClick={this.handleSort('user.name')}>
                Creator
              </Table.HeaderCell>
              <Table.HeaderCell sorted={column === 'content' ? direction : null} onClick={this.handleSort('content.length')}>
                Word Count
              </Table.HeaderCell>
              <Table.HeaderCell sorted={column === 'genres' ? direction : null} onClick={this.handleSort('genres')}>
                Genres
              </Table.HeaderCell>
              <Table.HeaderCell sorted={column === 'plots' ? direction : null} onClick={this.handleSort('plots')}>
                Plots
              </Table.HeaderCell>
              <Table.HeaderCell sorted={column === 'created_at' ? direction : null} onClick={this.handleSort('created_at')}>
                Created
              </Table.HeaderCell>
              <Table.HeaderCell sorted={column === 'updated_at' ? direction : null} onClick={this.handleSort('updated_at')}>
                Update
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>


          <Table.Body>

            {_.map(data, ({ id, title, user, content, genres, plots, created_at, updated_at }) => (

              <Table.Row key={id ? id : "id"}>

                <Table.Cell>{title ? title : "title"}</Table.Cell>

                <Table.Cell>{user ? user.name : "story creator"}</Table.Cell>

                <Table.Cell>{content ? content.split(' ').length : 0}</Table.Cell>

                <Table.Cell>{content ? genres.map((genre) => {return (genre.name) }).join(', ') : 0}</Table.Cell>

                <Table.Cell>{content ? plots.map((plot) => {
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

                <Table.Cell>{created_at ? new Date(created_at).toLocaleString('en-US', {
                  // weekday: 'short',
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true,
                  timeZoneName: 'short'
                }) : "created"}</Table.Cell>

                <Table.Cell>{updated_at ? new Date(updated_at).toLocaleString('en-US', {
                  // weekday: 'short',
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true,
                  timeZoneName: 'short'
                }) : "updated"}</Table.Cell>

              </Table.Row>

            ))}
          </Table.Body>

        </Table>
        {/* <p className="center">Word Nerds Metadata</p> */}
      </div>
    )
  }

}

export default OneStoryForMetadata