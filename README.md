
## Presentation

Held a [talk](https://www.mentimeter.com/s/35c99a50fe2dcd32e0a5cbae32a31201/d69aec3b2530) at [sthlm.js](https://www.meetup.com/sthlm-js/events/264720555/) at [Mentimeter](https://www.mentimeter.com/) where I went trough different kinds of testing and asked the audience if they and how test their code. 

## Start services

```bash
docker-compose up --build
```

then it's possible to omit `--build`

```bash
docker-compose up
```



## Setup

```bash
yarn
```


## Unit and integration tests

```bash
yarn test
```
or
```bash
yarn test:watch
```


## End-to-end

```bash
yarn test:e2e
```

be sure to have the services up and running



