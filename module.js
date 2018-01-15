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


// const moment = require('moment');
const unixTime = (inputDate) => { 
  const date = new Date(inputDate * 1000);
	const day = date.getDate();
		month			=	'0' + (date.getMonth() + 1),
		year			=	date.getFullYear(),
		hours			= date.getHours(),
		minutes		=	'0' + date.getMinutes(),
		seconds		=	'0' + date.getSeconds();

module.exports = {
  parse: (req, res) => {
    const date = req.params.query;
    const dateResult = {
        "unix": null,
        "natural": null
    }
    if (+date >= 0) {
        dateResult.unix = +date;
        dateResult.natural = moment.unix(+date).format("MMMM D, YYYY")
    }
    if (isNaN(+date) && moment(date, "MMMM D, YYYY").isValid()) {
        dateResult.unix = moment(date, "MMMM D, YYYY").format("X");
        dateResult.natural = date;
    }
    res.send(dateResult);
  }
}

