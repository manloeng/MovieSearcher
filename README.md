# TMDb

A simple web app for The Movie DB written in Javascript

# The Mission

The 2 main user features that are currently included in this app are the ability to:

- Search for movies via the Discovery route
- See basic details of a movie

# How to run this app locally

## Step 1 - Setting up your own repository

Clone the repo:

```
git clone https://github.com/manloeng/MovieSearcher
```

Once you have cloned the repo, you should have the repo on your system.

You will need to install the required modules to run the app successfully.

## Step 2 - Installation

On your terminal you will want to run:

```
npm install
```

or

```
yarn
```

This will install all the modules that are listed in the package.json

## Step 3 - Update the secret.example.json

You will need to add your own API Key in order to access this app.
You can get this from signing up to The Movie DB:

https://www.themoviedb.org/settings/api

example:

```
"api_key": "1234abcd"
```

# Step 4 - Running on an Environment

Once you have the modules installed, you can run the app via npm/yarn depending on how you installed the dependencies:

```
npm start
```

or

```
yarn start
```

# Step 4 - Using the App

Once you have started the app, you will be taken straight to the app.

** Currently Only the discover route is available **

# Todo List

- Improve Styling mobile/ web app to correctly mimic wireframe
- Add tests using jest and enzyme
- Refactoring of code - Use Context to pass information around (ex - from discover to search bar component)
- Potential to add state management to cache data - Redux
- Populate the movie cards/items with movie data
- Improve performance - properly resize images returned using canvas?
- Add react-windows virtualise the down to speed up rendering of components - should only render the items that are on screen
- Convert bullet points to checkboxs - (was initially getting a null input err when using <input type="checkbox>)
- Apply colour scheme provided
