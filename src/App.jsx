import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./styles/App.css";
import postStore from "./store/postStore";

const App = observer(() => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 770);
  const [showLeft, setShowLeft] = useState(!isMobile);

  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth <= 770;
      setIsMobile(mobileView);
      if (!mobileView) setShowLeft(true);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="app-container">
      <div className={`left-section ${showLeft ? "visible" : "hidden"}`}>
        <PostForm store={postStore} />
      </div>

      <div className="right-section">
        <h2 className="posts-heading">Posts</h2>
        <PostList store={postStore} />
      </div>

      {isMobile && (
        <button className="mob-btn" onClick={() => setShowLeft((prev) => !prev)}>
          {showLeft ? "Close" : "Create"}
        </button>
      )}
    </div>
  );
});

export default App;
