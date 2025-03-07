import React, { useState, useRef } from "react";
import "./../styles/PostForm.css";

const PostForm = ({ store }) => {
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && content) {
      const imageUrl = image ? URL.createObjectURL(image) : null;
      store.addPost(username, content, imageUrl);
      setUsername("");
      setContent("");
      setImage(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  return (
    <div className="post-form-container">
      <h2>Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <textarea
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input
          type="file"
          ref={fileInputRef}
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="submit">ADD POST</button>
      </form>
    </div>
  );
};

export default PostForm;
