FROM node:20

WORKDIR /usr/src/app

copy . .

COPY --chown=node:node . .

RUN npm ci --omit=dev

USER node
CMD npm start
