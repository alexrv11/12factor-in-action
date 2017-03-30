FROM node:alpine
RUN npm install --global grunt-cli
RUN mkdir /app
COPY . /app
WORKDIR /app
RUN grunt build

WORKDIR /app/build
RUN npm install
RUN npm install --global bower
RUN bower install --allow-root
EXPOSE 3000
CMD ["npm", "start", "-t"]



