# live-investment-tool
Live investment simulation system for presentation and demo day based on node.js and mongodb.

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


## Settings for Lightsail

```
$ sudo apt get install mongodb-server
~/workspace$ sudo mongod --fork --logpath mongod.log --dbpath ./live-investment-tool/db
```

```
$ sudo killall -u mongodb
```

```
~/workspace/live-investment-tool$ npm start
```

```
~/workspace/live-investment-tool$ forever --minUptime 5 --spinSleepTime 5 start ./bin/www
```

## 사용법

- http://52.79.225.85:3000/invest 로 접속
- 이름 에는 아무거나 입력해도 되지만, key 에는 virus00000 virus00001 virus00002 virus00003 중 하나 입력해야 로그인 가능 (중복 불가)
  - 행사 때는 입장객들에게 인당 1개의 key 를 부여하여 중복 투표를 막음
- 투표 후 결과는 http://52.79.225.85:3000/invest/result 에서 실시간으로 확인 가능
  - 행사 때는 앞의 스크린에 띄워 놓을 예정


## Dependencies
- nodejs
- express
- mongodb
- mongoose
- forever
- mongodb-server
