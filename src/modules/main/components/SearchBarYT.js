import axios from "axios";
import React, { useEffect, useState } from "react";
import useDebounce from "../../../shared/hooks/useDebounce";

function SearchBarYT({ setNewItem }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const debouncedInputValue = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedInputValue) {
      autoComplete(debouncedInputValue);
    }
  }, [debouncedInputValue]);

  const autoComplete = async (query) => {
    if (query) {
      const { data } = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=AIzaSyBJZnCO6LQLXEIuTbWnV8QN-B-hnNHIP2g`
      );
      setResults(data.items);
    } else {
      setResults([]);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && results.length > 0) {
      const youTubeVideoId = results[0].id.videoId;
      const youTubeVideoTitle = results[0].snippet.title;
      setNewItem(youTubeVideoTitle);
    }
  };

  const handleResultClick = (title) => {
    const youTubeVideoTitle = title;
    setNewItem(youTubeVideoTitle);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {results.map((result) => (
        <div
          key={result.id.videoId}
          onClick={() => handleResultClick(result.snippet.title)}
        >
          {result.snippet.title}
        </div>
      ))}
    </div>
  );
}

export default SearchBarYT;
