FROM openjdk:11.0-jdk-slim
WORKDIR /opt
COPY target/*.jar /opt/app.jar
EXPOSE 8090
ENTRYPOINT ["java", "-jar", "/opt/app.jar"]
