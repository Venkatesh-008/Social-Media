import React, { useState } from "react";
import { observer } from "mobx-react";
import "./../styles/PostItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faCommentDots } from "@fortawesome/free-solid-svg-icons";

const PostItem = observer(({ post, store, setShowLeft }) => {
  if (!post) return null;

  const [comment, setComment] = useState("");
  const [likes, setLikes] = useState(post?.likes || 0);
  const [dislikes, setDislikes] = useState(post?.dislikes || 0);

  const handleAddComment = () => {
    if (comment.trim()) {
      store.addComment(post.id, comment);
      setComment("");
    }
  };

  return (
    <>
      <div className="post-card">
        <div className="post-header">
          <div className="user-avatar">
            <img src="/assets/images/kitty.png" alt="User Avatar" />
          </div>
          <span className="username">{post.username || "Unknown User"}</span>
        </div>

        <p className="post-content">{post?.content || "No content available."}</p>

        {post.image && (
          <div className="post-image-container">
            <img src={post.image} alt="Post" className="post-image" />
            <button className="delete-image-icon" onClick={() => store.removeImage(post.id)}>
              <FontAwesomeIcon icon={faTimesCircle} size="lg" />
            </button>
          </div>
        )}

        <div className="post-actions">
          <button className="action-btn like" onClick={() => setLikes(likes + 1)}>
            👍 {likes} Like
          </button>
          <button className="action-btn dislike" onClick={() => setDislikes(dislikes + 1)}>
            👎 {dislikes} Dislike
          </button>
          <button className="action-btn delete" onClick={() => post?.id !== undefined && store.deletePost(post.id)}>
            🗑 Delete
          </button>
        </div>

        <div className="comment-section">
          <input
            type="text"
            placeholder="Write a comment..."
            className="comment-input"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button className="comment-btn" onClick={handleAddComment}>
            <FontAwesomeIcon icon={faCommentDots} size="lg" />
          </button>
        </div>

        <div className="comments-list">
          {post.comments?.length ? (
            post.comments.map((c, index) => (
              <div key={index} className="comment">
                <div className="user-avatar">
                  <img src="/assets/images/spider.png" alt="User Avatar" />
                </div>
                <span className="comment-text">{c.text}</span>
              </div>
            ))
          ) : (
            <p className="no-comments">No comments yet.</p>
          )}
        </div>
      </div>

      
    </>
  );
});

export default PostItem;
