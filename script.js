function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

function sendTextQuote(){

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const city = document.getElementById("city").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    if(name === "" || service === "" || message === ""){
        alert("Please complete the required fields.");
        return;
    }

    const text =
`Hi! I'd like a free quote.

Name: ${name}

Phone: ${phone}

Email: ${email}

City: ${city}

Service: ${service}

Project Details:
${message}`;

    window.location.href =
    `sms:+18594215749?body=${encodeURIComponent(text)}`;
}
