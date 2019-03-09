import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--light-gray bg-lightest-gray'
                type='search' 
                placeholder='Search Robofriends'
                onChange={searchChange}
                />
        </div>
    );
}

export default SearchBox;