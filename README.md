# About the project

This is the code I wrote following the [Thinkster IO](https://thinkster.io/) tutorial on building a Medium clone (blogging social network) using the MERN stack (Mongodb Express React and Node) and is based on the ([Thinkster IO Real World App](https://github.com/gothinkster/realworld), from the [Thinkster Full Stack tutorial series](https://thinkster.io/tutorials/fullstack) by [Thinkster IO](https://thinkster.io/)

This code is for the front end. [here is the tutorial](https://thinkster.io/tutorials/build-a-real-world-react-redux-application). The back end code I wrote can be found [here](https://github.com/Kgotso-Koete/ConduitApp-back-end).

# Description and features

## General functionality:

- Authenticate users via JWT (login/signup pages + logout button on settings page)
- CRU\* users (sign up & settings page - no deleting required)
- CRUD Articles
- CR\*D Comments on articles (no updating required)
- GET and display paginated lists of articles
- Favorite articles
- Follow other users

## The general page breakdown is as follows:

- Home page (URL: /#/ )
  - List of tags
  - List of articles pulled from either Feed, Global, or by Tag
  - Pagination for list of articles
- Sign in/Sign up pages (URL: /#/login, /#/register )
  - Use JWT (store the token in localStorage)
- Settings page (URL: /#/settings )
- Editor page to create/edit articles (URL: /#/editor, /#/editor/article-slug-here )
- Article page (URL: /#/article/article-slug-here )
  - Delete article button (only shown to article's author)
  - Render markdown from server client side
  - Comments section at bottom of page
  - Delete comment button (only shown to comment's author)
- Profile page (URL: /#/@username, /#/@username/favorites )
  - Show basic user info
  - List of articles populated from author's created articles or author's favorited articles

# How to run the code:

The app is deployed on [??](). Here is the [demo]().

## 1: Live API server

The live API server is running at [api site]() for any front end to make requests against and view. You can view the API spec [here]() which contains all routes & responses for the server.

## 2: Install packages

After cloning this repository, run `npm install`

## 3: Run project

Run `npm start`

## 4: Open it

Open up your browser at `http://localhost:3000`

# Application Structure

??

# Authentication

??

# Acknowledgements

Special thanks to [Thinkster IO](https://thinkster.io/) for a great tutorial. The Real World mother of all demo apps is very ambitious and is exactly what the world needs.
<br/>
<br/>

# License

The codebase is MIT licensed unless otherwise specified.

#

To be modified further by Kgotso Koete
<br/>
Johannesburg, November 2019
