import React from "react";
import { observer } from "mobx-react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./styles/App.css";
import postStore from "./store/postStore";

const App = observer(() => {
  return (
    <div className="app-container">
      
      <div className="left-section">
        <PostForm store={postStore} />
      </div>

     
      <div className="right-section">
        <h2 className="posts-heading">Posts</h2>
        <PostList store={postStore} />
      </div>
    </div>
  );
});

export default App;
