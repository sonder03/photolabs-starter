import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss"; // Import the stylesheet


const TopicList = ({fetchPhotoDataForTopic, topics, dispatch}) => {
  return (
    //console.log(topics)

    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <a key={topic.id} href={`#${topic.slug}`} className="topic-list__link">
          <TopicListItem fetchPhotoDataForTopic={fetchPhotoDataForTopic} topic={topic} dispatch={dispatch} />
        </a>
      ))}
    </div>
  );
};
export default TopicList;

