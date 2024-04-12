# Racket Up

## Overview

It is a platform to help connect individuals who want to meet up and play Tennis, Squash or Badminton. When a user signs up you you say what sports you're interested in, your skill level, location and times you're available to play or meet up for a game. You can add and chat with friends, who you play with regularly. 

### Problem

This is a problem that myself and others have personally faced, growing up I used to play tennis but found it difficult to find other people to play with especially if friends were busy or out of town. Due to this difficulty I decided to playing football instead and no longer play tennis. It can also be useful if you move to a new location and want to find local people in your area to play or compete with, promte a healthy and active lifestyle to get you adn others out the house or if you travel around for work and like to play sport occasional.

### User Profile

Anyone looking to keep active, an individual into racket sports and looking to pick up a hobby or continue their passion for racket sports whenever they have some spare time.

### Features

Recently one of my good friends I play squash with got injured so he is going to be unavailable for 6 - 8 weeks, luckily I was able to sign up to Racket Up and find a few people in my area, with a similar skill level to me also looking for a game! I know what times they're available to play and I can plan that with my schedule and shoot them a message so we can sort out which venue we'll play at. Now I meet up weekly and I'm looking forward to introducing my friend Casper to Racket Up when he's all better and ready to get back on the court! 

A user should

- Sign Up: with Email/username Password form
- Log in to profile, add skill level, times available to play
- Search on Map to find locals sports clubs/ venues and also search for fellow Racket Up users in proximity
- Be able to leave a short review on venue/sport clubs


## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

#### Frontend
- React
- SCSS for styling
- May use Framer Motion for some animations for a dynamic user experience

#### Backend
- Node JS and Express
- Knex
- React router


### APIs

- Maps API to find local clubs for Tennis, Squash or Badminton OR Long/Lat to determine location data
- Possibly Random user API or Faker to simulate users on the platform

### Sitemap

- Home Page
- Sign Up Page
- Profile page
- Find a game/venues
- Chat Page

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
- Find a court /search-court

### Auth

Users will log in, with a username/email and password and once logged in will see a user profile specific to themselves, selected racket sport, skill level and timetable with available times selected

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

- Create a rough template/outline of pages with minimal styling to create a structure for the application
    - Home Page
    - Log In
    - Profile Page

- Develop user random api/fake to simulate data and use routing to connect frontend and see
- Work on frontend features a user will do such as finding a local court, finding someone who is available to play, or at the same skill level, leaving a review of a court/venue


## Nice-to-haves

- Could have a feature that allows users to post photos about their games
- An area in the profile for recommendations from users for users about equipment or training routines
- Chat/Add: Add or speak with users/friends before or after a game to arrange a time
- Users can also add rating and reviews for tennis locations/venues