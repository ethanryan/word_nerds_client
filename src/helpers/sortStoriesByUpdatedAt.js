export default function sortStoriesByUpdatedAt(storiesArray) {
  // console.log('0. container - storiesArray: ', storiesArray)
  var newArray = storiesArray.slice(0) //clone, cuz sort mutates
  var sortedStories = newArray.sort(function(a, b) {
    var dateA = new Date(a.updated_at)
    var dateB = new Date(b.updated_at)
    return dateA - dateB //sort stories by updated_at, first to last
  });
  // console.log('1. container - result sorted by updated_at: ', sortedStories)
  return sortedStories
}
