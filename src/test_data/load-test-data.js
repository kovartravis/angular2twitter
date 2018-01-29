const userData = require('./1000users.json');
const Client = require('node-rest-client').Client;
const client = new Client();
const API_URL = 'http://localhost:8080';
const NUM_TEST_USERS = 20;

function loadTestUsers(max) {
  var n = max < userData.length ? max : userData.length;
  for (var i = 0; i < n; i++) {
    var u = userData[i];
    var credentials = {username: u.username, password: "password"};
    var profile = {
      email: u.email,
      firstName: u.firstName,
      lastName: u.lastName,
      phone: u.phone
    };
    var args = {
      data: { credentials: credentials, profile: profile },
      headers: { "Content-Type": "application/json" }
    };
    client.post(API_URL + '/users', args, function(data, response) {
      console.log('POST /users result: ', data);
    });
  }
}

function loadTestTweets(max) {
  var n = max < userData.length ? max : userData.length;
  for (var i = 0; i < n; i++) {
    var u = userData[i];
    var credentials = {username: u.username, password: "password"};
    var tokens = u.tweet.split(' ');
    // 1 random hashtag
    var j = Math.floor(Math.random() * tokens.length);
    tokens[j] = "#".concat(tokens[j]);
    // 1 random mention of user already created
    j = Math.floor(Math.random() * i);
    tokens.unshift("@" + userData[j].username);
    var content = tokens.join(' ').substring(0,139);
    var args = {
      data: { credentials: credentials, content: content },
      headers: { "Content-Type": "application/json" }
    };
    client.post(API_URL + '/tweets', args, function(data, response) {
      console.log('POST /tweets result: ', data);
    });
  }
}

function loadSomeFollowers(max) {
  var n = max < userData.length ? max : userData.length;
  var url = API_URL + '/users/@' + userData[0].username + '/follow';
  console.log('POSTING ' + n + ' followers for ' + userData[0].username);
  for (var i = 1; i < n; i++) {
    var u = userData[i];
    var credentials = {username: u.username, password: "password"};
    var args = {
      data: credentials,
      headers: {"Content-Type": "application/json"}
    };
    client.post(url, args, function (data, response) {
    });
  }
}

loadTestUsers(NUM_TEST_USERS);
setTimeout(function(){loadTestTweets(NUM_TEST_USERS)}, 3000);
setTimeout(function(){loadSomeFollowers(NUM_TEST_USERS)}, 6000);
