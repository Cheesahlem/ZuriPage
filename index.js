
var faq = document.getElementsByClassName("faq-question");
var i;
for (i = 0; i < faq.length; i++) {
	faq[i].addEventListener("click", function() {

		/* Toggle between adding and removing the active class, 
		to highlight the button that controls the panel */

		this.classList.toggle("active");

		/* to choose between hiding and showing the faq answer */

		var body = this.nextElementSibling;
		if (body.style.display === "block") {
			body.style.display = "none";
		} else {
			body.style.display = "block";
		}
	});
}