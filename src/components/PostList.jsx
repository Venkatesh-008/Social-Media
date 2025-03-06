import React from "react";
import { observer } from "mobx-react";
import PostItem from "./PostItem";
import "./../styles/PostList.css";

const PostList = observer(({ store }) => {
  return (
    <div className="post-list-container">
      {store.posts.length === 0 ? (
        <div className="no-posts">
          <p className="no-posts-message">🚀 No posts available. Start posting now!</p>
        </div>
      ) : (
        <div className="posts">
          {store.posts.map((post, index) => (
            <PostItem key={post.id || index} post={post} store={store} />
          ))}
        </div>
      )}
    </div>
  );
});

export default PostList;
