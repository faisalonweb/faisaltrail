# Base image
FROM node:18-alpine

WORKDIR /app/client

COPY package*.json ./

RUN npm ci

COPY . ./

RUN npm run build

RUN rm -rf node_modules
RUN rm -rf src
