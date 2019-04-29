import React from 'react';
import './SearchBar.scss'

const SearchBar = (props) => {
    console.log(props)
    return (
        <div className='searchBar'>
            <div>ICON</div>
            <div>Instagram Logo</div>
            <input placeholder='Search'></input>
            <div>More Icons</div>
        </div>
    )
}

export default SearchBar;