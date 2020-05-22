# Video Stream
###### React Redux CRUD App

[DEMO](https://crud-pi.now.sh)


--------------------------
## App Structure

![image](./docs/obs.png)

![image](./docs/app-structure.png)

![image](./docs/stream.png)

--------

## Node.js & npm install

```
npm install npm -g
npm update
```

[How To Install Node.js on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04)

```
cd ~
curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh
nano nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs
node -v
curl -L https://www.npmjs.com/install.sh | sh
npm_config_prefix=/some/path sh install.sh
npm -v
```

node -v && npm -v
```
v14.3.0
6.14.4
```


### Stream client

###### Client run
```
cd crud-client
npm install
npm start
```

[http://localhost:3000](http://localhost:3000)

---------

### JSON server for stream-client REST-Based React Apps

###### JSON Server run
```
cd json-server
npm install
npm start
```

[http://localhost:3001](http://localhost:3001)


[http://localhost:3001/streams](http://localhost:3001/streams)

---------

### NODE MEDIA SERVER 

###### RTMP Server run
```
cd rtmp-server
npm install
npm start
```

[http://localhost:8000](http://localhost:8000)



---------

### OBS Studio

[Open Broadcaster Software](https://obsproject.com/)

###### OBS Studio install and run
```
sudo snap install obs-studio

obs-studio
```

###### Customize OBS Stream

```
SETTINGS => Stream

STREAM TYPE => Custom Streaming Server

URL => rtmp://localhost/live

STREAM KEY => 1 (for the stream with ID:1)
STREAM KEY => 2 (for the stream with ID:2)

CLOSE SETTINGS

PRESS THE BUTTON => Start Streaming

```



