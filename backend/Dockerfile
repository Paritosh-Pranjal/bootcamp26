FROM maven:3.6.3-openjdk-11-slim AS builder
WORKDIR /app
COPY . .
RUN mvn clean test package -DskipTests


FROM openjdk:11.0-jdk-slim
WORKDIR /opt
COPY --from=builder /app/target/*.jar /opt/app.jar
EXPOSE 8090
ENTRYPOINT ["java", "-jar", "/opt/app.jar"]