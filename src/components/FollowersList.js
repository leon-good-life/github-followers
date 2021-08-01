import React, { useCallback } from "react";
import List from "./common/List";

const FollowersList = ({ followersToRender, setUsername }) => {
  const onItemClick = useCallback(
    (itemData) => {
      setUsername(itemData.displayName);
    },
    [setUsername]
  );
  const itemsToRender = followersToRender.map((follower) => {
    return {
      key: follower.id,
      displayName: follower.login,
    };
  });
  return <List {...{ itemsToRender, onItemClick }} />;
};

export default FollowersList;
