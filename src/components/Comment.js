import React from 'react';

const Comment = ({ postId, comment, deleteComment }) => {
    return (
        <div>
            <p>{comment.content} <button onClick={() => deleteComment(postId, comment.id)}>Delete</button></p>
        </div>
    );
};

export default Comment;