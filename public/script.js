// client-side js

document.addEventListener("DOMContentLoaded", () => {
  const Root_Url = window.location.href;
	const naturalLink = `${Root_Url}December 15, 2015<br><a target="_blank" href="${Root_Url}December 15, 2015" class="card__action">Try It</a>`;
	const unixLink = `${Root_Url}1450137600<br><a target="_blank" href="${Root_Url}1450137600" class="card__action">Try It</a>`;
  const months = ["January
  const today = new Date();
  const dd = today.getDate();
  const mm = today.getMonth()+1;
  const yyyy = today.getFullYear();

if(mm<10){
    mm='0'+mm;
} 
var today = dd+'/'+mm+'/'+yyyy;
document.getElementById("DATE").value = today;
  const today = `${Root_Url}${new Date()};<br><a target="_blank" href="${Root_Url}${Root_Url}${new Date()}" class="card__action">Try Today's Date</a>`;
	document.getElementById("natural-link").innerHTML = naturalLink;
	document.getElementById("unix-link").innerHTML = unixLink;
  document.getElementById("today").innerHTML = today;
});

