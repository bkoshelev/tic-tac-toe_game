FROM node:alpine as build

WORKDIR /build
COPY package.json /build/
RUN npm i
COPY . .
RUN npm run build-storybook

FROM nginx:alpine
COPY --from=build /build/storybook-static /usr/share/nginx/html