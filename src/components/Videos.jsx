import React from 'react'

import { VideoCard, Loader } from './index'

const Videos = ({ videos }) => {
  if (!videos?.length) return <Loader />
  // ?문법 : Optional Chaining = 존재 또는 존재하지 않는 요소와 메서드들을 안전하게 접근할 수 있도록 도와줍니다.

  return (
    <article className={"videos__inner"}>
      {videos.map((item, index) => (
        <VideoCard key={index} video={item} />
      ))}
    </article>
  )
}

export default Videos
