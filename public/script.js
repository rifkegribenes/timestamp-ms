// client-side js

document.addEventListener("DOMContentLoaded", () => {
  const Root_Url = window.location.href;
	const naturalLink = `${Root_Url}December 15, 2015<br><a target="_blank" href="${Root_Url}December 15, 2015" class="card__action">Try It</a>`;
	const unixLink = `${Root_Url}1450137600<br><a target="_blank" href="${Root_Url}1450137600" class="card__action">Try It</a>`;
	document.getElementById("natural-link").innerHTML = naturalLink;
	document.getElementById("unix-link").innerHTML = unixLink;
});

