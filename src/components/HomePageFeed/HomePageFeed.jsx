import React from "react";
import "./HomePageFeed.scss";
import { useFeedData } from "util/db";
import HomePageFeedCard from "components/HomePageFeedCard/HomePageFeedCard";

const HomePageFeed = () => {
  const feedQuery = useFeedData();

  return (
    <div className="home-page-feed">
      <div className="container">
        <h3 className="title is-5">Latest Posts</h3>
        {!(feedQuery.data && feedQuery.data.length) && (
          <div className="empty-feed">There are nothing here right now</div>
        )}
        <div className="feed-card-wrap">
          {feedQuery.data &&
            feedQuery.data.map((data) => (
              <HomePageFeedCard key={data.id} data={data} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomePageFeed;
