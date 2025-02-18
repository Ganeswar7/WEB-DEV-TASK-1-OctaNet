// Countdown Timer
const countdown = () => {
    const countdownDate = new Date("December 31, 2023 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = countdownDate - now;
  
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.getElementById("countdown").innerHTML = `
      ${days}d ${hours}h ${minutes}m ${seconds}s
    `;
  
    if (distance < 0) {
      clearInterval(interval);
      document.getElementById("countdown").innerHTML = "Event Started!";
    }
  };
  
  const interval = setInterval(countdown, 1000);
  
  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form Submission
  document.getElementById("registration-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    alert(`Thank you, ${name}! We will contact you at ${email} with further details.`);
  });