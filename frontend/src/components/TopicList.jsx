import React from "react";
import TopicListItem from './TopicListItem';
import topics from '../mocks/topics';
import "../styles/TopicList.scss";

//Mock Data
const sampleDataForTopicList = topics;

const listOfTopics = sampleDataForTopicList.map(item => {
  return (
    <TopicListItem
      key={item.id}
      slug={item.slug}
      title={item.title}>
    </TopicListItem>
  );
});

const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      {listOfTopics}
    </div>
  );
};

export default TopicList;
