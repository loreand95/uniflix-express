FROM node:alpine
WORKDIR /app
COPY build ./build
RUN npm install serve -g
COPY . .
CMD ["serve","-s","build"]