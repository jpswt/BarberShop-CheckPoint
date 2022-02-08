window.onload = function () {
	var getNavi = document.getElementById('nav-dropdown');

	var mobile = document.createElement("span");
	mobile.setAttribute("id", "mobile-navigation");
	getNavi.parentNode.insertBefore(mobile, getNavi);

	document.getElementById('mobile-navigation').onclick = function () {
		var x = getNavi.getAttribute('style');
		if (x) {
			getNavi.removeAttribute('style');
			// fix image directory again
			document.getElementById('mobile-navigation').style.backgroundImage = 'url(./images/mobile-menu.png)';
		} else {
			getNavi.style.display = 'block';
			document.getElementById('mobile-navigation').style.backgroundImage = 'url(./images/mobile-close.png)';
		}
	};
}

const formResults = document.getElementById("results")

new URLSearchParams(window.location.search).forEach((value, name) => {
	formResults.append(`${name} : ${value}`)
	formResults.append(document.createElement("br"))

})

document.getElementById("FORM").reset()

