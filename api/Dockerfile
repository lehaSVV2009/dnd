FROM java:8
COPY ./build/libs/api.jar api.jar
CMD ["java", "-Xmx200m", "-jar", "/api.jar"]

EXPOSE 8080