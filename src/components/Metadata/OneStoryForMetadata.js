import _ from 'lodash'

import React from 'react'

import { Link } from 'react-router-dom'

import replacePlotTitleWithEmoji from '../../helpers/replacePlotTitleWithEmoji'
import getDateTime from '../../helpers/getDateTime'
import scrollToTop from '../../helpers/scrollToTop'

import { Table, Loader, Segment } from 'semantic-ui-react'

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
    console.log('in OneStoryForMetadata, this.state.data is: ', this.state.data)
    return(
      <div className="OneStory-forMetadata">
        {
          this.props.stories.length === 1 ?
          <Segment>
            <Loader active inline='centered' />
          </Segment>
          :
          <div>
            <Table sortable celled fixed>

              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell sorted={column === 'title' ? direction : null} onClick={this.handleSort('title')}>
                    Title
                  </Table.HeaderCell>
                  <Table.HeaderCell sorted={column === 'user_name' ? direction : null} onClick={this.handleSort('user_name')}>
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
                    Updated
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>


              <Table.Body>

                {
                  _.map(data, ({ id, title, user_name, content, story_genre_names, story_plot_titles, created_at, updated_at }) => (

                    <Table.Row key={id ? id : "id"}>

                      <Table.Cell>
                        {
                          title
                          ?
                          <Link
                            to={`/stories/${id}`}
                            onClick={scrollToTop}
                            >
                              {title}
                            </Link>
                            :
                            "title"
                          }
                        </Table.Cell>

                        <Table.Cell>{user_name ? user_name.substring(0, 15) : "story creator"}</Table.Cell>

                        <Table.Cell>{content ? content.split(' ').length : 0}</Table.Cell>

                        <Table.Cell>{story_genre_names ? story_genre_names : 0}</Table.Cell>

                        <Table.Cell>
                          {
                            story_plot_titles ? story_plot_titles.split(", ").map((plotTitle) => {
                              return (
                                replacePlotTitleWithEmoji(plotTitle)
                              )
                            }).join('   ')
                            : 0
                          }
                        </Table.Cell>

                        <Table.Cell>
                          {
                            created_at ?
                            getDateTime(created_at)
                            :
                            "created"
                          }
                        </Table.Cell>

                        <Table.Cell>
                          {
                            updated_at ?
                            getDateTime(updated_at)
                            :
                            "updated"
                          }
                        </Table.Cell>

                      </Table.Row>
                    )
                  )
                }
              </Table.Body>
            </Table>
          </div>
        }
      </div>
    )
  }
}

export default OneStoryForMetadata
