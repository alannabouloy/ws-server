# Write Swiftly Server

This server is being build for the Write Swiftly Writing Prompt Song Generator App. It designed as an API of Taylor Swift's music with storytags added to songs to delineate where in traditional narrative structure those songs would fit.

## Tech Stack

This server is being built using Node.js and Express.js with a Postgresql database and Sequelize as an ORM.

## Getting Started

These are the steps that you would need to follow in order to get started using this server on a development environment. Currently this server is not deployed anywhere in production.

First step of course is to run a `yarn install` to get the dependencies you will need for this project.

### Scripts

Currently this application has only two scripts to run, `yarn start` will start the application, and `yarn test` will run the tests.

## Comments

You will notice comments on some of the code explaining the purpose for each line of code. This is part of a training series currently being developed for Substack called a Swiftie Introduction to Backend Development. The comments will appear in the commit where the code was initially added and removed in subsequent commits so that if you would like to follow along with the development process, you can look at the commit history and read what is being done.

## TDD

This application is being built using Test Driven Development, so tests will be developed prior to implementing code to fulfill them. I will release tests in a separat commit from the code that passes them.

## Roadmap

### Get basic server set up

The API will allow for an admin user to add new songs to DB with appropriate storytags assigned as well as an endpoint for fetching the song from the database which can be accessed by general public without credentials.

### Create algorithm

There are two options to the generating algorithm, one which focuses on returning three songs correlating to the beginning, middle, and end of a story, and one which returns 6 songs correlating to the three act narrative structure, including a hook, beginning plot point, midpoint, third plot point, climax, and closue. These songs will be randomly generated based on the storytags attached to them in the database, and will not repeat within the prompt. Both options will have an implementation created.

### Implement external API

There is a plan to implement Spotify's API in order to provide further details on the songs as well as album art and potentially allow for live listening and creating playlists based on the prompt.

This server is still in development and the README will be updated as further changes are made.
