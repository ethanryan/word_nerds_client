export default function getDefaultCharactersObject() {
  let defaultCharactersObject = {
    characters: {
      hero: {
        name: 'HERO', //default name...
        gender: '',
      },
      shadow: {
        name: 'SHADOW', //default name...
        gender: '',
      },
      friend: {
        name: 'FRIEND', //default name...
        gender: '',
      },
      lover: {
        name: 'LOVER', //default name...
        gender: '',
      },
      mentor: {
        name: 'MENTOR', //default name...
        gender: '',
      },
      trickster: {
        name: 'TRICKSTER', //default name...
        gender: '',
      },
    },
    genreSelection: 'random', //updated from CreateStoryFormSelectGenre... random is default...
  }
  return defaultCharactersObject
}
