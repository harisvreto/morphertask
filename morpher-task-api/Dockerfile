FROM node:12.18.3-alpine as build
WORKDIR /usr/src/morpher-api
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 3000
CMD [ "node", "index.js" ]