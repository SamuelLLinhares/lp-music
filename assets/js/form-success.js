window.addEventListener("load", function() {
    const formSubmitted = localStorage.getItem("formSubmitted");

    if (formSubmitted === "true") {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });

        const successMessage = document.getElementById("successMessage");
        successMessage.style.display = "block";
        successMessage.classList.add("slideIn");

        localStorage.removeItem("formSubmitted");

        setTimeout(() => {
            successMessage.classList.remove("slideIn");
            successMessage.classList.add("slideOut");
        }, 5000);
    }
});
