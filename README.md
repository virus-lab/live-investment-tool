# live-investment-tool
Live investment simulation system for presentation and demo day based on node.js and mongodb.

## Usage

### Settings
```
# git clone https://github.com/virus-dev/live-investment-tool
./live-investment-tool# npm install
```

### Run database
```
./live-investment-tool$ mkdir db
./live-investment-tool$ mongod --dbpath db
```
> to reset: ```$ killall -15 mongod```  

### Always Run database
```
# mongod --fork --logpath mongod.log --dbpath ./live-investment-tool/db
```
> to reset:
```
# mongo
>> show dbs
>> use rst_invest
>> db.dropDatabase()
>> show dbs
```

### Run
```
./live-investment-tool# npm start
```

> http://localhost/invest  
> http://localhost/invest-result  

### Always Run
```
# forever --minUptime 5 --spinSleepTime 5 start /root/live-investment-tool/bin/www
```
> to check: ```# forever list```  
> to stop: ```# forever stop /root/live-investment-tool/bin/www```

## Dependencies
- nodejs
- express
- mongodb
- mongoose
- forever
