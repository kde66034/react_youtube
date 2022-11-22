import React from 'react'

import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
  return (
    <div className='search'>
        <label htmlFor="searchInput" className='glass'><AiOutlineSearch /></label>
        <input type="text" 
          id='searchInput' 
          className='input__search' 
          placeholder='ASMR 유튜버를 검색하세요.' 
          title='검색' 
        />
    </div>
  )
}

export default SearchBar