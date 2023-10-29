import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Newsitem from './Newsitem'

export class News extends Component {
    articles = [
        
        ]
    constructor(){
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
      }
      async componentDidMount(){
        let urll = "https://newsapi.org/v2/top-headlines?country=in&apiKey=690dbb479ceb41fa8fa95ef1ad6cc7e0";
      let data = await fetch(urll);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({articles: parsedData.articles});
    }
      

  render() {
    return (
      <div className='container my-3'>
        <h2>ZombieNews top headlines</h2>
        <div className="row my-3" >
        {this.state.articles && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url} >
            <Newsitem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageurl={element.urlToImage} newsurl={element.url}/>
            </div>
        })}
    
       </div>
      </div>
    )
  }
}

export default News
