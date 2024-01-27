FROM mysql:5.7

CMD [ "--innodb-use-native-aio=0" ]

ENV MYSQL_DATABASE=fullcycle
ENV MYSQL_ROOT_PASSWORD=admusr
ENV MYSQL_USER=admusr
ENV MYSQL_PASSWORD=admusr

COPY script.sql /docker-entrypoint-initdb.d/

EXPOSE 3306