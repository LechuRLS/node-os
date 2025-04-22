const os = require('os');

function getNetworkInfo() {
  return os.networkInterfaces();
}

module.exports = getNetworkInfo;
