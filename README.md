## Video of live demo

## Updated version

<https://www.loom.com/share/6e7d585f580941a28fe49e1f6776982a>

### Previous version

<https://www.loom.com/share/2c44fb49f7fd48aa842604729ce229c3>

## Live demo

<https://main.d1yim8riwt89h4.amplifyapp.com/>

## Installation instructions

1. Clone the repository:

```bash
git clone https://github.com/leon-good-life/github-followers.git
```

2. Create a personal access token at: <https://github.com/settings/tokens/new>.
3. Create `.env` file in the root folder.
4. Paste the token to `.env` file in the root folder like this: ![dev_screenshot](/dev_screenshot.png).

(For more info about usig enviroment variables in React: <https://create-react-app.dev/docs/adding-custom-environment-variables/>).

5. Run the following commands:

```bash
yarn
yarn start
```

# Development notes

1. I updated the app, now it features Sort feature, Items-Per-Page DropDown. I added Redux, TypeScript, GraphQL.
2. I generated the app boilerplate using `create-react-app` tool with `typescript-redux` preset.
3. I used the official GitHub SDK library that is called `Octokit`. I used the `GraphQL API`.
4. I wrote generic components. They are located in `src/components`. I know that sometimes the overhead of generic code can make the code more complex. When I'm working, I always consult with my colleagues to find the right balance between too much generic and non-generic code.
5. I used `bootstrap` library for the UI. I saw in the instructions that I can use it.
