# CI Demo Project

A minimal Node.js project that demonstrates a Jenkins pipeline running automated tests and building a Docker image.

## Requirements

- Node.js 18 or later and npm
- Docker, for the optional image build
- Jenkins with a Node.js-capable agent, for the pipeline

## Run locally

```bash
npm ci
npm test
```

The Jest test currently checks one small example. The app prints a message when run:

```bash
npm start
```

## Build and run the container

```bash
docker build -t ci-demo-project:local .
docker run --rm ci-demo-project:local
```

The container prints the app message and exits.

## Jenkins pipeline

The [Jenkinsfile](Jenkinsfile) checks out the source, installs the exact dependency versions from `package-lock.json` with `npm ci`, and runs the Jest test suite. The pipeline reports success or failure in its post actions.

## Repository hygiene

Dependencies are installed from the lockfile and should not be committed. The repository ignores `node_modules/`, coverage output, and local environment files.
