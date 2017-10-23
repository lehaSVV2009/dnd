# Dungeons and Dragons app

Web app for manipulating character sheets in Dungeons and Dragons

## Getting Started

<a href="http://dungeons-and-dragons.tk" target="_blank">Live demo</a>

Have fun :smile:

These features are available:

1. Show character info (profile, current condition, skills and characteristics, talents).
2. Update character condition (experience, health, hill etc.)
3. Increment counter of used talents.
4. Change localization (add `?lng=en`, `?lng=de` or `?lng=ru` to query param).

### Prerequisites

```
# DB
brew install mongodb 
# API
brew cask install java
# Web
brew install yarn
```

### Installing

Configurations of `API`-`Database` connection are located in `api/src/main/resources/application.yml`.

Configurations of `Client`-`API` connection are located in `web/.env`.

```
git clone https://github.com/lehaSVV2009/dnd.git
```

Run Database (MongoDB)
```
mongodb
```

Build and run API (Spring Boot)
```
./gradlew bootRun
```

Build and run web-client app (ReactJS)
```
cd web
yarn start
```
or 
```
cd web
npm i
```

Open following links:
* API - `localhost:8080`
* API Swagger UI - `localhost:8080/swagger-ui.html`
* Web Client - `localhost:3000`

## Running the tests

### API smoke tests

```
./gradlew test
```

### Web client unit tests

```
cd web
yarn test
```

## Deployment

See `.travis.yml`
Deploy statics on AWS S3
Deploy API docker images on AWS EC2

```
./gradlew build

cd web
yarn build

cd ..
docker-compose up
```

Docker images:
* API - https://hub.docker.com/r/lehasvv2009/dnd-api/
* Client - https://hub.docker.com/r/lehasvv2009/dnd-web/

Docker image with API and Database (not perfect...) is deployed on AWS EC2.
Web statics is deployed on AWS S3.

## Built With

* [Travis](https://travis-ci.org/) CI and deployment 
* [Gradle](https://gradle.org/) builds API
* [Yarn](https://yarnpkg.com/) builds web client
* [Docker](https://www.docker.com/) builds images to deploy

## Contributing

Help wanted :smile:

If you want to contribute - just create issues and/or pull requests and let's discuss there. No hard rules.

## Versioning

`0.1.0`

No stress about versioning :smile:

Application is still too small for it.

## Authors

**Alex Soroka** - https://github.com/lehaSVV2009

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

Great thanks [Katerina Draenkova](https://github.com/KaterinaDraenkova) for inspiration!
