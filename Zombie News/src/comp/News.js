import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spiner from './Spiner';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  // document.title = `${props.country} - Zombie News`;
  const updatnews = async () => {
    props.setProgress(10);
    const urll = `https://newsapi.org/v2/top-headlines?country=${props.country}&page=${page}&category=${props.category}&pagesize=${props.pageSize}&apiKey=${props.apiKey}`;
    let data = await fetch(urll);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setarticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setloading(false)
    props.setProgress(100);
  }
  const fetchMoreData = async () => {
    const urll = `https://newsapi.org/v2/top-headlines?country=${props.country}&page=${page+1}&category=${props.category}&pagesize=${props.pageSize}&apiKey=${props.apiKey}`;
    setpage(page + 1)
    setloading(true);
    let data = await fetch(urll);
    let parsedData = await data.json();
    console.log(parsedData);
    setarticles(articles.concat(parsedData.articles))
    settotalResults(parsedData.totalResults)
    setloading(false)
  }
  useEffect(() => {
    updatnews();
    // eslint-disable-next-line
  },[])

  return (
    <>
      <h2 className='text-center' style={{ marginTop: '60px' }}>ZombieNews top headlines</h2>
     {loading && <Spiner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spiner />}
      >
        <div className="container">
          <div className="row" >
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url} >
                <Newsitem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage} newsurl={element.url}
                  publishedAt={element.publishedAt} author={element.author} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}


export default News
