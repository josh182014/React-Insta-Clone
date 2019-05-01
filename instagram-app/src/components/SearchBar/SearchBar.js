import React from 'react';
import './SearchBar.scss'

const SearchBar = (props) => {
    console.log('inside SearchBar', props)

    let logout = (event) => {
        event.preventDefault()
        localStorage.clear()
        window.location.reload()
    }

    return (
        <div className='searchBar'>
            <i className="barIcon fab fa-instagram fa-3x"></i>
            <div className='verticalLine'></div>
            <div>Instagram Logo</div>
            <input onChange={props.filterPosts} placeholder='Search'></input>
            <button onClick={logout}>Logout</button>
            <div className='rightBarContainer'>
                <i className="rightBarIcon far fa-compass fa-2x"></i>
                <i className="rightBarIcon far fa-heart fa-2x"></i>
                <i className="rightBarIcon far fa-user fa-2x"></i>
            </div>
        </div>
    )
}

export default SearchBar;