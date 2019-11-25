FROM ubuntu:18.04
RUN apt update && apt install -y nodejs npm

RUN apt-get install -y libboost-all-dev
RUN apt-get update && apt-get install -y git
RUN apt-get install -y netcat

COPY docker-ce-cli_18.09.deb .

RUN dpkg -i docker-ce-cli_18.09.deb

EXPOSE 8088
EXPOSE 8081
EXPOSE 8180
EXPOSE 8050