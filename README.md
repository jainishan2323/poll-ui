# Poll UI :thumbsup:   :thumbsdown:

This UI allow users to vote their opinion on a question. :rocket:

#### What's been done:
1. Doughnut Chart to track user's response and updates dynamically.
2. Each Poll can currently be interacted multiple times. i.e user can cast his vote multiple times for a single question. Ideally this should be restricted via a backend.
3. Tracks total number of votes on a Poll. Each poll starts with default votes which is equivalent to the number of options. i.e can be either `2` or `6`.
4. User can switch between multiple poll questions.
5. The interacted poll state is saved - UI maintains state of vote casted on each poll.
6. Tested in `Chrome` browser only for now.

#### Pending:
1. `data.json` is currently converted into `data.ts`. No node server to fetch an api.
2. User data is purged on page refresh/ tab close. DB to store user data not integrated.

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
4. [react-chartjs-2](https://www.npmjs.com/package/react-chartjs-2) library for Charts.

## Demo -Desktop
![demo-poll-ui](https://user-images.githubusercontent.com/19609136/54083010-145d3280-4344-11e9-8b90-3518efc077d1.gif)


## Demo - Mobile
<img width="402" alt="Screenshot 2019-03-10 at 3 02 54 PM" src="https://user-images.githubusercontent.com/19609136/54083125-b0d40480-4345-11e9-82cd-860ff35ec90d.png">

## License
[MIT](https://choosealicense.com/licenses/mit/)
