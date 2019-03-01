import React from 'react'
import { connect } from 'react-redux'
import NewsListItem from './NewsListItem'

export const NewsList = ({ news }) => (
  <div className="content-container">
    {
      news.map((news, key) => {
        return (
          <NewsListItem key={key} {...news} />
        )
      })
    }
  </div>
)

const mapStateToProps = (state) => ({
  news: state.news
})

export default connect(mapStateToProps)(NewsList)
