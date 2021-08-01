import React, { useState } from "react";
import { ITEMS_PER_PAGE } from "../consts";
import { allItemsArrayToPageItemsArray } from "../utils";
import FollowersList from "./FollowersList";
import Pagination from "./common/Pagination";

const FollowersListWithPagination = ({ followers, setUsername }) => {
  const [selectedPageIndex, setSelectedPageIndex] = useState(1);
  const followersToRender = allItemsArrayToPageItemsArray(
    followers,
    selectedPageIndex,
    ITEMS_PER_PAGE
  );
  return (
    <React.Fragment>
      <FollowersList {...{ followersToRender, setUsername }} />
      <Pagination
        allItemsLength={followers.length}
        itemsPerPage={ITEMS_PER_PAGE}
        onPageSelect={setSelectedPageIndex}
        selectedPageIndex={selectedPageIndex}
      />
    </React.Fragment>
  );
};

export default FollowersListWithPagination;
