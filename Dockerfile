FROM node:alpine as build

WORKDIR /build
COPY package.json /build/
RUN npm ci
COPY . .
RUN npm run build-storybook

FROM nginx:alpine
COPY --from=build /build/storybook-static /usr/share/nginx/html