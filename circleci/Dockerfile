FROM ubuntu:18.04

RUN apt-get update && apt-get install -y libboost-all-dev
RUN apt-get update && apt-get install -y git
RUN apt-get install -y netcat curl

# Setup for nvm
RUN mkdir /usr/local/nvm
ENV NVM_DIR /usr/local/nvm 
ENV NODE_VERSION v10.17.0
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash 

RUN /bin/bash -c "source $NVM_DIR/nvm.sh && nvm install $NODE_VERSION && nvm use --delete-prefix $NODE_VERSION"

ENV NODE_PATH $NVM_DIR/versions/node/$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/$NODE_VERSION/bin:$PATH




COPY docker-ce-cli_18.09.deb .

RUN dpkg -i docker-ce-cli_18.09.deb

EXPOSE 8088
EXPOSE 8081
EXPOSE 8180
EXPOSE 8050