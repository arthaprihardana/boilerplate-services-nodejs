FROM node:10.17.0-alpine

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm i --production
# RUN npm i
COPY .env .env
COPY dist/ .
COPY bin/ .
# COPY . .

CMD [ "npm run", "staging" ]