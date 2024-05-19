FROM node:18

COPY package*.json ./

USER node

RUN npm install

COPY . .

EXPOSE 8888

CMD [ "node", "src/server.js" ]