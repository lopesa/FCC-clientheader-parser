'use strict';

function headerparser () {
   this.parseheader  = function (req, res) {

      var finalReply = {}

      

      // res.send('yay farts')
      res.send(req.ip)
      // res.send(req.headers)
   

   }

   // this.convert = function (req, res) {
   //    // res.send(req.params[0])
   //    var inputDate = req.params[0],
   //       myDate = new Date(inputDate).toString(),
   //       UTCDate = new Date(inputDate).toUTCString(),
   //       timeZoneOffsetSecs, 
   //       buildDates,
   //       finalDateObj;

      
   //    // console.log(myDate);
   //    // console.log(UTCDate);

      
   //    buildDates = function buildDates() {
         
   //       var dates = {},
   //          UTCdate,
   //          UTCmonth,
   //          UTCyear,
   //          UTCstring;
         
   //       // string case
   //       if (isNaN(inputDate)) {
   //          // catches non-date strings
   //          if (isNaN(Date.parse(inputDate))) {
   //             dates.natural = null;
   //             dates.linux = null;
   //          }
   //          else {
   //             timeZoneOffsetSecs = new Date(inputDate).getTimezoneOffset() * 60

   //             dates.natural = new Date(inputDate).toLocaleString(
   //                'en-US', {
   //                   // timeZone: 'UTC',
   //                   month: 'long',
   //                   day: 'numeric',
   //                   year: 'numeric'
   //                }
   //             );
   //             dates.linux = new Date(inputDate) / 1000 - timeZoneOffsetSecs;
   //          }
   //       }

   //       // number case
   //       else {
   //          // catches non date numbers 
   //          if (isNaN(new Date(Number(inputDate)))) {
   //             dates.natural = null;
   //             dates.linux = null;
   //          }
   //          else {            
               
   //             dates.natural = new Date(Number(inputDate) * 1000).toLocaleString(
   //                'en-US', {
   //                   timeZone: 'UTC',
   //                   month: 'long',
   //                   day: 'numeric',
   //                   year: 'numeric'
   //                }
   //             );
   //             dates.linux = inputDate;
   //          }
   //       }
   //       return dates;
   //    }

   //    finalDateObj = buildDates();

   //    res.send(finalDateObj);
   // }
}

module.exports = headerparser;
