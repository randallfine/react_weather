
const timeConverter = (dateString) => {
  const date = new Date(dateString * 1000)
  const options = {hour: 'numeric', minute: 'numeric' }
  //weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  return date.toLocaleString("en-US",options)
}

export default timeConverter;