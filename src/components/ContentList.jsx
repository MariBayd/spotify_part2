import React from "react";
import PostItem from "./UI/PostItem/PostItem.jsx";
import ContentWrapper from "./UI/ContentWrapper/ContentWrapper.jsx";
import { ARTIST_CONST } from "../js/Constans";

const ContentList = ({ posts, title }) => {
  return (
    <ContentWrapper title={title}>
      {posts.length
        ? posts.map((post) => (
          <PostItem
            key={post.id}
            title={post.name}
            artist={post.artists ? post.artists[0].name : ARTIST_CONST}
            imgUrl={post.images}
            popularity={post.popularity}
          />))
        : <span>Ничего нет</span>}
    </ContentWrapper>
  );
};

export default ContentList;
