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

# EXPOSE 4444

# Copy local code to the container image.
COPY . ./

# Run the web service on container startup.
CMD [ "npm", "start" ]