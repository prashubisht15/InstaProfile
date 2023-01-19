import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Button, Stack } from "@mui/material";
import { Card, CardMedia } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import "./apply.css";

const Gallery = () => {
  const url2 = "http://jsonplaceholder.typicode.com/photos";
  const [numOfImage, setNumOfImage] = useState(6);
  const [imageList, setImageList] = useState([]);

  const loadMore = () => {
    setNumOfImage(numOfImage + numOfImage);
  };
  const performApiCall = async () => {
    try {
      const response = await axios.get(url2);
      setImageList(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    performApiCall();
  }, []);
  const slicedData = imageList.slice(0, numOfImage);

  return (
    <main>
      <div className="gallery container">
        <Grid container spacing={4}>
          {slicedData && slicedData.length ? (
            slicedData.map((ele) => (
              <Grid className="image-gird" item xs={12} md={4} sm={4}>
                <Card className="image-card">
                  <CardMedia component="img" image={ele.url} />
                  <ul>
                    <li className="gallery-item-likes">
                      <span class="visually-hidden">
                        <FavoriteBorderIcon />
                      </span>
                      800
                    </li>
                    <li className="gallery-item-comments">
                      <span class="visually-hidden">
                        <CommentIcon />
                      </span>
                      56
                    </li>
                  </ul>
                </Card>
              </Grid>
            ))
          ) : (
            <div className="no-info">
              <h1>No Photo to display</h1>
            </div>
          )}
          <div className="showmore">
            <Button variant="contained" onClick={() => loadMore()}>
              Show more posts
            </Button>
          </div>
        </Grid>
      </div>
    </main>
  );
};

export default Gallery;
