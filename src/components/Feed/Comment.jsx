/* eslint-disable react/prop-types */
import { useContext } from "react";
import "../Feed/Comment.css";
import { PostContext } from "../../App";
import { Link } from "react-router-dom";

export default function Comment({comment}) {
    const { authors } = useContext(PostContext);

    const author = authors.find((a) => a.id === comment.contactId);

    return (
        <div className="comment-item">
            <Link to={`/profile/${author.id}`}>
            <div className="comment-profile-image" style={{backgroundColor: author.favouriteColour}}>
              <p className="initials5">{author.firstName.charAt(0)}{author.lastName.charAt(0)}</p>
            </div>
            </Link>
            <div className="text-container">
                <p className="comment-author">{author.firstName} {author.lastName}</p>
                <p className="comment-text">{comment.content}</p>
                </div>
        </div>
    );
}