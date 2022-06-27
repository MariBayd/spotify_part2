import React from "react";
import PostItem from "./UI/PostItem/PostItem.jsx";
import ContentWrapper from "./UI/ContentWrapper/ContentWrapper.jsx";

const ContentList = ({ posts, title }) => {
  return (
    <ContentWrapper title={title}>
      {posts.length ? (
        posts.map((post) => (
          <PostItem
            key={post.id}
            title={post.name}
            artist={post.artists ? post.artists[0].name : "Исполнитель"}
            imgUrl={post.images}
            popularity={post.popularity}
          />
        ))
      ) : (
        <span>Ничего нет</span>
      )}
    </ContentWrapper>
  );
};

export default ContentList;
