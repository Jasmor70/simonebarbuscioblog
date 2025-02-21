// Countdown script
const countdownDate = new Date();
countdownDate.setDate(countdownDate.getDate() + 21);  // 21 days from now

function updateCountdown() {
    const now = new Date();
    const timeLeft = countdownDate - now;

    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    
    document.getElementById("days").textContent = daysLeft;

    if (daysLeft <= 0) {
        document.getElementById("timer").textContent = "The Blog is Live!";
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();
