// node -v check
console.log('Node version in use: ' + process.version);

// utilities
const os = require('os');
const fs = require('fs');
const querystring = require('querystring');
const repl = require('repl');
const moment = require('moment');
const DetectRTC = require('detectrtc');

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
var pcUpTime_parsed = parseInt(pcUptime);
var pcLastShutDownDate = moment().subtract(pcUpTime_parsed, 'seconds');
var pcLastShutDownDate_formatted = moment(pcLastShutDownDate).format('MM/DD/YYYY hh:mm:ss a');

// error trace func
function traceErr (err) {
  console.trace(err);
}

// load detectrtc
var mic = DetectRTC.hasMicrophone;
var speakers = DetectRTC.hasSpeakers;
var audioInputDevices = DetectRTC.audioInputDevices;
var audioOutputDevices = DetectRTC.audioOutputDevices;
var osName = DetectRTC.osName;
var d_osVersion = DetectRTC.osVersion;
var detectLocalIPAddress = DetectRTC.DetectLocalIPAddress();

DetectRTC.load(function() {
  console.log(DetectRTC);
});

// end result obj's to work with

// ----- GLOBAL
var globalObj = {
  platform: platformOS,
  platformOSType: platformOSType,
  osVersion: osVersion,
  pcName: pcName,
  tmpDirChk: tmpDirChk,
  connKeysArr: connKeysArr,
  userInfo: userInfoObj,
  pcUptime: pcUptime,
  pcLastShutDownDate: pcLastShutDownDate_formatted
};

// ----- UTILS
var utilInfoObj = {
  pcUpTime_parsed: pcUpTime_parsed,
  pcLastShutDownDate: pcLastShutDownDate,
  pcLastShutDownDate_formatted: pcLastShutDownDate_formatted
};

// ----- DETECT RTC OBJ
var drtc = {
  mic: mic,
  speakers: speakers,
  audioInputDevices: audioInputDevices,
  audioOutputDevices: audioOutputDevices,
  osName: osName,
  d_osVersion: d_osVersion,
  detectLocalIPAddress: detectLocalIPAddress
};

console.log('globalObj: ' + JSON.stringify(globalObj, null, 3));
console.log('utilInfoObj: ' + JSON.stringify(utilInfoObj, null, 3));
console.log('DetectRTC.browser: ' + JSON.stringify(drtc, null, 3));

console.log('\n\n-------\n\n');

// DetectRTC.load(function() {
//   console.log(DetectRTC);
// });
