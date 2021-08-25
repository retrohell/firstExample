const log4js = require("log4js");

let logger = log4js.getLogger();

logger.level="debug";  // "production"

logger.info("Con exito ejecutarse la aplicacion pudo");
logger.warn("Las tuercas faltantes son");
logger.error("Encontrada la funcion no fue");
logger.error("Terrible situacion la aplicacion pasa");

function sumar(x, y) {
    return x + y;
}

module.exports = sumar;
