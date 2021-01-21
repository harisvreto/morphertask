FROM node:12.18.3-alpine AS build
WORKDIR /usr/src/morpher-app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:1.19.0-alpine AS prod-stage
COPY --from=build /usr/src/morpher-app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]