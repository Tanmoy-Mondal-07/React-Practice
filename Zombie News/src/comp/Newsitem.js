import React from 'react'

const Newsitem = (props) => {


  let { title, description, imageurl, newsurl, author, publishedAt } = props;
  return (
    <div>
      <div className="card" >
        <img src={imageurl} style={{ height: '180px' }} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className='card-text'><small className='text-muted'>By {!author ? "Unknown Author" : author} on {publishedAt}</small></p>
          <a href={newsurl} className="btn btn-primary">Go to the article</a>
        </div>
      </div>
    </div>
  )
}


export default Newsitem
