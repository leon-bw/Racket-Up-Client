# Racket Up

It is a platform to help connect individuals who want to keep active and meet up to play Tennis. When a user signs up you state your skill level and times you're available to play.

### Problem

Unlike some other sports tennis can sometimes be a bit challenging to find other people to play with especially if friends we know are unavailable or you happen to move to a new location and still want to continue playing the sport you love and want to find local people in your area to play or compete with or maintain an active lifestyle.

### Get Started

To get started

- Clone gitHub repository of Racket Up Client and Racket Up Server
- On both client and server, install NPM packages with npm install
- Create a database in MySQL, on server run npx knex migrate:latest then npx knex seed:run
- Create .env file on the client and server side using the .env.example file provided as a guide, Client side e.g. REACT_APP_API_OPEN_AI_KEY = yourOpenAIKey, Please note when specifying the REACT_APP_API_BASE_URL, make sure to include /api at the end of the URL e.g. REACT_APP_API_BASE_URL = http://localhost:5050/api Server side e.g. PORT = yourport, DB_NAME = nameofdatabse
Launch the application with npm start in the client and node index.js in the server

### Features

Recently one of my good friends I play squash with got injured so he is going to be unavailable for 6 - 8 weeks, luckily I was able to sign up to Racket Up and find a few people in my area, with a similar skill level to me also looking for a game! I know what times they're available to play and I can plan that with my schedule and shoot them a message so we can sort out which venue we'll play at. Now I meet up weekly and I'm looking forward to introducing my friend Casper to Racket Up when he's all better and ready to get back on the court! 

A user should

- Sign Up: with Email/username Password form
- Log in to profile, add skill level, times available to play
- Search to find locals sports clubs/ venues with fellow Racket Up users


## Implementation

### Tech Stack

#### Frontend
- React
- React-router
- SASS
- Axios
- Framer Motion

#### Backend
- Express
- MySQL2
- Knex
- JsonWebToken
- Bycrypt
- Dotenv
- Cors


### Custom API

Here are the endpoints for the API

POST /api/register
POST /api/login
POST /api/match
GET /api/user
GET /api/matches
DELETE /api/match/:id
PATCH /api/match/:id


### Sitemap

- Home Page
- Sign Up Page
- Profile page
- Find a game/venues

### Mockups

Desktop
<img width="607" alt="Home Page Desktop" src="https://github.com/leon-bw/Racket-Up/assets/63013100/57381fbc-0d4e-4f0f-b5f6-df3011f564bd">
<img width="1293" alt="Signup/Log In Page Mobile" src="https://github.com/leon-bw/Racket-Up/assets/63013100/a66991cb-7cca-4c5d-93f8-3e1a0d1fac66">

Mobile
<img width="172" alt="Home Page Mobile" src="https://github.com/leon-bw/Racket-Up/assets/63013100/8259b861-dbda-4aec-a531-dafcd5b21d5d">
<img width="350" alt="Signup/Log In Page Mobile" src="https://github.com/leon-bw/Racket-Up/assets/63013100/a2e67622-0a41-458a-9d2a-fffa513a6f08">

### Data

Data Relationship
<img width="1101" alt="Screenshot 2024-04-01 at 18 05 31" src="https://github.com/leon-bw/Racket-Up/assets/63013100/df92df9b-e3f7-45ec-b519-ab2b71b74290">


### Endpoints

- Home Page /
- Sign up /signup
- Log in /login
- profile /user1234
- Find a game /search-game

### Auth

Users will log in, with a username and password and once logged in will see a user profile specific to themselves, selected racket sport, skill level and calendar and time to search for   available games 

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

- Create a rough template/outline of pages with minimal styling to create a structure for the application
    - Home Page
    - Log In
    - Profile Page

- Develop user random api/fake to simulate data and use routing to connect frontend and see
- Work on frontend features a user will do such as finding a game, finding someone who is available to play, or at the same skill level, leaving a review of a court/venue


## Nice-to-haves

- An area in the profile for recommendations from users for users about equipment or training routines
- Chat/Add: Add or speak with users/friends before or after a game to arrange a time