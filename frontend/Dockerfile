FROM node:argon

# Copy Config Files
ADD package.json bower.json .bowerrc gulpfile.js /usr/src/app/

# Install bower and gulp globally
RUN npm install bower -g && npm install gulp -g

# Install bower and npm dependencies; run gulp
RUN cd /usr/src/app && bower install --allow-root && npm install

# From here we load our application's code in, therefore the previous docker
# "layer" thats been cached will be used if possible
WORKDIR /usr/src/app 
COPY . /usr/src/app

# Build front-end
RUN gulp

# Link nodemodules from 'tmp' on host to application folder and run build
EXPOSE 3000
CMD npm start