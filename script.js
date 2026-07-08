function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

function sendTextQuote() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const city = document.getElementById("city").value.trim();
  const day = document.getElementById("day").value;
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  if (!name || !day || !service || !message) {
    alert("Please complete your name, trash day, service, and project details.");
    return;
  }

  const text =
`Hi! I'd like a free quote.

Name: ${name}
Phone: ${phone}
Email: ${email}
City: ${city}
Trash Day: ${day}
Service: ${service}

Project Details:
${message}`;

  const number = "18594215749";

  const smsLink = /iPhone|iPad|iPod/i.test(navigator.userAgent)
    ? `sms:${number}&body=${encodeURIComponent(text)}`
    : `sms:${number}?body=${encodeURIComponent(text)}`;

  window.location.href = smsLink;
}
