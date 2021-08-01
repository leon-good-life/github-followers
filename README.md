# Live demo

LEON-TODO

# Video of live demo

LEON-TODO

# Installation instructions

```
git clone repo_url
yarn
yarn start
```

# Development notes

1. I generated the app boilerplate using `create-react-app` tool.
2. I generated an authentication token for GitHub. I generated the token with limited access, so I don't worry about publishing it. It can be changed to your token in `src/consts.js`. You can generate a token in the following URL: [].
3. I used the official GitHub SDK library that is called `Octokit`.
4. I wrote generic components. They are located in `src/components/common`. I know that sometimes the overhead of generic code can make the code more complex. I always consult with my colleagues to find the right balance between too much generic and non-generic code.
5. I used `bootstrap` library for the UI. I saw in the instructions that I can use it.
