---
path: "/gatsby-jest-testing-spinup"
title: "Gatsby: Testing Gatsby with Jest Spinup"
date: "2020-05-28"
---

## Setting up environment

- `npm install --save-dev jest babel-jest react-test-renderer babel-preset-gatsby identity-obj-proxy` - `babel-jest` and `babel-preset-gatsby` 'ensure that the babel preset(s) that are used match what are used internally for your Gatsby site.'

## Create config file for Jest

- Gatsby handles its own Babel config
- Must manually tell Jest to use `babel-jest`
- Easiest way to do this is through a `jest-config.js`

```javascript
module.exports = {
  transform: {
    "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`,
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/loadershim.js`],
}
```

- `transform` section tells Jest that `js` and `jsx` files need to be transformed using `jest-preprocess.js` file in project root

```javascript
const babelOptions = {
  presets: ["babel-preset-gatsby"],
}

module.exports = require("babel-jest").createTransformer(babelOptions)
```

- `moduleNameMapper` tells Jest how to handle imports - Main concern here is mocking static file imports because Jest can't handle them. - The mock is a dummy module used instead of the real module inside of tests
- `identity-obj-proxy` is used to mock CSS stylesheets - For all other assets we use a manual mock called `file-mock.js` in a `__mocks__` dir at the project root - I'm not sure I understand what role this file actually plays. Seems like it's just exporting something that does nothing.
  `javascript module.exports = "test-file-stub"`
- `testPathIgnorePatterns` tells Jest to ignore any tests in `node_modules` or `.cache` dirs
- `transformIgnorePatterns` is required because Gatsby includes untranspiled ES6 code. By default Jest doesn't try to transform code inside `node_modules`, so we'll get a `SyntaxError` at runtime. - "This is because gatsby-browser-entry.js isn’t being transpiled before running in Jest. You can fix this by changing the default transformIgnorePatterns to exclude the gatsby module."
- `globals` sets `__PATH_PREFIX__` which is normally set by Gatsby, and is required by some components - I'm interested in which components require this.
- `testURL` must be set if using <Jest 23.5 because some DOM APIs like `localStorage` don't work well with the default value (`about:blank`)
- `setupFiles` array is a list of files that will be included before all tests are run. - We use `loadershim.js` to include `jest.fn()` on a global loader object?

```javascript
global.___loader = {
  enqueue: jest.fn(),
}
```

## Mock Gatsby

```javascript
const React = require("react")
const gatsby = jest.requireActual("gatsby")

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
    ({
      activeClassName,
      activeStyle,
      getProps,
      innerRef,
      partiallyActive,
      ref,
      replace,
      to,
      ...rest
    }) =>
      React.createElement("a", {
        ...rest,
        href: to,
      })
  ),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn(),
}
```

- This mocks the `graphql` function and the `Link` and `StaticQuery` components that are exportsrom the `gatsby` package.

## Writing Tests

- Can either use a \_\_tests\_\_ directory or colocate with the components - I tend to use a separate directory unless the project is very large and each component lives in its own directory.
- Use either the extension `spec.js` or `.test.js` for test files

### Example Snapshot Test

```javascript
import React from "react"
import renderer from "react-test-renderer"

import Header from "../header"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Header siteTitle="Default Starter" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
```

- This is a snapshot test using `react-test-renderer` to render the component
- On first run, generates a snapshot of the component - Snapshots are generated in a \_\_snapshots\_\_ directory below our \_\_tests\_\_ directory
- On subsequent runs, compares future snapshots against the original - This allows us to quickly check for regressions and to quickly recognize changes that have occured with our ouput
- Snapshots are JSON representations of our components - For this reason, snapshots should be checked into VCS
- To update snapshots, run the test with a `-u` flag

## Running Tests

- If it does not already exist (it should, by default) create a `test` script in `package.json`

```json
"scripts": {
    "test": "jest"
  }
```

- Run `npm test --watch` to run Jest in watch mode
- Run `npm test -u` to update snapshots

## Using TypeScript

- Update the `transform` in `jest.config.js` to target `ts` and `tsx` files as well - `"^.+\\.[jt]sx?$": '<rootDir>/jest-preprocess.js'`
- Update `jest.preprocess.js` with the `@babel/preset-typescript`

```javascript
const babelOptions = {
  presets: ["babel-preset-gatsby", "@babel/preset-typescript"],
}
```

## Other Resources

- [Gatsby Babel config guide](https://www.gatsbyjs.org/docs/babel)
- [Jest docs](https://jestjs.io/docs/en/getting-started)
- [Full unit testing suite example using `@testing-library/react`](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-jest)
