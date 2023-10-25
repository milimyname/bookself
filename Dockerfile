FROM node:lts-alpine

ENV NODE_ENV development

RUN npm install -g pnpm

WORKDIR /app

COPY package*.json pnpm-lock.yaml* ./

RUN pnpm i

COPY . .

ENV NODE_ENV production

RUN pnpm run build

FROM node:lts-alpine

WORKDIR /app

COPY --from=0 /app .

COPY . .

ENV PORT=8080

CMD ["node", "./build"]
