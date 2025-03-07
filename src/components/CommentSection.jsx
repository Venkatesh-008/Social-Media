import React from "react";
import "./../styles/CommentSection.css";

const CommentSection = ({ comments }) => {
  return (
    <div className="comments">
      {comments.map((comment, index) => (
        <p key={index}>{comment}</p>
      ))}
   

    </div>
  );
};

export default CommentSection;
