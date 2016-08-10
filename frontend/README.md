# VIS Web Front-End
The UI part of the VIS application. An interface to manage OpenVZ containers through VIS API.

Build with AngularJS 1.5.

## Prerequisites

* [nodejs](https://nodejs.org/)
* [gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
* [bower](https://bower.io/)

## Setup

    npm install
    bower install

## Devlopment
### Run
To run with *http-server*:

    npm start

## Production
### Build
To build application using gulp to `./dist`

    gulp
    
Build includes minification of JS and CSS, compression of images and using only main bower files.

### Run
There are two options to run application in production mode. If you run command below it will start npm `http server` to serve `./dist`.

    npm run start_prod
    
If you aim to start prod server for long term you can run:

    npm run start_forever_prod
    
This will use [foreverjs](https://github.com/foreverjs/forever) and continue running http server even if you close terminal session.
