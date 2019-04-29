import React from 'react';
import './CommentSection.scss'

const CommentSection = (props) => {
    console.log('inside CommentSection', props.comments)
    return (
        <>
            <div className='commentContainer'>
                {props.comments.map(comment => (
                    <div key={comment.id} className='singleCommentContainer'>
                        <div className='commentUserName'>
                            <strong>{comment.username}</strong>
                        </div>
                        <div className='commentText'>
                            {comment.text}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CommentSection;