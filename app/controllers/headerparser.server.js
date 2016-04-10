'use strict';

function headerparser () {
   this.parseheader  = function (req, res) {

      var finalReply = {},
         // for heroku's forwarding
         ip,
         language,
         software;

      // for heroku's forwarding
      ip = req.headers['x-forwarded-for'];

      language = req.headers['accept-language']
         .slice(0, req.headers['accept-language'].indexOf(','));

      software = req.headers['user-agent']
         .slice(
            req.headers['user-agent'].indexOf('(') + 1
            , req.headers['user-agent'].indexOf(')')
         );

      // for my server setup
      // finalReply.ipaddress = req.ip;

      // for heroku's forwarding
      finalReply.ipaddress = ip;
      finalReply.language = language;
      finalReply.software = software;

      res.send(finalReply);
      // res.send(req.headers);
   }
}

module.exports = headerparser;
