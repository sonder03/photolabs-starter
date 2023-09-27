import React, { useEffect } from "react";
import "../styles/TopicListItem.scss"; // Import the stylesheet

import { ACTIONS } from '../hooks/useApplicationData';

const TopicListItem = ({fetchPhotoDataForTopic, topic }) => {

  const handleItemClick = () => {
    
    fetchPhotoDataForTopic(topic.id)    
  };

  return (
    <div className="topic-list__item" onClick={handleItemClick}>
      <span>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;


