FROM node:16

RUN npm install -g http-server
WORKDIR /app
COPY packag*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8080
CMD ["http-server", "dist"]