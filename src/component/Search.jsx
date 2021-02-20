import React from 'react'

function Search() {
    function handleSearch(value) {
        console.log(value);
    }
    return (
        <div className="Content__right__search">
            <div className="search">
                <i className="fas fa-search"></i>
                <input
                    type="text"
                    className="input_search"
                    placeholder="Search song..."
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>
        </div>
    )
}

export default Search
