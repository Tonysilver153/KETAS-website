// Active Users Counter Animation
function animateCount(element, target) {
    let count = 0;
    const duration = 2000; // 2 seconds
    const interval = 50;
    const step = target / (duration / interval);

    const timer = setInterval(() => {
        count += step;
        if (count >= target) {
            clearInterval(timer);
            count = target;
        }
        element.textContent = Math.floor(count);
    }, interval);
}

// Operating Hours Countdown
function updateCountdown() {
    const now = new Date();
    const closingTime = new Date();
    closingTime.setHours(17, 0, 0); // Set closing time to 5 PM

    if (now > closingTime) {
        closingTime.setDate(closingTime.getDate() + 1);
    }

    const timeLeft = closingTime - now;
    const hoursLeft = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('countdown').textContent = 
        `${hoursLeft}:${minutesLeft.toString().padStart(2, '0')}`;
}

// Initialize when document loads
document.addEventListener('DOMContentLoaded', () => {
    // Start counter animation
    animateCount(document.getElementById('userCount'), 1500); // Example: 1500 active users

    // Start countdown
    updateCountdown();
    setInterval(updateCountdown, 60000); // Update every minute
}); 