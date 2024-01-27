FROM node

RUN mkdir -p /opt/app

WORKDIR /opt/app

COPY package*.json ./

COPY people.js ./

RUN npm install

EXPOSE 3000

CMD [ "node", "people.js"]