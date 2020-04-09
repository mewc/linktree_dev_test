# linktr.ee-frontend-assessment

Front end application built for assessment at linktr.ee

## Getting started

have node.js and yarn installed

in the frontend app root directory (where package.json is) run:

1. `yarn install` to bring in deps
2. `yarn start` will enable the react server




## Outline

1. This app is built on React ^16.x
2. State management is `redux` with `ducks` methods and `thunk` middleware
3. Routed with `react-router` and `redux-actions` as the action bundler

Front end components are build in view/components
They are then references in the corres. containers for each "page"
Containers manage stage and interact with 


## Brief description and notes

`/public/data` has all the 'mock' data for each type of user.
For a front end task it is noted that all these sources may be aggregated serverside, and returned in client response for tree, also could be updated real time client side. I've opted to mock the multi call real time approach and get each seperately.
For shows and music, i've opted for a 'single list of this type' per linktree. Whether thats the case in real world is another question.

## contact 

m@mewc.info