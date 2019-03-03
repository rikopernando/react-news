import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

const DetailNews = ({ news }) => (
    <div className="content-container">
        <p className="list-news__author">
            { news.author ? news.author : 'Anonymous' } - { moment(news.publishedAt).format('D/M/YYYY') }
        </p>
        <h2>{news.title}</h2>
        <p style={{ wordSpacing: 5, letterSpacing: 1 }}>{news.content}</p>
        <a href={news.url} target="_blank">lihat asli</a>
    </div>
)

const mapStateToProps = (state,props) => ({
  news: state.news[props.match.params.id]
})

export default connect(mapStateToProps)(DetailNews)
