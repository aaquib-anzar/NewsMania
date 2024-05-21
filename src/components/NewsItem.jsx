import React from "react";
import { Link } from "react-router-dom";
import classes from "./NewsItem.module.css";
import { useTheme } from "../hooks/ColorScheme";

const NewsItem = (props) => {
  let {
    title,
    description,
    imageUrl,
    newsUrl,
    author,
    date,
    source,
  } = props;
  const [isDark] = useTheme();
  return (
    <div className="my-3 d-flex align-items-stretch ">
      <div className="card" style={{ width: "25rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger"> {source} </span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
              : imageUrl
          }
          className={classes["img-card"]}
          width="150"
          height="150"
          alt="..."
        />

        <div className={`card-body d-flex flex-column bg-${isDark ? 'dark' : 'light'} text-${isDark ? 'light' : 'dark'}`}>
          <h5 className={`card-title text-truncate text-${isDark ? 'light' : 'dark'}`}>{title}...</h5>
          <p className={`card-text mb-4 text-${isDark ? 'light' : 'dark'}`}>{description ? description : "No description available"}...</p>
          <p className="card-text" style={{ textAlign: "center" }}>
            <small className={`text-${isDark ? 'light' : 'dark'}`}>
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toLocaleDateString()}
            </small>
          </p>
          <Link
            rel="noreferrer"
            to={newsUrl}
            target="_blank"
            className={`btn btn-sm btn-${isDark ? 'light' : 'dark'}`}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
