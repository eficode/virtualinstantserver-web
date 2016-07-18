FROM tomcat

ADD ./target/VIS-1.0-SNAPSHOT /usr/local/tomcat/webapps/

COPY ./target/VIS-1.0-SNAPSHOT.war /usr/local/tomcat/webapps/api.war

EXPOSE 8080

CMD ["catalina.sh", "run"]