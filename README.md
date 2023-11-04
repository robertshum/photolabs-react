# Photo Labs React App 📷

Users can view photos from different perspectives, built in React.

## Description

Users can click view all the photos on the home page.  Each photo shows meta data about the photographer and the location.  Photos can also be organized by categories, called topics and each photo can be favourited.  The user can also 'heart' a photo and this will be reflected on the navigation menu.  Users can also view photos at large resolutions, and display related photos in a pop-up modal.

The loading of data is done on the back-end via. server API calls to Postgres, all hosted locally.  The front end is a React app with SASS.

## Features

* Users can see view all photos on the landing page.
* Users can like/heart a photo.  Liked photos are persisted in the same instance across different perspectives.  (ex: photos that are 'liked', will also show up 'liked' in the modal or related photos).
* Users can view larger sizes of the photos and view related photos in the modal.

## Finished Strech Goals

* Clicking on related photos in the modal was never in the specs.  However it now load the correct picture into the modal, which then, loads a new series of related photos.
  * Added gradual scrolling to the top of the modal to let users know that there is a new focused picture in the modal.
  * Required to lookup photo array to repopulate related_photos.

## Challenges

* This project has gone through major refactorings, which was very time consuming.  Some major ones include:
  * Pushing as much business / decision logic up the component tree as much as possible.  Keep the parents smart and the children dumb (hopefully not like in real life).
  * Using useReducer and custom hooks to further separate components and decision making.  The React components should ideally just focus on making decisions on what to render, and nothing else.

## Branches

```
main
```
* demo ready.

Other branches are features / bugfixes / css touchups.

# Final Product

Main Landing Page:

!["Main Landing Page"](https://github.com/robertshum/photolabs-react/blob/main/docs/main_page_1.png)

Modal View showing related photos:

!["Main Landing Page"](https://github.com/robertshum/photolabs-react/blob/main/docs/modal_1.png)

## Dependencies

- Node
- NPM
- React
- Express
- Axios
- Postgres
- SASS


## Getting Started / Setup

1. Clone your repository onto your local device.
2. Install dependencies with `npm install` in each respective `/frontend` and `/backend`.
3. Start the services below:

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```
