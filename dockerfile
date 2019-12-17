

FROM node:latest 
# all subsequent actions should be taken from the directory /usr/src/app in your 
# image filesystem (never the host’s filesystem).
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN npm install
COPY . ./

# it’s saying that the containerized process that this image is meant to support is npm start.
CMD [ "npm", "start" ]
