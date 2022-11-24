import React, { useEffect, useState } from 'react'

import { fetchAPI } from '../utils/fetchAPI';
import { Category, Videos } from './';

// import dummy from '../utils/dummy.json';

const MainConts = () => {
  const [selectCategory, setSelectCategory] = useState('Cozy Rain');
  // const [videos, setVideos] = useState(dummy.items); - 터질때 사용할것
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${selectCategory}&type=video`)
    .then((data) => {
      setVideos(data.items);
    })
  }, [selectCategory]);

  return (
    <main id='main'>
      <aside id='aside'>
        <Category 
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
         />
      </aside>
      <section id='contents'>
        <h2><em>{selectCategory}</em> 채널의 동영상</h2>
        <Videos videos={videos} />
      </section>
    </main>
  )
}

export default MainConts