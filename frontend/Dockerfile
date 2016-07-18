FROM node:argon

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
ADD package.json /tmp/package.json
ADD bower.json /usr/src/app/
ADD .bowerrc /usr/src/app/

RUN npm install bower -g
RUN cd /usr/src/app && bower install --allow-root

RUN cd /tmp && npm install && mkdir -p /usr/src/app/node_modules/
RUN cp -a /tmp/node_modules /usr/src/app/

# From here we load our application's code in, therefore the previous docker
# "layer" thats been cached will be used if possible
WORKDIR /usr/src/app 
ADD . /usr/src/app

# Link nodemodules from 'tmp' on host to application folder and run build
EXPOSE 3000
CMD npm start