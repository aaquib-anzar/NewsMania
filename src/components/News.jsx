import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem"

import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);


  const Capilatize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8ea0442a9e0e47cdb17465d2bb30bdae&page=${page}&pagSize=${props.pageSize}`;
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setArticles(data.articles);
    setTotalResults(data.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    document.title = `${Capilatize(props.category)} - Khabar`;
    updateNews();
    
  }, [props.category]);
  console.log(articles)
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=8ea0442a9e0e47cdb17465d2bb30bdae&page=${
      page + 1
    }&pagSize=${props.pageSize}`;
    setPage(page + 1);
    setLoading(true);
    const response = await fetch(url);
    let data = await response.json();
    setArticles(articles.concat(data.articles));
    setTotalResults(data.totalResults);
  };
  return (

    <div className="container my-3">
      <h1
        className="text-center"
        style={{ margin: "35px 0px", marginTop: "60px" , padding:"20px"}}
      >
        Top {Capilatize(props.category)} Headlines
      </h1>
      <hr />
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<h4>Loading...</h4>}
      >
        <div className="row">
          {articles.map((element, index) => {
            return (
              <div className="col-md-4" key={index}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 35) : ""}
                  description={
                    element.description ? element.description.slice(0, 40) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default News;
