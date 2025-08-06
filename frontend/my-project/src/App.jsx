import React from 'react'
import FaceExpressionDetector from './components/FaceExpressionDetector.jsx';
import Songs from './components/MoodSongs.jsx'
const App = () => {
  return (
    <div>
      <FaceExpressionDetector />
      <Songs/>
    </div>
  )
}

export default App
