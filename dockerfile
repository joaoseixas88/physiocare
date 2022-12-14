FROM node:alpine


WORKDIR /user/app


COPY package.json ./

COPY prisma ./prisma/

COPY .env ./


RUN npm install

RUN npx prisma generate

COPY . .


EXPOSE 3000


CMD [ "npm", "run", "dev" ]