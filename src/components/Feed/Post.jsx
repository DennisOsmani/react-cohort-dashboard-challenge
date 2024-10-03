import "../Feed/Post.css";
import ProfileIcon from "../Left-Menu/ProfileIcon";
import Comment from "../Feed/Comment";

export default function Post() {

    return (
        <div className="post-card">
          <div className="post-header">
            <ProfileIcon />
            <p className="post-header-name">Nameeee...</p>
            </div>
            <div className="post-content">
              <p className="post-message">{"message"}</p>
          </div>
          <hr className="post-divider2" />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          <div className="post-comments">
            <div className="comment-section">
            <ProfileIcon /> {/* Change with the profile pic of the comment user */}
              <input
                type="text"
                placeholder="Write a comment..."
                value={""}
                onChange={""}
                className="comment-input"
              />
              <button onClick={""} className="comment-button">Post</button>
            </div>
            {/*
            <div className="comments-list">
              {comments.map((comment, index) => (
                <Comment key={index} content={comment} /> // Use the Comment component
              ))}
            </div>
            */}
          </div>
        </div>
      );
}