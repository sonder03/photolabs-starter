import React, { useEffect } from "react";
import "../styles/TopicListItem.scss"; // Import the stylesheet

import { ACTIONS } from '../hooks/useApplicationData';

const TopicListItem = ({ topic, dispatch }) => {

  const handleItemClick = () => {
    fetch("/api/topics/photos/"+topic.id)
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
  };

  return (
    <div className="topic-list__item" onClick={handleItemClick}>
      <span>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;


