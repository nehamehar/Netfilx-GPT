import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='absolute w-screen px-24 text-white pt-[20%] bg-gradient-to-r from-black aspect-video'>
        <h1 className='text-4xl font-semibold'>{title}</h1>
        <p className='w-1/4 py-6 text-md'>{overview}</p>
        <div className=''>
            <button className='p-3 text-xl text-black bg-white rounded-md px-9 hover:bg-opacity-80'> ▶  Play</button>
            <button className='p-3 px-5 text-xl text-white bg-opacity-50 rounded-md mx-7 bg-slate-300'> More Info</button>
        </div>
    </div> 
  )
}

export default VideoTitle