const {getUUID} = require('./get-id.plugin')
const { getAge }  = require('./get-age.plugin');
const { http } = require('./http-client.plugin');
// import { buildLogger } from "./logger.plugin";

module.exports = {
  getAge, 
  getUUID,
  http,
  // buildLogger
}