FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=root

COPY ./book_discovery.sql /docker-entrypoint-initdb.d/

EXPOSE 3306

VOLUME /var/lib/mysql