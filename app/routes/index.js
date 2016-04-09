'use strict';

var Headerparser = require(process.cwd() + '/app/controllers/headerparser.server.js');

module.exports = function (app) {
   var headerparser = new Headerparser();

   app.route('/').get(headerparser.parseheader)

};
