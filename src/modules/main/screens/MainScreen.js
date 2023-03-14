import ReactPlayer from "react-player";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import QueueList from "../components/QueueList";

const MainScreen = () => {
  const [playPause, setPlayPause] = useState(true);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const { queueList } = useSelector((state) => state.queueListData);

  const listURL = queueList.map((item) => item.url);

  const handlePlayPause = (index) => {
    console.log(playPause);
    console.log(index);
    console.log(currentVideoIndex);
    if (index === currentVideoIndex) {
      setPlayPause(true);
    } else {
      setCurrentVideoIndex(index);
    }
  };

  const handleOnEnded = () => {
    setCurrentVideoIndex((prevIndex) => prevIndex + 1);
  };
  const handleManualPlay = (index) => {
    setCurrentVideoIndex(index);
  };
  const handleSkip = () => {
    handleOnEnded();
  };
  return (
    <>
      <ReactPlayer
        onEnded={handleOnEnded}
        playing={playPause}
        controls
        url={"https://soundcloud.com/shmh3xvzmzyw/0lu7v6w39wla"}
      />
      <QueueList
        handleManualPlay={handleManualPlay}
        handlePlayPause={handlePlayPause}
      />
      <button onClick={handlePlayPause}>play/pause</button>
      <button onClick={handleSkip}>Skip</button>
    </>
  );
};

export default MainScreen;
