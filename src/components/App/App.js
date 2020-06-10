import React from 'react';
import ReactDOM from 'react-dom';
import { Video } from '../Video/Video';
import { Menu } from '../Menu/Menu';
import Antelope from './videos/react_video-antelope.mp4';
import Snail from './videos/react_video-snail.mp4';
import Cat from './videos/react_video-cat.mp4';
import Spider from './videos/react_video-spider.mp4';


const VIDEOS = {
  antelope: Antelope,
  snail: Snail,
  cat: Cat,
  spider: Spider
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { src: VIDEOS.antelope };
    this.chooseVideo = this.chooseVideo.bind(this);
  }
  
  chooseVideo(newVideo) {
    this.setState({
      src: VIDEOS[newVideo]
    });
  }
  
  render() {
    return (
      <div>
        <h1>Auto-vPlayer</h1>
        <Menu chooseVideo={this.chooseVideo}/>
        <Video src={this.state.src}/>
      </div>
    );
  }
}

export default App;