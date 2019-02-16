import React from 'react'
import moment from 'moment'

const NewsListItem = ({ urlToImage, title, description, author, publishedAt }) => (
  <div className="list-news">
    <img className="list-news__image" src={ urlToImage ? urlToImage : './images/bg.jpg' } />
    <div>
      <h3 className="list-news__title">{ title }</h3>
      <p className="list-news__description">
        { description.length > 125 ? description.substr(0,125) + '...' : description }
      </p>
      <p className="list-news__author">
        { author ? author : 'Anonymous' } - { moment(publishedAt).format('D/M/YYYY') }
      </p>
    </div>
  </div>
)

export default NewsListItem

