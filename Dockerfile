FROM node:lts-alpine as build
LABEL org.opencontainers.image.source=https://github.com/bkoshelev/tic-tac-toe_game

WORKDIR /build
COPY package.json /build/
RUN npm i
COPY . .
RUN npm run build-storybook

FROM nginx:alpine
COPY --from=build /build/storybook-static /usr/share/nginx/html/game_documentation