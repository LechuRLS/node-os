const getOSInfo = require('./osModule');
const getNetworkInfo = require('./networkModule');

const osInfo = getOSInfo();

console.log("=== Información del Sistema Operativo ===");
console.log(`Nombre: ${osInfo.nombre}`);
console.log(`Tipo: ${osInfo.tipo}`);
console.log(`Versión: ${osInfo.version}`);
console.log(`Arquitectura: ${osInfo.arquitectura}`);
console.log(`CPUs: ${osInfo.cpus}`);
console.log(`Memoria Total: ${osInfo.memoriaTotalMB} MB`);
console.log(`Memoria Libre: ${osInfo.memoriaLibreMB} MB`);
console.log("");

const networkInfo = getNetworkInfo();

console.log("=== Interfaces de Red ===");

for (let interfaz in networkInfo) {
  console.log(`Interfaz ${interfaz}:`);
  networkInfo[interfaz].forEach((detalle) => {
    console.log(`  Familia: ${detalle.family}`);
    console.log(`  Dirección: ${detalle.address}`);
    console.log(`  Interno: ${detalle.internal}`);
  });
  console.log("");
}
