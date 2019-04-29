import React from 'react';
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = (props) => {
    console.log(props)
    return (
        <>
            <div className='postContainer'>
                {props.data.map(data => (
                    <div className='post' key={data.id}>
                        <h4>{data.username}</h4>
                        <img src={data.imageUrl}></img>
                        <CommentSection comments={data.comments}/>
                        <div className='newComment'>
                            <input placeholder='Add a comment...'></input>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default PostContainer;