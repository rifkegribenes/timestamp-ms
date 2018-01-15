const unixtime = (time) => {
 return { unixtime: time.getTime() };
}

const parsetime = (time) => {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  };
}

http.createServer((req, res) => {
  const urlObject = url.parse(req.url, true);
  const pathname = urlObject.pathname;
  const time = new Date(urlObject.query.iso);
  let result;

    if (pathname === '/api/unixtime') {
      result = unixtime(time);
    } else if (pathname === '/api/parsetime') {
      result = parsetime(time);
    }
    if (result) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(result));
    } else {
      res.writeHead(404);
      res.end();
    }
  }).listen(port);


const moment = require('moment');
module.exports = {
    parse: function (req, res) {
        const date = req.params.query;
        let processedDate = {
            "unix": null,
            "natural": null
        }
        if (+date >= 0) {
            processedDate.unix = +date;
            processedDate.natural = moment.unix(+date).format("MMMM D, YYYY")
        }
        if (isNaN(+date) && moment(date, "MMMM D, YYYY").isValid()) {
            processedDate.unix = moment(date, "MMMM D, YYYY").format("X");
            processedDate.natural = date;
        }
        res.send(processedDate);
    }
}

