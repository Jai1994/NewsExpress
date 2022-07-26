import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem';

 class News extends Component {
  
  capitalizeFirstLatter = (string)=>{
   return string.charAt(0).toUpperCase()+string.slice(1);
 }
 
  constructor(props){
    super(props);
    this.state=
      {
        articles: [],
        loading: true,
        page:1,
        totalResults: 0
}
 
   document.title = `${this.capitalizeFirstLatter(this.props.category)} - NewsExpress`;   
  }

  async updateNews(){
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;

    let data = await fetch(url);
    let ParsData = await data.json();
    console.log(ParsData);
    this.setState({articles: ParsData.articles, 
     totalResults: ParsData.totalResults, 
     loading: true,
     
    })

  }

  componentDidMount(){
   
    this.updateNews();
   }

    handlePrevClick = async ()=>{

  
    this.setState({page: this.state.page - 1})
    this.updateNews();
   }

   handleNextClick = async ()=>{
    this.setState({page: this.state.page +1})
     this.updateNews();
   }

   fetchMoreData = async () => {
     this.setState({page: this.state.page +1})
     const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}
    &category=${this.props.category}
    &apiKey=${this.props.apikey}&page=${this.state.page}
    &pagesize=${this.props.pageSize}`;

    let data = await fetch(url);
    let ParsData = await data.json();
    console.log(ParsData);
    this.setState({
      articles: this.state.articles.concat(ParsData.articles), 
     totalResults: ParsData.totalResults, 
     loading: true,
     
    })
  };

  render() {
    return (
      <>
      
        <h2 className='text-center' style={{margin: '35px 0px'}}>NewsExpress - Top {this.capitalizeFirstLatter(this.props.category)} Headlines</h2>

            <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !==this.totalResults}
          loader={<h4>Loading...</h4>}/>

          <div className='container my-3'>
        <div className='row'>
        {this.state.articles?.map((element, index)=>{
         
          return <div className='col-md-4' key={index}>
          <NewsItem title={element.title?.slice(0, 45)||""} description={element.description?.slice(0, 85)||""} 
          imageUrl={element.urlToImage} newsUrl={element.url}  
          author={element.author} date={element.publishedAt} source={element.source}/>
         </div>
        })}
       
           </div>
      </div>
      </>
    )
  }
}

export default News