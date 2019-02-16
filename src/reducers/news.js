const newsReducersDefaultState = []

export default (state = newsReducersDefaultState, actions) => {
  switch (actions.type) {
    case "SET_NEWS":
      return actions.news
    default:
      return state
  }
}
