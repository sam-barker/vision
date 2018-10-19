[![CircleCI](https://circleci.com/gh/spbarker/vision/tree/master.svg?style=shield)](https://circleci.com/gh/spbarker/vision/tree/master) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Coverage Status](https://coveralls.io/repos/github/spbarker/vision/badge.svg?branch=master)](https://coveralls.io/github/spbarker/vision?branch=master) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# Vision
Pomodoro style timer for Mac OS written using Electron &amp; React!

# Getting Started
- `yarn start` will compile all of the necessary JS and run the electron application.
- `yarn js:lint` will lint the application.
- `yarn test:coverage` will run the unit tests.

# Linting
Linter of choice is [StandardJS](https://standardjs.com/).

# Installing the application locally
To build the app itself and install it to your applications run `yarn dist` and then open the `dmg` present in `dist/`.

# Contributing
## Commiting
All commit messages should be done through [Commitizen](https://github.com/commitizen/cz-cli),
which is configured to use the `@metahub/cz-conventional-commit` adapter. These are installed locally
through dev dependencies.

To commit through Commitizen, just run `yarn cm`, and follow the interactive prompt. This enforces proper semantic versioning and releasing with CI.

## Reviewing
`master` branch is protected and required two reviews to be merged.

## Testing
`pre-commit` and `pre-push` hooks have been set up using [husky](https://www.npmjs.com/package/husky) to enforce that unit tests and linting are both run at these points.

The test coverage is enforced at 100% across the board - no exceptions. All of the tests should pass with 100% coverage for a PR to even be considered for review.

## CI
The CI tool of choice is [CircleCI](https://circleci.com/) and runs on every pull request, not every commit however. The CI will run `yarn install`, `linting`, `unit tests`, and then finally a `JS build` to ensure that everything is in working order.

## Releasing
Once necessary functionality has been merged. You can release by running `yarn release`. The versioning is handled itself by a tool called [semantic-release](https://www.npmjs.com/package/semantic-release).
