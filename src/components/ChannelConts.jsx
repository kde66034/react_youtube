import React, { useState, useEffect } from 'react'
import { fetchAPI } from '../utils/fetchAPI'
import { useParams } from 'react-router-dom'

import { Videos } from './'

import { AiOutlineUser, AiOutlineYoutube, AiOutlineNumber } from 'react-icons/ai';

const ChannelConts = () => {
  const [channelDetail, setChannelDatail] = useState()
  const [videos, setVideos] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchAPI(`channels?part=snippet&id=${id}`)
      
      console.log(data?.items[0])
      setChannelDatail(data?.items[0])

      const videosData = await fetchAPI(
        `search?channelId=${id}&part=snippet&order=date`
      )
      setVideos(videosData?.items)
    }
    fetchResults()
  }, [id])

  return (
    <section id='channelConts'>
      <div className='channel-header' style={{backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`}}></div>
      <div className='channel-info'>
        <div className="channelTitle">
          <img src={channelDetail?.snippet?.thumbnails?.medium?.url} alt={channelDetail?.snippet?.title} />
          <h3>{channelDetail?.snippet?.title}</h3>
        </div>
        <div className='channelDetailInfo'>
          <span><AiOutlineUser className='icon' /> 구독자 수 : {channelDetail?.statistics?.subscriberCount}</span>
          <span><AiOutlineYoutube className='icon' /> 총 비디오 개수 : {channelDetail?.statistics?.videoCount}</span>
          <span><AiOutlineNumber className='icon' /> 비디오 카운트 : {channelDetail?.statistics?.viewCount}</span>
        </div>
      </div>
      <div className='channel-videos'>
        <Videos videos={videos} />
      </div>
    </section>
  )
}

export default ChannelConts