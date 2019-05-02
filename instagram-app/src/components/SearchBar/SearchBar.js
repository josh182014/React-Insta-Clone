import React from 'react';
import styled from 'styled-components';
import { StyledButton } from '../login/login'
import './SearchBar.scss'

const StyledDiv = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledVL = styled.div`
    border-right: 1px solid black;
    margin: 0 20px;
    height: 80%;
    align-self: center;
`;

const StyledInput = styled.input`
    margin: 0 10%;
`;

const StyledRBC = styled.div`
    align-items: flex-end;  
`;

const SearchBar = (props) => {
    console.log('inside SearchBar', props)

    let logout = (event) => {
        event.preventDefault()
        localStorage.clear()
        window.location.reload()
    }

    return (
        <StyledDiv className='searchBar'>
            <i className="barIcon fab fa-instagram fa-3x"></i>
            <StyledVL className='verticalLine'></StyledVL>
            <div>Instagram Logo</div>
            <StyledInput onChange={props.filterPosts} placeholder='Search'></StyledInput>
            <StyledButton onClick={logout}>Logout</StyledButton>
            <StyledRBC className='rightBarContainer'>
                <i className="rightBarIcon far fa-compass fa-2x"></i>
                <i className="rightBarIcon far fa-heart fa-2x"></i>
                <i className="rightBarIcon far fa-user fa-2x"></i>
            </StyledRBC>
        </StyledDiv>
    )
}

export default SearchBar;