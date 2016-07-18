# VIS Web

This is the repository for the VIS (Virtual Instant Server) web application, which uses Docker. This is only a part of application. Follow this [link](https://github.com/Eficode/virtualinstantserver-host) to access VIS VM.

## Introduction
The purpose of VIS project is managing OpenVZ containers. However, the underlying virtualization technology is not of a big importance.

What's important is that you can install and run this application and [VIS VM](https://github.com/Eficode/virtualinstantserver-host) on your Linux server and you will be able to largely change your development proccesses.

With containers running on your server in a local network you can easily ssh to them and manipulate. Every container is an ordinary Linux dist and you can do all your Linux stuff just like if it was a physical machine. However, you also get ultra portability of containers - ability to make snapshot, launch and stop them and etc.

It is also possible to set a DNS server (not part of this software) and make it possible to easily access containers outside your local network. Than you will have your own micro cloud based development environment, which could be set in no time and which costs pretty much nothing (you probably already have infrastructure, right?).

### Prerequisites

* [Docker](https://docs.docker.com/engine/installation/)
* [Docker Compose](https://docs.docker.com/compose/) (Only for Linux Users)

## Included Projects
-   [Db](../../tree/master/db) - Dump of MySQL database with some basic data.
-   [frontend](../../tree/master/frontend) - AngularJS 1.5 application. The UI to manage containers.
-   [web_backend](../../tree/master/web_backend) - Our API that hanldes requests from UI and sends requests to [VIS VM](https://github.com/Eficode/virtualinstantserver-host).

## Build

Please, first check web_backend [Readme](../../tree/master/web_backend/README.md).

Then, run in the root of this project.
    
    docker-compose build

To run back-end and front-end without docker, see *README.md* in folders.

### Running

To run Docker containers.

    docker-compose up -d

### Accessing
Typing the command below, you can link container's bash to local shell and access the container. Example below is for backend.

    docker exec -it vis_web_webbackend_1 bash


## Developing in Docker
Front-End can be developed using Docker. 

    docker-compose up -d

Front-End uses *http-server* to serve the app. You can find your application running on **port 8080**. 
When you change your code in local directory, code inside Docker container will get updated and served by *http-server*.

## Contributors

-   [Roman Dunets](https://github.com/romandunets)
-   [Yevgen Zinchenko] (https://github.com/plushkinqt)
-   [Oleg Mironov] (https://github.com/allhaker)
-   Daniel Suni
