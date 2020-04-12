# Linktree backend task

Michael Carters work on the Backend task for linktree. Requirements are in the directory above.

TDD express server in javascript and mock services.

## Getting Started

1. Have Node installed (latest is fine, I ran 12);
2. `yarn install` to setup deps
3. Run the dev server `yarn dev` so the tests can hit the mock endpoints. This should be port 3333 but just confirm (and then update some links in `app.test.specs.js`)
4. in a new terminal, lets run the unit tests `yarn test`
5. Watch it run an succeed. 
6. Push in the postman collection and test responses for yourself. `./linktree.postman_collection.json` (keep `yarn dev` running)


## Tech Overview


Node express service that handles the "mock" creation and getting of resources for a "mock" linktree consumer (client).

Test Driven Development with chai, mocha, supertest all found in the `tests` directory. Test coverage monitored with instanbul/nyc.

Multi-environment setup for dev, test and production of env, debug and endpoints.

Validation of input centered around validating against mongoose Model which we setup.

When adding new links, you can extend an existing model (ie classic) or create a new one with all validation still in place).

Custom errors are throughout (`util/errors`) and thrown where required that are caught either at the controller level, or at the middleware level (depending on type) and output to the client.

Db integration is ready to be expanded on, currently it just hits a file that pretends to write to a file/db, and always returns true. Naturally you'd have a lot of db related error responses to handle here. 

Providers are the 3rd parties that we would integrate with. Depending on whom, API keys and other auth may be required. `util/providers` is setup to allow infinite integrations with a single entry point that will handle the rest. 

Mock endpoint is quite barebones but will serve as required for validating links. when GET is called on a linktree for a user, ideally we'd make a call in that time to hit a the provider with the, say, events status (soldout/available).


## Author

m@mewc.info

