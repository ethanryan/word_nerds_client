// for local server rails api:
const baseUrl = 'http://localhost:3000'

// for hosted heroku api:
// const baseUrl = 'https://word-nerds-api.herokuapp.com'

export function getStories() {
  return fetch(`${baseUrl}/stories`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('jwt')
    },
    mode: 'cors',
    method: 'GET',
  }).then( response => response.json() )
}

export function getUsers() {
  return fetch(`${baseUrl}/users`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('jwt')
    },
    mode: 'cors',
    method: 'GET',
  })
  .then (response => response.json() )
}

export function getCurrentUser() {
  return fetch(`${baseUrl}/users/current_user`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('jwt')
    },
    mode: 'cors',
    method: 'GET',
  })
  .then (response => response.json() )
}

export function createStory(characters, user_id) { //adding user_id as argument -- ER Nov 2017
  return fetch(`${baseUrl}/stories`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('jwt')
    },
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify({
      story: {
        title: characters.hero.name + "'s story, v1",
        user_id: user_id, //current user_id here instead of 1
        characters: [
          {
            name: characters.hero.name,
            gender: characters.hero.gender,
            archetype: "hero"
          },
          {
            name: characters.shadow.name,
            gender: characters.shadow.gender,
            archetype: "shadow"
          },
          {
            name: characters.friend.name,
            gender: characters.friend.gender,
            archetype: "friend"
          },
          {
            name: characters.lover.name,
            gender: characters.lover.gender,
            archetype: "lover"
          },
          {
            name: characters.mentor.name,
            gender: characters.mentor.gender,
            archetype: "mentor"
          },
          {
            name: characters.trickster.name,
            gender: characters.trickster.gender,
            archetype: "trickster"
          },
        ],
      }
    })
  }).then( res => res.json() )
}

export function updateStory(updatedStory) {
  return fetch(`${baseUrl}/stories/${updatedStory.id}`, {
    method: 'PATCH',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('jwt')
    },
    body: JSON.stringify({
      story: {
        content: updatedStory.input,
        title: updatedStory.title,
        user_id: updatedStory.user_id //story updated by its own user_id
      }
    }),
  }).then( res => res.json() )
}

export function deleteStory(id) {
  return fetch(`${baseUrl}/stories/${id}`, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('jwt')
    }
  }).then( res => res.json() )
}

export function logIn(params) {
  console.log('logIn function called');
  return fetch(`${baseUrl}/sign_in`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(params)
  }).then( res => res.json() )
}


export function signUp(name, password) {
  return fetch(`${baseUrl}/users`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        name: name,
        password: password
      }
    })
  }).then( res => res.json() )
}
