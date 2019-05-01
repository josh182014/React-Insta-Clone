import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection'
import Likes from '../Post/Likes'
import './PostContainer.scss'

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.data
        }
    }

    addLike = (event) => {
        let likes = event.target
        console.log(likes)
    }

    render() {
        return (
            <>
                <div className='postContainer'>
                    {this.props.data.map(data => (
                        <div className='post' key={data.id}>
                            <img className='thumbnail' src={data.thumbnailUrl} alt='user thumbnail'></img>
                            <p><strong>{data.username}</strong></p>
                            <img src={data.imageUrl} alt='user posted'></img>
                            <Likes comments={data} addLike={this.addLike} />
                            <CommentSection addComment={this.props.addComment} comments={data.comments} id={data.id} />
                        </div>
                    ))}
                </div>
            </>
        )
    }
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