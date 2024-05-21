
import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8ea0442a9e0e47cdb17465d2bb30bdae&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === "ok") {
        setArticles(data.articles);
        setTotalResults(data.totalResults);
      } else {
        console.error("Error fetching news:", data.message);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = `${capitalize(props.category)} - Khabar`;
    updateNews();
  }, [props.category]);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8ea0442a9e0e47cdb17465d2bb30bdae&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === "ok") {
        setArticles((prevArticles) => prevArticles.concat(data.articles));
      } else {
        console.error("Error fetching more news:", data.message);
      }
    } catch (error) {
      console.error("Error fetching more news:", error);
    }
  };

  return (
    <div className="container my-3">
      <h1 className="text-center" style={{ margin: "35px 0px", marginTop: "60px", padding: "20px" }}>
        Top {capitalize(props.category)} Headlines
      </h1>
      <hr />
      {loading && <h4>Loading...</h4>}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<h4>Loading more...</h4>}
      >
        <div className="row">
          {articles.map((element, index) => (
            <div className="col-md-4" key={index}>
              <NewsItem
                title={element.title ? element.title.slice(0, 35) : ""}
                description={element.description ? element.description.slice(0, 40) : ""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default News;

