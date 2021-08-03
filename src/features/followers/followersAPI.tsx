import { graphql } from "@octokit/graphql";

interface Follower {
  id: string;
  login: string;
}

interface Response {
  user: {
    followers: {
      nodes: Follower[];
    };
  };
}

export const fetchFollowers = async (username: string) => {
  const response: Response = await graphql(
    `
        {
          user(login: "${username}") {
            followers(first: 100) {
              nodes {
                login
                id
              }
            }
          }
        }
      `,
    {
      headers: {
        authorization: `token ${process.env.REACT_APP_AUTH_KEY}`,
      },
    }
  );
  return response.user.followers.nodes;
};
