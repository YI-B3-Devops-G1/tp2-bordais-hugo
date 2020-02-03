FROM node

WORKDIR /app

RUN mkdir -p /app

COPY package*.json ./

RUN npm install

COPY ./index.js /app/

EXPOSE 8080

CMD [ "node", "./index.js" ]