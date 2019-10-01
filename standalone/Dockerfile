FROM selenium/standalone-chrome-debug
ENV PORT=8080

RUN sudo apt-get update && sudo apt-get install redir
ADD redirect.sh /etc/init.d/redirect.sh
ADD programm /tmp/programm
RUN sudo chmod +x /etc/init.d/redirect.sh
RUN sudo chmod 777 /etc/supervisor/conf.d/selenium-debug.conf 
RUN echo >> /etc/supervisor/conf.d/selenium-debug.conf 
RUN cat /tmp/programm >> /etc/supervisor/conf.d/selenium-debug.conf 

EXPOSE 8080
EXPOSE 5900
