import './App.css'
import Videojs from './components/videojs'
import VideoJSPlayer from "./components/videojs-player";
import ImageKitBasicPlayer from "./components/imagekit-player";
import BasicVideoPlayer from "./components/video-player";

function App() {

  return (
    <div className="App">
      <VideoJSPlayer />

      {/* <video src='https://ik.imagekit.io/kduhx1jnl/yt/278750_medium.mp4?updatedAt=1751291850371?tr=h-250'
        height="250px"
        controls
        // autoPlay
        // muted
        // loop
        poster='https://ik.imagekit.io/kduhx1jnl/yt/278750_medium.mp4/ik-thumbnail.jpg?tr=so-5'
      >
        <track kind='subtitles' src='/english.vtt' srcLang='en' label='English' default />
        <track kind='subtitles' src='/hindi.vtt' srcLang='hi' label='Hindi' />
      </video> */}
    </div>
  )
}

export default App
