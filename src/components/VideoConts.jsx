import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useParams, Link } from 'react-router-dom'
import { fetchAPI } from '../utils/fetchAPI'
import { Category, Videos, Loader } from './'

import { AiOutlineEye, AiOutlineLike } from 'react-icons/ai';

const VideoConts = () => {
  const [selectCategory, setSelectCategory] = useState(null)
  const [videoDetail, setVideoDatail] = useState(null)
  const [videos, setVideos] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetchAPI(
      `search?q=${selectCategory}&type=video&part=snippet%2Cid&regionCode=kr&order=date`
    ).then((data) => setVideos(data.items))
  }, [selectCategory])

  useEffect(() => {
    fetchAPI(`videos?part-snippet,statistics&id=${id}`).then((data) =>
      setVideoDatail(data.items[0])
    )
    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    )
  }, [id])

  if(!videoDetail?.snippet) return <Loader />

  const {snippet : {title, channelTitle, channelId}, statistics : {viewCount, likeCount}} = videoDetail
  
  return (
    <main id="main">
      <div id="aside">
        <Category
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
      </div>
      <section id="videoCont__inner">
        <div className="videoCont__cont">
          <div className="play">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
            />
          </div>
          <div className="desc">
            <span className='title'>{title}</span>
            <div className='channel'>
              <Link to={`/channel/${channelId}`}>{channelTitle}</Link>
            </div>
            <div className="descInfo">
              <div className='view'>
                <AiOutlineEye className='icon' /> {viewCount} View
              </div>
              <em> | </em>
              <div className='like'>
                <AiOutlineLike className='icon' /> {likeCount} Like
              </div>
            </div>
          </div>
        </div>
        <div className="videoCont__list side">
          <Videos videos={videos} />
        </div>
      </section>
    </main>
  )
}
export default VideoConts
