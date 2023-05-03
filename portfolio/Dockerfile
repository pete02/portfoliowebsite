FROM node:latest
COPY . /
RUN npm install
RUN apt-get -y update
RUN apt-get -y upgrade
EXPOSE 3001
CMD ["node", "/index.js"]