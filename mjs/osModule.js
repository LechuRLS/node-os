const os = require('os');

function getOSInfo() {
  return {
    nombre: os.platform(),
    tipo: os.type(),
    version: os.version(),
    arquitectura: os.arch(),
    cpus: os.cpus().length,
    memoriaTotalMB: (os.totalmem() / 1024 / 1024).toFixed(2),
    memoriaLibreMB: (os.freemem() / 1024 / 1024).toFixed(2)
  };
}

module.exports = getOSInfo;
