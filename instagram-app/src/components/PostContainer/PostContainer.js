import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import './PostContainer.scss'

const PostContainer = (props) => {
    console.log(props)
    return (
        <>
            <div className='postContainer'>
                {props.data.map(data => (
                    <div className='post' key={data.id}>
                        <img className='thumbnail' src={data.thumbnailUrl}></img>
                        <p><strong>{data.username}</strong></p>
                        <img src={data.imageUrl}></img>
                        <div className='icons'>heart icon comment icon</div>
                        <div className='likes'><strong>{data.likes} likes</strong></div>
                        <CommentSection comments={data.comments}/>
                    </div>
                ))}
            </div>
        </>
    )
}

export default PostContainer;