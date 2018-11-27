# live-investment-tool
Live investment simulation system for presentation and demo day based on node.js and mongodb.

## Guide
[Guide for non-developer](https://github.com/virus-lab/live-investment-tool/blob/master/GUIDE.md)

## Usage

#### Settings
```
# git clone https://github.com/virus-dev/live-investment-tool
./live-investment-tool# npm install
```

#### Run database
```
./live-investment-tool$ mkdir db
./live-investment-tool$ mongod --dbpath db
```
> to reset: ```$ killall -15 mongod```  

#### Always Run database
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

#### Run
```
./live-investment-tool# npm start
```

> http://localhost:3000/invest  
> http://localhost:3000/invest-result  

#### Always Run
```
# forever --minUptime 5 --spinSleepTime 5 start /root/live-investment-tool/bin/www
```

> to check: ```# forever list```  
> to stop: ```# forever stop /root/live-investment-tool/bin/www```


## For Lightsail

#### Settings

```
~/workspace$ git clone https://github.com/virus-lab/live-investment-tool
~/workspace/live-investment-tool$ npm install
```

#### Install/Run database

```
$ sudo apt-get install mongodb-server
~/workspace/live-investment-tool$ mkdir db
~/workspace$ sudo mongod --fork --logpath mongod.log --dbpath ./live-investment-tool/db
```

> `$ sudo killall -u mongodb`

#### Port settings

```
~$ cd /opt/bitnami
/opt/bitnami$ sudo ./ctlscript.sh stop apache
```

> Add 'Custom - TCP - 3000' on lightsail - networking

#### Run

```
~/workspace/live-investment-tool$ sudo npm start
```

> `~/workspace/live-investment-tool$ sudo forever --minUptime 5 --spinSleepTime 5 start ./bin/www`
> `~/workspace/live-investment-tool$ sudo forever list`
> `~/workspace/live-investment-tool$ sudo forever stop /root/live-investment-tool/bin/www`

#### Guide

`{ip_address}`: `invest.ejs`
`{ip_address}/list`: `list.ejs`
`{ip_address}/result`: `result.ejs`

## Dependencies
- nodejs
- express
- mongodb
- mongoose
- forever
- mongodb-server
