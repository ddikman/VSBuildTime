var timespan = require('timespan');
var moment = require('moment');
moment().format();

process.stdin.resume();
process.stdin.setEncoding('utf8');

var data = '';

function parse(){

  var matches = [];
  var regex = /Time Elapsed ([\d]{2}:[\d]{2}:[\d]{2}\.[\d]*)/g;
  var match = regex.exec(data);
  while(match != null)
  {
    var time = moment(match[1], 'HH:mm:ss.SSS');
    var ts = new timespan.TimeSpan(time.millisecond(), time.second(), time.minute(), time.hour());
    // console.log("%s:%s:%s.%s", time.hour(), time.minute(), time.second(), time.millisecond());
    matches.push(ts);
    match = regex.exec(data);
  }
  if(matches.length > 0)
  {
      var total = new timespan.TimeSpan();
      matches.forEach(function(ts){
        total.add(ts);
      });
      console.log("Total build time is " + total);
  }
  else{
    console.log("No 'Time Elapsed' matches found in input.");
  }
};

process.stdin.on('data', function(chunk){
  data += chunk;
});

process.stdin.on('end', function(){
  parse();
});
