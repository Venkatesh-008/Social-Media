import React, { useState } from "react";
import "./../styles/PostForm.css";

const PostForm = ({ store }) => {
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && content) {
      let imageUrl = null;
  
      if (image) {
        imageUrl = URL.createObjectURL(image); 
      }
  
      store.addPost(username, content, imageUrl);
      setUsername("");
      setContent("");
      setImage(null);
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
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit">ADD POST</button>
      </form>
    </div>
  );
};

export default PostForm;
