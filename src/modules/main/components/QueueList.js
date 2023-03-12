import SearchBarYT from "./SearchBarYT";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { queueListData } from "../../../shared/hooks/redux/reducers/QueueListSlice";

const QueueList = ({ handleManualPlay }) => {
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
      setQueue([...queue, newItem]);
      setNewItem("");
    }
  };

  const removeItem = (index) => {
    setQueue((prevQueue) => prevQueue.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div>
        <SearchBarYT setNewItem={setNewItem} />
        <button onClick={addItem}>Add Item</button>
      </div>
      <h2>Queue List</h2>
      <ul>
        {queue.map((item, index) => (
          <li key={index}>
            {item.title}
            <br></br>
            {item.url}
            <button onClick={() => removeItem(index)}>Remove</button>
            <button onClick={() => handleManualPlay(index)}>PLAYSONG</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QueueList;
