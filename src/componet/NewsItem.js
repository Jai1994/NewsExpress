
import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {

   var {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className='my-3'>
        <div  className="card" style={{width: '15rem'}}>
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div  className="card-body">
    <h5  className="card-title">{`${title}... ${source?.id}`}</h5>
    <p  className="card-text">{description}</p>
    <p className='card-text'><small className='text-muted'>By {!author ? 'Unknown' : author}
     on {new Date(date).toGMTString()}</small></p>

    <a rel='noreferrer' href={newsUrl} target='_blank'  className="btn btn-sm btn-dark">Read more...</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem