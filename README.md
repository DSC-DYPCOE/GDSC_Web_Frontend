# Web RTC - Twitch clone

## Most up to date code is in restructure branch
<https://github.com/lishine/web-rtc/tree/restructure>

## Libraries
- Opentok api
- Chakra.ui toolkit
- easy-peasy store (redux)
- Fauna graphql serverless database
- Typescript
- Next.js
- React

## Features
- Unlimited streams and viewers
- Feed list updated with new streamers
- Sending gift to the stream
- Chat simulation

## Instructions
- Clone the repo
- Create Opentok account
  - create dev and prod project
  - fill .env with OPENTOK_PROJECT_SECRET, OPENTOK_PROJECT_API_KEY as in env-template
- Create Faunadb account
  - create dev and prod database
  - import scheme from db/scheme.gql
  - create dev and prod DB Secret
  - fill .env with FAUNA_DB_SECRET  as in env-template
- Create Vercel account
  - create a project from the repo
  - **every push from the repo will create a deploy**
  - create env variables in the admin panel: OPENTOK_PROJECT_API_KEY, OPENTOK_PROJECT_SECRET, FAUNA_DB_SECRET
- The password for the interface is in www/store/authModel.ts
- Install Develop
  - yarn
  - cd www && yarn
- Develop
  - cd www && yarn dev

## Demo
### Feed
![Feed](https://github.com/lishine/web-rtc/blob/master/screenshot-feed.jpg "Feed")
### Stream
![Stream](https://github.com/lishine/web-rtc/blob/master/screenshot-stream.gif "Stream")

## TODO
- show deployed version
- PWA
- snapshot from s3
- live preview
- scroll -> remove controls (fullscreen)
- catch react errors
- change map into json
- stream component reparenting
- nextjs - keep components mounted
- fix back button while streaming
- FQL
- Solve PWA POST error
- if stream err - reload it
- unite stores
