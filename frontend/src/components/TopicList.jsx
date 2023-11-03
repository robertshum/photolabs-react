import React from "react";
import TopicListItem from './TopicListItem';
import "../styles/TopicList.scss";

const TopicList = (props) => {

  const listOfTopics = props.topics.map(item => {
    return (
      <TopicListItem
        key={item.id}
        slug={item.slug}
        title={item.title}>
      </TopicListItem>
    );
  });

  return (
    <div className="top-nav-bar__topic-list">
      {listOfTopics}
    </div>
  );
};

export default TopicList;
