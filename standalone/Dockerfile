FROM selenium/standalone-chrome-debug
ENV PORT=8080
# ENV HUB_PORT_4444_TCP_PORT=8080
# ENV SE_OPTS="-Dserver.port=8080"
ENV SE_OPTS="-port=8080"
# ENV JAVA_CLASSPATH="/mnt/*:/opt/selenium/*:."
# "-Dserver.port=${PORT}"
EXPOSE 8080
EXPOSE 5900

# java -jar selenium-server-standalone-3.4.0.jar -role hub -host 0.0.0.0 -port $PORT
# CMD [ "java", "-jar", "selenium-server-standalone-3.4.0.jar", "-role", "hub", "-host", 0.0.0.0, "-port", ${PORT}]