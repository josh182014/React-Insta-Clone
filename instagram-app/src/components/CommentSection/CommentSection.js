import React from 'react';
import './CommentSection.scss'

const CommentSection = (props) => {
    return (
        <>
            <div className='commentContainer'>
                {props.comments.map(comment => (
                    <div key={comment.id} className='singleCommentContainer'>
                        <div className='commentUserName'>
                            <strong>{comment.username}</strong> {comment.text}
                        </div>
                    </div>
                ))}
                <div className='newComment'>
                    <input placeholder='Add a comment...'></input>
                </div>
            </div>
        </>
    )
}

export default CommentSection;