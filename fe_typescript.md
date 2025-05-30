# CTT Exercise - Frontend Typescript

## Intro

The goal of this exercise is to assess your skill to code a single page application (SPA), following industry best practices.

This exercise reflects the work you will be doing if chosen to work with us.

## Overview

1. Create an SPA that has the following functionalities:

- Show a list of products (obtained from an API call)
- Allow CRUD operations on the entity product (performed by calling an API)

2. The application should manage state to minimize the number of requests made to the API

3. The canonical schema of the product is

```json
{
"id": string[36] (uuid),
"stock": int,
"description": string,
"categories": Array<string[36]>,
"price": float
}
```

4. The application should have a local development environment using Docker and Docker Compose

## Instructions

### Setup

1. The code needs to be done using `Typescript`, `React` and `Redux`

2. The only 3rd party dependencies allowed, but not mandatory, are:

- React-Redux
- Webpack (including necessary loaders)
- Testing libraries
  <br>
  **NOTE:** This means no `create-react-app`, no `reduxjs/toolkit` or other abstraction layers on top of React or Redux. Use vanilla React and Redux.

3. Use Github as the version control tool.

4. Use Github Actions as the pipeline tool.

5. If needed, create a [Github account](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github).

6. Create a repository, in the GitHub account of step 5, for the application code.

### Development method

1. Use Test Driven Development (TDD).

2. Use Trunk Based Development (TBD).

### What we expect

1. Your repo to contain all the files needed to run the exercise.

2. The repo to contain a file named "README.md" with:

- Instructions to run the exercise locally.
- Any assumptions you made.
- Any improvements you would make if this was a production product.
