FROM node:20
WORKDIR /usr/src/app
COPY . .
COPY --chown=node:node . .
RUN npm install
USER node
CMD ["npm", "run", "dev", "--", "--host"]

