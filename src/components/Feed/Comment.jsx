import "../Feed/Comment.css";
import ProfileIcon from "../Left-Menu/ProfileIcon";

export default function Comment() {
    return (
        <div className="comment-item">
            <ProfileIcon />
            <p className="comment-text">Comment....</p>
        </div>
    );
}