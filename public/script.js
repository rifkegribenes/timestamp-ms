// client-side js

document.addEventListener("DOMContentLoaded", () => {
  const Root_Url = window.location.href;
	const naturalLink = `${Root_Url}December 15, 2015<br><a target="_blank" href="${Root_Url}December 15, 2015" class="card__action">Try It</a>`;
	const unixLink = `${Root_Url}1450137600<br><a target="_blank" href="${Root_Url}1450137600" class="card__action">Try It</a>`;
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const now = new Date();
  const dd = now.getDate();
  const month = months[now.getMonth()];
  const yyyy = now.getFullYear();
  const formattedToday = `${month} ${dd}, ${yyyy}`;
  const today = `${Root_Url}${formattedToday};<br><a target="_blank" href="${Root_Url}${formattedToday}}" class="card__action">Try Today's Date</a>`;
	document.getElementById("natural-link").innerHTML = naturalLink;
	document.getElementById("unix-link").innerHTML = unixLink;
  document.getElementById("today").innerHTML = today;
});

