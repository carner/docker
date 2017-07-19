FROM node-pm2

WORKDIR /home

COPY index.js /home

EXPOSE 3000

CMD ["pm2","start","index.js","--no-daemon"]