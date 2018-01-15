// client-side js

document.addEventListener("DOMContentLoaded", () => {
  const Root_Url = window.location.href;
	const naturalLink = `${Root_Url}December 15, 2015<br><a target="_blank" href="${Root_Url}December 15, 2015" class="card__action">Try It</a>`;
	const unixLink = `${Root_Url}1450137600<br><a target="_blank" href="${Root_Url}1450137600" class="card__action">Try It</a>`;
  const today = `${Root_Url}${new Date()};<br><a target="_blank" href="${Root_Url}${Root_Url}${new Date()}" class="card__action">Try Today's Date</a>`;
	document.getElementById("natural-link").innerHTML = naturalLink;
	document.getElementById("unix-link").innerHTML = unixLink;
  document.getElementById("today").innerHTML = today;
});

