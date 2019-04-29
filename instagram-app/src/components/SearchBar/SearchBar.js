import React from 'react';
import './SearchBar.scss'

const SearchBar = (props) => {
    console.log(props)
    return (
        <div className='searchBar'>
            <i className="barIcon fab fa-instagram fa-3x"></i>
            <div className='verticalLine'></div>
            <div>Instagram Logo</div>
            <input placeholder='Search'></input>
            <div className='rightBarContainer'>
                <i class="rightBarIcon far fa-compass fa-2x"></i>
                <i class="rightBarIcon far fa-heart fa-2x"></i>
                <i class="rightBarIcon far fa-user fa-2x"></i>
            </div>
        </div>
    )
}

export default SearchBar;