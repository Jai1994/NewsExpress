import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
 
  constructor(){
    super();
    console.log("Hello, i am Constructor from News component");
    this.state=
      {
        articles: [],
        loading: false,
        page:1
}
    
  }

 async componentDidMount(){
     let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=76eee0211062475aa68b518be1aad8d2&pagesize=20";
     let data = await fetch(url);
     let ParsData = await data.json();
     console.log(ParsData);
     this.setState({articles: ParsData.articles, totalResults: ParsData.totalResults})
   }

    handlePrevClick = async ()=>{

      let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=76eee0211062475aa68b518be1aad8d2&page=${ this.state.page - 1}&pagesize=20`;
    let data = await fetch(url);
    let ParsData = await data.json();
    console.log(ParsData);
    
     this.setState({
       page: this.state.page - 1,
       articles: ParsData.articles
     })
   }

   handleNextClick = async ()=>{

    if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

    }
    else
{
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=76eee0211062475aa68b518be1aad8d2&page=${ this.state.page + 1}&pagesize=20`;
    let data = await fetch(url);
    let ParsData = await data.json();
    console.log(ParsData);

     this.setState({
       page: this.state.page + 1,
       articles: ParsData.articles
     })
    }
   }

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsExpress - Top Headlines</h2>
        <div className='row'>
        {this.state.articles.map((element)=>{
          return <div className='col-md-4' key={element.url}>
          <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 85):""} 
          imageUrl={element.urlToImage} newsUrl={element.url} />
         </div>
        })}
          <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page <=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Back</button>
          <button type="button" className="btn btn-dark"  onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
           </div>
      </div>
     
    )
  }
}

export default News