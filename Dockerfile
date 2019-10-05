FROM selenium/standalone-chrome

# install nodejs LTS Release
RUN curl -sL https://deb.nodesource.com/setup_10.x | sudo bash
RUN sudo apt-get install nodejs
RUN sudo mkdir -p /usr/src/app

WORKDIR /usr/src/app
COPY package*.json ./

# Install production dependencies.
RUN sudo npm install --only=production
# RUN sudo npm install selenium-standalone@latest -g
# RUN sudo selenium-standalone install
# sudo /opt/bin/start-xvfb.sh & sudo /opt/bin/start-selenium-standalone.sh & node app.js
# "start": "sudo sudo selenium-standalone start --drivers.chrome.version=2.43 --drivers.chrome.baseURL=https://chromedriver.storage.googleapis.com & node app.js"

# EXPOSE 4444

# Copy local code to the container image.
COPY . ./

# Run the web service on container startup.
CMD [ "npm", "start" ]