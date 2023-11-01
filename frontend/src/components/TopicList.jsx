import React from "react";
import TopicListItem from './TopicListItem';
import "../styles/TopicList.scss";

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

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
