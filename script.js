document.addEventListener("DOMContentLoaded", function() {
    let audio = document.getElementById("bg-music");

    // Play music when the user clicks anywhere on the page
    document.body.addEventListener("click", function() {
        if (audio.paused) {
            audio.play().catch(error => console.log("Autoplay blocked:", error));
        }
    });

    // Set the name dynamically
    let herName = "KUMU";  // Change this to her name
    let message = document.getElementById("personal-message");
    message.innerHTML = `Dear ${herName}, May your life be filled with love, happiness, and beautiful roses! 💖`;

    // Falling Hearts Effect
    setInterval(() => {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
        document.body.appendChild(heart);
        
        setTimeout(() => { heart.remove(); }, 5000);
    }, 500);
});

function showMessage() {
    document.getElementById("special-message").style.display = "block";
}

// Particle.js Effect
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 100 },
        "shape": { "type": "circle" },
        "size": { "value": 3 },
        "move": { "speed": 2 }
    },
    "interactivity": { "detect_on": "canvas" }
});
