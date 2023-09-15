import React, { useState, useEffect } from "react";
import TopicList from "./TopicList";

import "../styles/TopNavigationBar.scss";
import FavBadge from "./FavBadge";

import { ACTIONS } from '../hooks/useApplicationData';

const TopNavigation = ({ topics, dispatch, photosAreSelected }) => {

  const [searchTerm, setSearchTerm] = useState("");
  const [finalSearchTerm, setFinalSearchTerm] = useState("");

  useEffect(() => {
    fetch("/api/photos/"+finalSearchTerm)
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
  }, [finalSearchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>

      <span>
        <input value={searchTerm} onChange={handleInputChange} />
        <button
          style={{ marginLeft: "10px" }}
          onClick={() => {
            setFinalSearchTerm(searchTerm);
          }}
        >
          Search
        </button>
      </span>
      <TopicList topics={topics} dispatch={dispatch} />

      <FavBadge isFavPhotoExist={photosAreSelected} />
    </div>
  );
};

export default TopNavigation;
