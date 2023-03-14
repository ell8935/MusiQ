import SearchBarYT from "./SearchBarYT";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { queueListData } from "../../../shared/hooks/redux/reducers/QueueListSlice";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const QueueList = ({ handleManualPlay, handlePlayPause }) => {
  const dispatch = useDispatch();
  const { queueList } = useSelector((state) => state.queueListData);
  const [newItem, setNewItem] = useState("");

  const [queue, setQueue] = useState(() => {
    const storedQueue = queueList;

    return storedQueue ?? [];
  });

  useEffect(() => {
    setQueue(queueList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(queueListData(queue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queue]);

  const addItem = () => {
    if (newItem) {
      const itemExists = queue.find((item) => item.url === newItem.url);
      if (!itemExists) {
        setQueue([...queue, newItem]);
        setNewItem("");
      }
    }
  };

  const removeItem = (index) => {
    setQueue((prevQueue) => prevQueue.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div>
        <SearchBarYT setNewItem={setNewItem} />
        <button onClick={addItem}>Add Song</button>
      </div>
      <h2>Queue List</h2>
      <ul>
        {queue.map((item, index) => (
          <li key={index}>
            <IconButton onClick={() => handlePlayPause(index)}>
              <PlayArrowIcon />
            </IconButton>
            <IconButton onClick={() => removeItem(index)}>
              <DeleteIcon />
            </IconButton>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QueueList;
