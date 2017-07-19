FROM centos

WORKDIR /usr/local

#RUN yum install wget -y
#RUN wget https://nodejs.org/dist/v6.11.0/node-v6.11.0-linux-x64.tar.xz

COPY node-v6.11.0-linux-x64.tar.xz /usr/local

RUN tar xvJf node-v6.11.0-linux-x64.tar.xz

RUN rm node-v6.11.0-linux-x64.tar.xz

RUN mv node-v6.11.0-linux-x64 node

RUN ln -s /usr/local/node/bin/node /usr/local/bin/node

RUN ln -s /usr/local/node/bin/npm /usr/local/bin/npm

###install pm2
RUN npm install -g pm2

RUN ln -s /usr/local/node/bin/pm2 /usr/local/bin/pm2