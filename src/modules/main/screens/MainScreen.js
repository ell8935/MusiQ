import ReactPlayer from "react-player";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import QueueList from "../components/QueueList";

const MainScreen = () => {
  const [playPause, setPlayPause] = useState(true);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const { queueList } = useSelector((state) => state.queueListData);

  const listURL = queueList.map((item) => item.url);

  const handlePlayPause = () => {
    setPlayPause(!playPause);
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
        url={listURL[currentVideoIndex]}
      />
      <QueueList handleManualPlay={handleManualPlay} />
      <button onClick={handlePlayPause}>play/pause</button>
      <button onClick={handleSkip}>Skip</button>
    </>
  );
};

export default MainScreen;
