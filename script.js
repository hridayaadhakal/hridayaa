const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const heartsContainer = document.getElementById("hearts-container");

/* ---------- runaway NO ---------- */
noButton.addEventListener("mouseenter", () => {
    noButton.style.position = "fixed";

    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

    noButton.style.left = x + "px";
    noButton.style.top = y + "px";
});

/* ---------- floating hearts ---------- */
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random() * 30) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}, 500);

/* ---------- confetti ---------- */
function createConfetti() {
    for (let i = 0; i < 80; i++) {
        const c = document.createElement("div");
        c.innerHTML = "💖";
        c.style.position = "fixed";
        c.style.left = Math.random() * 100 + "vw";
        c.style.top = "-10px";
        c.style.fontSize = "20px";
        c.style.animation = "fall 3s linear forwards";

        document.body.appendChild(c);
        setTimeout(() => c.remove(), 3000);
    }
}

/* ---------- typewriter ---------- */
function typeWriter(text, el, speed = 60) {
    let i = 0;
    function type() {
        if (i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

/* ---------- YES click ---------- */
yesButton.addEventListener("click", (e) => {
    createConfetti();

    document.body.innerHTML = `
        <h1>YAYY Thankyou Babyy💗</h1>
        <p id="loveMsg"></p>
        <p>Are you ready? 😘</p>
        <button onclick="location.href='week.html'">Let's Go 💌</button>
    `;

    typeWriter(
        "Now let's celebrate then.",
        document.getElementById("loveMsg")
    );
});
