import React from 'react'
import { useState } from 'react'
const MoodSongs = () => {

    const currentSongIndex = ()=>{
        
    }
    const [Songs,setSongs] = useState([

        {
            title:"text_title",
            artist:'Test_artist',
            url:"test_url"
        },
        
        {
            title:"text_title",
            artist:'Test_artist',
            url:"test_url"
        },
        {
            title:"text_title",
            artist:'Test_artist',
            url:"test_url"
        },
        {
            title:"text_title",
            artist:'Test_artist',
            url:"test_url"
        },

    ])
  return (
  <div className="p-6 bg-[#0D1D3B] min-h-screen text-white">
    <h2 className="text-2xl font-bold mb-6 text-[#D6B96A]">🎧 Recommended Songs</h2>
    <div className="grid gap-4">
      {Songs.map((song, index) => (
        <div
          key={index}
          className="bg-[#1B2A4A] p-4 rounded-lg shadow-md flex items-center justify-between"
        >
          <div>
            <h3 className="text-lg font-semibold">{song.title}</h3>
            <p className="text-sm text-[#D6B96A]">{song.artist}</p>
          </div>
          <button
            className="text-white text-2xl"
            onClick={() => togglePlay(index)}
          >
            {currentSongIndex === index && !audioRef.current.paused ? (
              <i className="ri-pause-circle-fill"></i>
            ) : (
              <i className="ri-play-circle-fill"></i>
            )}
          </button>
        </div>
      ))}
    </div>
  </div>
);

}

export default MoodSongs
