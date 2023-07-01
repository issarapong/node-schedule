const schedule = require('node-schedule');

const job = schedule.scheduleJob('* * * * *', function(){
    console.log('Hello I am cron every 1 minute!');
  });

