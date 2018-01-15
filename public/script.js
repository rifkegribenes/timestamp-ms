// client-side js

document.addEventListener("DOMContentLoaded", () => {
  const Root_Url = window.location.href;
	const naturalLink = `${Root_Url}December 15, 2015`;
	const unixLink = `${Root_Url}1450137600`;
	document.getElementById("natural-link").text(naturalLink);
	document.getElementById("unix-link").text(unixLink);
	const links = `<a target="_blank" href="${naturalLink}">Try First link</a><a target="_blank" href="${unixLink}">Try Second link</a>`
	document.getElementById("try").append(links);
});

