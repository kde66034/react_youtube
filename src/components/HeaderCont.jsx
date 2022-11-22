import React from 'react'

import { SearchBar } from './';
import { Link } from 'react-router-dom'

import { AiOutlineYoutube } from 'react-icons/ai';

const HeaderCont = () => {
  return (
    <header id='header'>
      <h1 className='logo'>
        <Link to="/">
          <AiOutlineYoutube className='icon' /> CozyTube
        </Link>
      </h1>
      <SearchBar />
    </header>
  )
}

export default HeaderCont