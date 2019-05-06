import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection'
import Likes from '../Post/Likes'
import styled from 'styled-components'
import './PostContainer.scss'

const StyledDiv = styled.div`

`;

const StyledPost = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
    border-style: solid;
    border-color: gray;
    border-width: 1px 1px 0 1px;
`;

const StyledImg = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border-radius: 50%;
    margin: 10px;
`;

const StyledP = styled.p`
    margin: 5px;
    margin-bottom: 10px;
`;

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
                <StyledDiv className='postContainer'>
                    {this.props.data.map(data => (
                        <StyledPost className='post' key={data.id}>
                            <StyledImg className='thumbnail' src={data.thumbnailUrl} alt='user thumbnail'></StyledImg>
                            <StyledP><strong>{data.username}</strong></StyledP>
                            <Likes comments={data} addLike={this.addLike} />
                            <CommentSection addComment={this.props.addComment} comments={data.comments} id={data.id} />
                        </StyledPost>
                    ))}
                </StyledDiv>
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