import React from "react";
import QueueList from "../components/QueueList";
import SearchBarYT from "../components/SearchBarYT";

const MainScreen = () => {
  const handleChange = () => {
    // global.player.loadVideoById("r-EJbQUmJ30");
    console.log(global.player);
  };
  const pauseMusic = () => {
    global.player.pauseVideo();
  };
  const playMusic = () => {
    global.player.playVideo();
  };

  // const skip = () => {
  //   global.player.PlayerState.ENDED
  //   if(global.player.PlayerState.ENDED){
  //       global.player.playVideo();

  //     }
  // };

  return (
    <>
      <div id="player"></div>
      <button onClick={handleChange}>getInfo</button>
      <button onClick={playMusic}>play</button>
      <button onClick={pauseMusic}>pauseMusic</button>
      <QueueList />
    </>
  );
};

export default MainScreen;
