
# BASE IMAGE 
FROM node:latest


ENV HTTP_PROXY "http://127.0.0.1:3001"

# all subsequent actions should be taken from the directory /usr/src/app in your 
# image filesystem (never the host’s filesystem).
WORKDIR /usr/src/app

# COPY the file package.json from your host to the present location (.) 
# in your image (so in this case, to /usr/src/app/package.json)
# the reason why this isnt separate (from copy . .) because it will only need to be run when the package dependencies change 
COPY package.json .

# RUN the command npm install inside your image filesystem (which will read package.json to 
# determine your app’s node dependencies, and install them)
RUN npm install --silent


# COPY in the rest of your app’s source code from your host to your image filesystem.
COPY . .

# it’s saying that the containerized process that this image is meant to support is npm start.
CMD [ "npm", "start" ]


