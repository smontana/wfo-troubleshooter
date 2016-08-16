// node -v check
console.log('Node version in use: ' + process.version);

// utilities
const os = require('os');
const fs = require('fs');
const querystring = require('querystring');
const repl = require('repl');

// low lvl
const platformOS = os.platform();
const platformOSType = os.type();
const osVersion = os.release();
const pcName = os.hostname();
const tmpDirChk = os.tmpdir();

// connection checks
const connectionsObj = os.networkInterfaces();
const connKeysArr = Object.keys(connectionsObj);

// user info
const userInfoObj = os.userInfo();

// misc checks
const pcUptime = os.uptime();

// error trace func
function traceErr (err) {
  console.trace(err);
}

var globalObj = {
  platform: platformOS,
  platformOSType: platformOSType,
  osVersion: osVersion,
  pcName: pcName,
  tmpDirChk: tmpDirChk,
  connKeysArr: connKeysArr,
  userInfo: userInfoObj,
  pcUptime: pcUptime
};


console.log('globalObj: ' + JSON.stringify(globalObj, null, 3));

// console.log();


// path.win32.basename('C:\\temp\\myfile.html');
  // returns 'myfile.html'

// path.dirname('/foo/bar/baz/asdf/quux')
// returns '/foo/bar/baz/asdf'
// A TypeError is thrown if path is not a string.


// path.extname('index.html')
// returns '.html'

// path.extname('index.coffee.md')
// returns '.md'

// path.extname('index.')
// returns '.'

// path.extname('index')
// returns ''

// path.extname('.index')
// returns ''