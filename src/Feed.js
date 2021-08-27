import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://lh3.googleusercontent.com/ogw/ADea4I6tiP6DIa7vSQ0nrQm4SuhvaDeKip4Stbs-pu_vK5E=s83-c-mo"
        message="This is working"
        timestamp="This is a timestamp"
        username="ajaypradhan"
        image="https://lh3.googleusercontent.com/ogw/ADea4I6tiP6DIa7vSQ0nrQm4SuhvaDeKip4Stbs-pu_vK5E=s83-c-mo"
      />
      <Post
        profilePic="https://lh3.googleusercontent.com/ogw/ADea4I6tiP6DIa7vSQ0nrQm4SuhvaDeKip4Stbs-pu_vK5E=s83-c-mo"
        message="This is working"
        timestamp="This is a timestamp"
        username="ajaypradhan"
        image="https://lh3.googleusercontent.com/ogw/ADea4I6tiP6DIa7vSQ0nrQm4SuhvaDeKip4Stbs-pu_vK5E=s83-c-mo"
      />
    </div>
  );
}

export default Feed;
