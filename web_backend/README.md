# VIS Web Back-End
The API part of the VIS application.

Build with Java 8.

## Prerequisites

* [NetBeans](https://netbeans.org/) - This project was developed with NetBeans, which will run this project out of the box.

## Setup

* Use *hibernate.cfg.xml* to fill the details related to your MySql Connection.
* Use *ConsumerRequests.java* to alter *urlBase* variable according to your running VIS VM ip/address.

## Build - Important!
It is required to first build this project before running VIS Web with Docker. Docker uses *.war* file, which is 
by default located at `/target/VIS-1.0-SNAPSHOT.war`.

In case your IDE puts .war into a different directory or with different name you would need to alter `.war` file location from Dockerfile.

## Running
Simply build and run this project from the IDE of your choice.
