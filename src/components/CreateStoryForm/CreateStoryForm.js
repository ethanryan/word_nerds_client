import React, { Component } from 'react'

import CreateStoryFormSelectGenre from './CreateStoryFormSelectGenre'
import CreateStoryFormCreateCharacters from './CreateStoryFormCreateCharacters'

import { Form, Header, Divider, Modal, Button, Segment } from 'semantic-ui-react'

class CreateStoryForm extends Component {

  constructor(props) {
    super(props)
    console.log('**** props from CreateStoryForm:', props)
    console.log('+++++ props.characterProps from CreateStoryFormCreateCharacters:', props.characterProps)
    this.state=({ //organizing this so it's not nested, but post request will be nested
    story: '',
    //user_id: this.props.user_id, //need to set user_id here??? keep losing user_id on page reload
    characters: this.props.characterProps,
    //need below, or can i put them all in the above attribute???? -------- ??????????

    // shadow: {
    //   name: 'SHADOW',
    //   gender: '',
    //   emoji: ''
    // },
    // friend: {
    //   name: 'FRIEND',
    //   gender: '',
    //   emoji: ''
    // },
    // lover: {
    //   name: 'LOVER',
    //   gender: '',
    //   emoji: ''
    // },
    // mentor: {
    //   name: 'MENTOR',
    //   gender: '',
    //   emoji: ''
    // },
    // trickster: {
    //   name: 'TRICKSTER',
    //   gender: '',
    //   emoji: ''
    // },
    genreSelection: this.props.genreSelection, //chosen in CreateStoryFormSelectGenre, passed up to StoryContainer from there
  })
  this.handleCreateStoryFormSubmit = this.handleCreateStoryFormSubmit.bind(this)
} //end of constructor



componentWillReceiveProps(nextProps) { //need this lifecycle method to update filteredPlotsByTitle
  // console.log('CreateStoryForm nextProps::::', nextProps)
  if (this.props !== nextProps) {
    console.log("CreateStoryForm - props don't equal nextProps, so updating state with nextProps: ", nextProps)
    // console.log("CreateStoryForm - props don't equal nextProps -- updating state with nextProps.characterProps: ", nextProps.characterProps)
    this.setState({
      characters: nextProps.characterProps,
    })
  }
}



handleCharacterInputChange(event) {
  //abstract each character, so just one function
}


// handleHeroNameChange(event) {
//   const heroName = event.target.value
//   this.setState({
//     hero: {
//       name: heroName,
//       gender: this.state.hero.gender,
//       emoji: <span role="img" aria-label="emoji">😄</span>
//     },
//   })
// }

// handleHeroGenderChange(event) {
//   const heroGender = event.target.value
//   this.setState({
//     hero: {
//       name: this.state.hero.name,
//       gender: heroGender,
//       emoji: this.state.hero.emoji,
//     },
//   })
// }


handleCreateStoryFormSubmit(event) {
  event.preventDefault()
  const characters = this.state.characters

  // const characters = {
  //   // hero: this.state.hero,
  //   hero: this.props.characterProps.hero,
  //   shadow: this.state.shadow,
  //   friend: this.state.friend,
  //   lover: this.state.lover,
  //   mentor: this.state.mentor,
  //   trickster: this.state.trickster
  // }
  const user_id = this.props.user_id

  const genres = this.props.genreSelection

  console.log('CreateStoryForm submitted this.state: ', this.state)
  console.log('CreateStoryForm submitted characters--------: ', characters)
  // console.log('CreateStoryForm submitted characters.hero --------: ', characters.hero)
  console.log('user_id is: ', user_id)
  this.props.handleSubmit( genres, characters, user_id )
  this.setState({story: ''}) //this clears form onSubmit
}



render() {

  return(

    <div>

        <Modal trigger={
          <div className="center modal-trigger">
            <Segment>
              <Button primary>Create A Story</Button>
            </Segment>
          </div>
        }>

      <Form onSubmit={this.handleCreateStoryFormSubmit} className="CreateStoryForm-red">

        <Header as='h1' textAlign='center'>
          Create a Story
        </Header>

        {/* <h1>user_id: {this.props.user_id}</h1> */}

        <CreateStoryFormSelectGenre
          plots={this.props.plots}
          handleGenreChange={this.props.handleGenreChange}
        />

        <Divider />

        <CreateStoryFormCreateCharacters
          handleHeroNameChange={this.props.handleHeroNameChange}
          handleHeroGenderChange={this.props.handleHeroGenderChange}
          // characterProps={this.props.characterProps}
        />

        {/* make everything below here its own component, CreateStoryFormCreateCharacters */}
        {/* <Header as='h2' textAlign='center'>
          Create Characters
        </Header>

        <Form.Group>
          <Form.Field label="Hero Name" placeholder="HERO"
            // autoFocus
            width={6}
            control="input" type="text" key="heroName"
            onChange={this.handleHeroNameChange.bind(this)} />

            <Form.Field width={4} className="genderField">
              <label>Hero Gender</label>
              <Form.Field label="male"
                value="male"
                control="input" type="radio" className="genderRadio"
                checked={this.state.hero.gender === "male"}
                onChange={this.handleHeroGenderChange.bind(this)}
              />
              <Form.Field label="female"
                value="female"
                control="input" type="radio" className="genderRadio"
                checked={this.state.hero.gender === "female"}
                onChange={this.handleHeroGenderChange.bind(this)}
              />
            </Form.Field>

            <Form.Field width={6} className="summaryField">
              <label>
                <span role="img" aria-label="emoji">
                  {(this.state.hero.name !== 'HERO') ? this.state.hero.emoji : null}
                </span>  Hero Summary</label>

                name: {this.state.hero.name}
                <br></br>
                gender: {this.state.hero.gender}
              </Form.Field>
            </Form.Group>


            <Divider />


            <Form.Group>
              <Form.Field label="Shadow Name" placeholder="SHADOW"
                width={6}
                control="input" type="text" key="shadowName"
                onChange={this.handleShadowNameChange.bind(this)} />

                <Form.Field width={4} className="genderField">
                  <label>Shadow Gender</label>
                  <Form.Field label="male"
                    value="male"
                    control="input" type="radio" className="genderRadio"
                    checked={this.state.shadow.gender === "male"}
                    onChange={this.handleShadowGenderChange.bind(this)}
                  />
                  <Form.Field label="female"
                    value="female"
                    control="input" type="radio" className="genderRadio"
                    checked={this.state.shadow.gender === "female"}
                    onChange={this.handleShadowGenderChange.bind(this)}
                  />
                </Form.Field>

                <Form.Field
                  width={6} className="summaryField">
                  <label>
                    <span role="img" aria-label="emoji">
                      {(this.state.shadow.name !== 'SHADOW') ? this.state.shadow.emoji : null}
                    </span>  Shadow Summary</label>

                    name: {this.state.shadow.name}
                    <br></br>
                    gender: {this.state.shadow.gender}
                  </Form.Field>
                </Form.Group>

                <Divider />

                <Form.Group>
                  <Form.Field label="Friend Name" placeholder="FRIEND"
                    width={6}
                    control="input" type="text" key="friendName"
                    onChange={this.handleFriendNameChange.bind(this)} />

                    <Form.Field width={4} className="genderField">
                      <label>Friend Gender</label>
                      <Form.Field label="male"
                        value="male"
                        control="input" type="radio" className="genderRadio"
                        checked={this.state.friend.gender === "male"}
                        onChange={this.handleFriendGenderChange.bind(this)}
                      />
                      <Form.Field label="female"
                        value="female"
                        control="input" type="radio" className="genderRadio"
                        checked={this.state.friend.gender === "female"}
                        onChange={this.handleFriendGenderChange.bind(this)}
                      />
                    </Form.Field>

                    <Form.Field
                      width={6} className="summaryField">
                      <label>
                        <span role="img" aria-label="emoji">
                          {(this.state.friend.name !== 'FRIEND') ? this.state.friend.emoji : null}
                        </span>  Friend Summary</label>

                        name: {this.state.friend.name}
                        <br></br>
                        gender: {this.state.friend.gender}
                      </Form.Field>
                    </Form.Group>

                    <Divider />

                    <Form.Group>
                      <Form.Field label="Lover Name" placeholder="LOVER"
                        width={6}
                        control="input" type="text" key="loverName"
                        onChange={this.handleLoverNameChange.bind(this)} />

                        <Form.Field width={4} className="genderField">
                          <label>Lover Gender</label>
                          <Form.Field label="male"
                            value="male"
                            control="input" type="radio" className="genderRadio"
                            checked={this.state.lover.gender === "male"}
                            onChange={this.handleLoverGenderChange.bind(this)}
                          />
                          <Form.Field label="female"
                            value="female"
                            control="input" type="radio" className="genderRadio"
                            checked={this.state.lover.gender === "female"}
                            onChange={this.handleLoverGenderChange.bind(this)}
                          />
                        </Form.Field>

                        <Form.Field
                          width={6} className="summaryField">
                          <label>
                            <span role="img" aria-label="emoji">
                              {(this.state.lover.name !== 'LOVER') ? this.state.lover.emoji : null}
                            </span>  Lover Summary</label>

                            name: {this.state.lover.name}
                            <br></br>
                            gender: {this.state.lover.gender}
                          </Form.Field>
                        </Form.Group>

                        <Divider />

                        <Form.Group>
                          <Form.Field label="Mentor Name" placeholder="MENTOR"
                            width={6}
                            control="input" type="text" key="mentorName"
                            onChange={this.handleMentorNameChange.bind(this)} />

                            <Form.Field width={4} className="genderField">
                              <label>Mentor Gender</label>
                              <Form.Field label="male"
                                value="male"
                                control="input" type="radio" className="genderRadio"
                                checked={this.state.mentor.gender === "male"}
                                onChange={this.handleMentorGenderChange.bind(this)}
                              />
                              <Form.Field label="female"
                                value="female"
                                control="input" type="radio" className="genderRadio"
                                checked={this.state.mentor.gender === "female"}
                                onChange={this.handleMentorGenderChange.bind(this)}
                              />
                            </Form.Field>

                            <Form.Field
                              width={6} className="summaryField">
                              <label>
                                <span role="img" aria-label="emoji">
                                  {(this.state.mentor.name !== 'MENTOR') ? this.state.mentor.emoji : null}
                                </span>  Mentor Summary</label>

                                name: {this.state.mentor.name}
                                <br></br>
                                gender: {this.state.mentor.gender}
                              </Form.Field>
                            </Form.Group>

                            <Divider />

                            <Form.Group>
                              <Form.Field label="Trickster Name" placeholder="TRICKSTER"
                                width={6}
                                control="input" type="text" key="TricksterName"
                                onChange={this.handleTricksterNameChange.bind(this)} />

                                <Form.Field width={4} className="genderField">
                                  <label>Trickster Gender</label>
                                  <Form.Field label="male"
                                    value="male"
                                    control="input" type="radio" className="genderRadio"
                                    checked={this.state.trickster.gender === "male"}
                                    onChange={this.handleTricksterGenderChange.bind(this)}
                                  />
                                  <Form.Field label="female"
                                    value="female"
                                    control="input" type="radio" className="genderRadio"
                                    checked={this.state.trickster.gender === "female"}
                                    onChange={this.handleTricksterGenderChange.bind(this)}
                                  />
                                </Form.Field>

                                <Form.Field
                                  width={6} className="summaryField">
                                  <label>
                                    <span role="img" aria-label="emoji">
                                      {(this.state.trickster.name !== 'TRICKSTER') ? this.state.trickster.emoji : null}
                                    </span>  Trickster Summary</label>

                                    name: {this.state.trickster.name}
                                    <br></br>
                                    gender: {this.state.trickster.gender}
                                  </Form.Field>
                                </Form.Group> */}


                                <Form.Button content='Submit' type="submit" primary fluid/>

                              </Form>
                            </Modal>
                            </div>
                          )
                        }
                      }

                      export default CreateStoryForm
