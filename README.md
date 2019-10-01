# Selenium cludrun node.js API

## Build locally

Prerequisites:

- Docker
- git

1. clone repo

```sh
$ git clone https://github.com/2b1q/selenium-cloudrun.git
```

2. build and run stack using docker-composer

```sh
$ cd selenium-cloudrun
$ docker-compose up

```

3. to stop all stack containers press "CTRL+C"

4. remove all containers

```sh
docker-compose down
```

## test

```sh
$ curl -i -X GET http://localhost:8080/api/run
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 28
ETag: W/"1c-d2E3os+0JD2SQ+WbEl4TrRqZqvY"
Date: Tue, 01 Oct 2019 05:45:28 GMT
Connection: keep-alive

{"result":"done","rtt":7312}
```

## CD/CI cloudrun

Build, PUSH, deploy in google cloudrun knative

```sh
$ cd selenium-cloudrun
$ gcloud builds submit --tag gcr.io/seleniumcloudrun/selenode
$ gcloud beta run deploy --image gcr.io/seleniumcloudrun/selenode --platform managed

```
