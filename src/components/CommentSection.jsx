import React from "react";
import "./../styles/CommentSection.css";

const CommentSection = ({ comments }) => {
  return (
    <div className="comments">
      {comments.map((comment, index) => (
        <p key={index}>{comment}</p>
      ))}
      <div className="comment-avatar">
  <img src={c?.gender === "female" ? "/images/girl-icon.png" : "/images/boy-icon.png"} alt="User Avatar" />
</div>

    </div>
  );
};

export default CommentSection;
