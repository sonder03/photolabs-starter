import React from "react";
import TopicList from "./TopicList";

import "../styles/TopNavigationBar.scss";
import FavBadge from "./FavBadge";

const TopNavigation = ({fetchPhotoDataForTopic, topics, dispatch, photosAreSelected}) => { 

  return (    
   
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>

      <TopicList fetchPhotoDataForTopic={fetchPhotoDataForTopic} topics = {topics} dispatch={dispatch} />

      <FavBadge isFavPhotoExist = { photosAreSelected } />
    </div>
  );
};

export default TopNavigation;
