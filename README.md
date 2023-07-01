
npm install node-schedule


### Example cron every 1 minute

```
const schedule = require('node-schedule');

const job = schedule.scheduleJob('* * * * *', function(){
    console.log('Hello I am cron every 1 minute!');
  });


```
### Get more syntext from
https://crontab.guru/every-1-minute  