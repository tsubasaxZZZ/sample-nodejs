FROM node:12

WORKDIR /app
COPY package*.json ./

RUN npm install
COPY . .
EXPOSE 3100
CMD [ "/app/dumb-init", "node", "app.js" ]
