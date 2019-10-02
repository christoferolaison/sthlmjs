FROM node:12.2.0

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

CMD ["yarn", "dev"]