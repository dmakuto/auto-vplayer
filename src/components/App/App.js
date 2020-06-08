import React from 'react';
import ReactDOM from 'react-dom';
import { Video } from '../Video/Video';
import { Menu } from '../Menu/Menu';

const VIDEOS = {
  antelope: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
  snail: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
  cat: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
  spider: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
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