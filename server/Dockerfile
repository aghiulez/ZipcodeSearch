
# BASE IMAGE 
FROM node:latest



# all subsequent actions should be taken from the directory /usr/src/app in your 
# image filesystem (never the host’s filesystem).
#WORKDIR /usr/src/app
WORKDIR /server/ 


# COPY the file package.json from your host to the present location (.) 
# the reason why this isnt separate (from copy . .) because it will only need to be run when the package dependencies change 
COPY package.json .

# RUN the command npm install inside your image filesystem (which will read package.json to 
# determine your app’s node dependencies, and install them)
RUN npm install --silent


# COPY in the rest of your app’s source code from your host to your image filesystem.
COPY . .


# ALLOWS CLIENT TO CONNECT TO SERVER?
EXPOSE 3001

# it’s saying that the containerized process that this image is meant to support is npm start.
CMD [ "npm", "start" ]


