import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection'
import './PostContainer.scss'

const PostContainer = (props) => {
    return (
        <>
            <div className='postContainer'>
                {props.data.map(data => (
                    <div className='post' key={data.id}>
                        <img className='thumbnail' src={data.thumbnailUrl}></img>
                        <p><strong>{data.username}</strong></p>
                        <img src={data.imageUrl}></img>
                        <div className='icons'>
                            <i className="postIcon far fa-heart fa-2x"></i>
                            <i className="far fa-comment fa-2x"></i>
                        </div>
                        <div className='likes'><strong>{data.likes} likes</strong></div>
                        <CommentSection comments={data.comments}/>
                    </div>
                ))}
            </div>
        </>
    )
}


PostContainer.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
      })
    ).isRequired
  };
  
  PostContainer.defaultProps = {
    data: []
  };

export default PostContainer;