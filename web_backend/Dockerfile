FROM tomcat

COPY ./target/api-1.0-SNAPSHOT.war /usr/local/tomcat/webapps/api.war

ENV VIS_ENV docker

EXPOSE 8080

CMD ["catalina.sh", "run"]