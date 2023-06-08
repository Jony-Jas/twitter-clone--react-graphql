import React from "react";
import Utils from "./Utils";

function Post({ name, username, content }) {
  return (
    <div className="post-container">
      <div className="post-profile"></div>
      <div style={{width:'100%'}}>
        <div className="post-user">
          <span>{name}</span> <span>@{username}</span>
        </div>
        <div className="post-content">{content}</div>
        <div>
          <ul className="post-utils">
            <Utils />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Post;
