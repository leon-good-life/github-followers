# Live demo

<https://main.d1yim8riwt89h4.amplifyapp.com/>

# Video of live demo

LEON-TODO

# Installation instructions

1. Create a personal access token at: <https://github.com/settings/tokens/new>.
2. Create `.env` file in the root folder. Paste the token to `.env` file in the root folder like this: ![dev_screenshot](/dev_screenshot.png). (For more info about usig enviroment variables in React: <https://create-react-app.dev/docs/adding-custom-environment-variables/>).
3. Run the following commands:

```
git clone https://github.com/leon-good-life/github-followers.git
yarn
yarn start
```

# Development notes

1. I generated the app boilerplate using `create-react-app` tool.
2. I used the official GitHub SDK library that is called `Octokit`.
3. I wrote generic components. They are located in `src/components/common`. I know that sometimes the overhead of generic code can make the code more complex. I always consult with my colleagues to find the right balance between too much generic and non-generic code.
4. I used `bootstrap` library for the UI. I saw in the instructions that I can use it.
