Install json-server with

Steps

- npm i -g json-server
- json-server --port 3000 --watch db.json
- docker-compose up
- Configurate the environment
  - export PUBSUB_EMULATOR_HOST=localhost:8080
  - export PUBSUB_PROJECT_ID=abc
- Then run the create-config.js file
- Then start the server to listen events
- Emit events running emitter.js

Note: Use json-server is optional but it turns easier to emit events and configure it as a json
