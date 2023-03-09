import React, { useEffect, useState } from "react";
import SearchBarYT from "./SearchBarYT";

const QueueList = () => {
  const [queue, setQueue] = useState(() => {
    const storedQueue = JSON.parse(localStorage.getItem("queue"));
    return storedQueue ?? [];
  });
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    // Retrieve the queue from local storage
    const storedQueue = localStorage.getItem("queue");
    if (storedQueue) {
      setQueue(JSON.parse(storedQueue));
    }
  }, []);

  useEffect(() => {
    // Save the queue to local storage whenever it changes
    localStorage.setItem("queue", JSON.stringify(queue));
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
      <h2>Queue List</h2>
      <div>
        <SearchBarYT setNewItem={setNewItem} />
        <button onClick={addItem}>Add Item</button>
      </div>
      <ul>
        {queue.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QueueList;
