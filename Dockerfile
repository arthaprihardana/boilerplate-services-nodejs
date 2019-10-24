FROM node:10.17.0-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i --production
COPY .env .
COPY dist/ .
COPY bin/ .

CMD [ "npm run", "staging" ]