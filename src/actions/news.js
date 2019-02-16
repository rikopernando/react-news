export const setNews = (news) => ({
  type: "SET_NEWS",
  news
})

export const startSetNews = () => {
  return (dispatch) => {
    return fetch('https://newsapi.org/v2/top-headlines?country=id&apiKey=faa93d5c650945a6a34a760fac8c7f90').then((response) => {
      return response.json()
    })
    .then(({articles}) => {
      dispatch(setNews(articles))
    })
  }
}
