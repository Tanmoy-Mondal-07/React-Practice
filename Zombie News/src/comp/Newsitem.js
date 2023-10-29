import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Newsitem extends Component {
    

  render() {
    let {title, description, imageurl, newsurl} = this.props;
    return (
      <div>
        <div className="card" style={{width: '18rem'}}>
  <img src={imageurl} style={{height: '180px'}}  className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={newsurl} className="btn btn-primary">Go to the article</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem
