
function toggleMenu() {
    document.getElementById("navigation")
        .classList.toggle("show");
}

document.getElementById("newsletterForm")
    .addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Thank you for subscribing to Headline Hub!");

        this.reset();
    });
