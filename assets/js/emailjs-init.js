(function () {
    emailjs.init("qJwtfkjml0PyNdLOg");
})();

document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs
        .sendForm('service_56fkw6n', 'template_sae4aw7', this)
        .then(function () {
            console.log("Mensagem enviada com sucesso!");
        }, function (error) {
            console.log("Falha ao enviar a mensagem: " + JSON.stringify(error));
        });
});
