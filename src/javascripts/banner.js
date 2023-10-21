var banner = document.getElementsByClassName("banner");
var i;

for (i = 0; i < banner.length; i++) {
    banner[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var hidden = this.nextElementSibling;
        if (hidden.style.display === "block") {
            hidden.style.display = "none";
        } else {
            hidden.style.display = "block";
        }
    });
}