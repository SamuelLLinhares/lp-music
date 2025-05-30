document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    const loader = document.getElementById("pageLoader");
    loader.style.display = "flex";

    localStorage.setItem("formSubmitted", "true");

    setTimeout(function() {
        location.reload();
    }, 1000);
});
