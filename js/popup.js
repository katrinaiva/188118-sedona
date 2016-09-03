var btn = document.querySelector(".js-btn");
var popup = document.querySelector(".modal-content");
var form = popup.querySelector("form");
var arrival = popup.querySelector("[name=arrival-date]");
var departure = popup.querySelector("[name=date-of-departure]");
var adult = popup.querySelector("[name=adult]");
var child = popup.querySelector("[name=child]");
btn.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");
});
form.addEventListener("submit", function(event) {
	if (!arrival.value || !departure.value || !adult.value || !child.value) {
	event.preventDefault();
}
});
 window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-content-show")) {
				popup.classList.remove("modal-content-show");
		}
	}
});
