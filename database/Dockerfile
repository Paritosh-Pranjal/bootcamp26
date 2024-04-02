FROM mysql:latest

COPY ./book_discovery.sql /docker-entrypoint-initdb.d/

EXPOSE 3306

VOLUME /var/lib/mysql