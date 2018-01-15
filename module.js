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
const unix2Natural = (unix) => { 
  const date = new Date(unix * 1000);
	const day = date.getDate();
	const	months	=	['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	const	year =	date.getFullYear();
  return `${months[date.getMonth()]} ${day}, ${year}`;
}

const natural2Unix = (natural) => new Date(natural).getTime() / 1000;

module.exports = {
  parse: (req, res) => {
    const date = req.params.query;
    const dateResult = {
        "unix": null,
        "natural": null
    }
    if (+date >= 0) {
        dateResult.unix = +date;
        dateResult.natural = unix2Natural(+date);
    }
    if (isNaN(+date)) {
        dateResult.unix = moment(date, "MMMM D, YYYY").format("X");
        dateResult.natural = date;
    }
    res.send(dateResult);
  }
}

