import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { fetchAPI } from '../utils/fetchAPI'
import { Videos, Category } from './'

const SearchConts = () => {
  const [videos, setVideos] = useState(null)
  const { searchTerm } = useParams()
  const [selectCategory, setSelectCategory] = useState(null)

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    )
  }, [searchTerm])

  return (
    <main id='main'>
      <aside id='aside'>
        <Category 
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
      </aside>
      <section id='contents'>
        <div className="result">‘<em>{searchTerm}</em>’에 대한 검색 결과입니다.</div>
        <Videos videos={videos} />
      </section>
    </main>
  )
}

export default SearchConts
