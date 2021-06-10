FROM mhart/alpine-node:12


FROM node:14 AS builder
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build --prod
RUN cd frontend && npm install && npm run build --prod

FROM node:14-alpine
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3000
ENTRYPOINT ["node", "dist/src/main.js"]
