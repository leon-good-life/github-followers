import { useCallback, useEffect } from "react";
import List from "../../components/List/List";
import { ItemData } from "../../components/List/interfaces";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  fetchFollowersAsync,
  selectFollowers,
  selectFollowersStatus,
  sortFollowers,
} from "./followersSlice";

interface Follower {
  id: string;
  login: string;
}

interface FollowersListProps {
  username: string;
  setUsername: (username: string) => void;
}

const FollowersList = ({ username, setUsername }: FollowersListProps) => {
  const followers = useAppSelector(selectFollowers);
  const followersStatus = useAppSelector(selectFollowersStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFollowersAsync(username));
  }, [username, dispatch]);

  const onItemClick = useCallback(
    (itemData: ItemData) => {
      setUsername(itemData.displayName);
    },
    [setUsername]
  );
  const allItems: ItemData[] = followers.map((follower: Follower) => {
    return {
      key: follower.id,
      displayName: follower.login,
    };
  });
  const itemsName = "followers";

  if (followersStatus === "loading") {
    return <div>Loading...</div>;
  }
  const onSort = () => {
    dispatch(sortFollowers());
  };
  return <List {...{ allItems, onItemClick, itemsName, onSort }} />;
};

export default FollowersList;
