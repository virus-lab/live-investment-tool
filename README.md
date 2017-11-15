# live-invest
Live investment simulation system for presentation and demo day based on node.js and mongodb.

## Usage

### Settings
```
# git clone https://github.com/virus-dev/live-invest
./live-invest# npm install
```

### Database
```
./live-invest$ mkdir db-local
./live-invest$ mongod --dbpath db-local
```
> to reset: ```$ killall -15 mongod```

### Run
```
./live-invest# npm start
```

### Always Run
```
# forever --minUptime 5 --spinSleepTime 5 start /root/live-invest/bin/www
```
> to check: ```# forever list```  
> to stop: ```# forever stop /root/live-invest/bin/www```

## Dependencies
- nodejs
- express
- mongodb
- mongoose
- forever
