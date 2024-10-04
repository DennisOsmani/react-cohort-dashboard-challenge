/* eslint-disable react/prop-types */
import { useContext } from "react";
import "../Feed/Comment.css";
import { PostContext } from "../../App";

export default function Comment({comment}) {
    const { authors } = useContext(PostContext);

    const author = authors.find((a) => a.id === comment.contactId);

    return (
        <div className="comment-item">
            <div className="post-image" style={{backgroundColor: author.favouriteColour}}>
              <p className="initials">{author.firstName.charAt(0)}{author.lastName.charAt(0)}</p>
            </div>
            <div className="text-container">
                <p className="comment-author">{author.firstName} {author.lastName}</p>
                <p className="comment-text">{comment.content}</p>
                </div>
        </div>
    );
}