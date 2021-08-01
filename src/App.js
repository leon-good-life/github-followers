import { useEffect, useState } from "react";
import { Octokit } from "octokit";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchUserForm from "./components/SearchUserForm";
import FollowersListWithPagination from "./components/FollowersListWithPagination";

const FollowersApp = () => {
  const [username, setUsername] = useState("leon-good-life");
  const [followers, setFollowers] = useState([]);
  useEffect(() => {
    setFollowers(null); // to set the loading indicator while loading
    const getFollowers = async () => {
      const octokit = new Octokit({ auth: process.env.REACT_APP_AUTH_KEY });
      await octokit.rest.users.getAuthenticated();
      octokit.rest.users
        .listFollowersForUser({
          username,
        })
        .then((response) => setFollowers(response.data));
    };
    getFollowers();
  }, [username]);

  return (
    <div className="container">
      <SearchUserForm {...{ setUsername, username }} />
      {followers === null ? (
        "Loading..."
      ) : (
        <FollowersListWithPagination {...{ followers, setUsername }} />
      )}
    </div>
  );
};

export default FollowersApp;
