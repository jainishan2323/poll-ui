# Poll UI :thumbsup:   :thumbsdown:

This UI allow users to vote their opinion regarding on a question. :rocket:

#### What's been done:
1. Chart to track user's response and updates dynamically.
2. Single Poll can currently me interacted multiple times, i.e User can vote his multiple times for a single question. Ideally this should be restricted via a backend.
3. Tracks total number of votes on a Poll. Each poll starts with default votes which is equivalent to the number of options. i.e can be either `2` or `6`.
4. User can switch between multiple poll questions.
5. The interacted poll state is saved.
6. Tested in `Chrome` browser only for now.

## Installation

##### Pre-Requirements:
- Node.js
- Git.

1. Checkout the `master` branch:

2. Install the node_modules
```bash
npm install
```

3. Then start the server using
```bash
npm start
```

## Tech stack

1. Built on `React` with `Typescript`.
2. [styled-components](https://www.styled-components.com/) used for styling.
3. Webpack v4 used for build process.

## Demo
![demo-poll-ui](https://user-images.githubusercontent.com/19609136/54083010-145d3280-4344-11e9-8b90-3518efc077d1.gif)


## License
[MIT](https://choosealicense.com/licenses/mit/)
