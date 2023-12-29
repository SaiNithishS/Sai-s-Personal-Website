document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(contactForm);
        formData.forEach((value, key) => {
            console.log(`${key}: ${value}`);
        });
        alert("Message sent successfully!");
    });
});
