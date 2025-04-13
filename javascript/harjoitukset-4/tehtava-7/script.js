const container = document.getElementById('container');
const balls = []; // Taulukko palloille
const numBalls = 100;
const ballSize = 100; // Pallon koko
const ballVelocity = 2; // Pallon nopeus

// Luodaan 100 palloa
for (let i = 0; i < numBalls; i++) {
    const ball = document.createElement('div');
    ball.classList.add('ball');
    ball.style.width = `${ballSize}px`;
    ball.style.height = `${ballSize}px`;
    ball.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    ball.style.left = `${Math.random() * window.innerWidth}px`;
    ball.style.top = `${Math.random() * window.innerHeight}px`;

    container.appendChild(ball);
 // lisätään pallot taulukkoon
    balls.push({
        element: ball,
        x: parseFloat(ball.style.left),
        y: parseFloat(ball.style.top),
        dx: Math.random() < 0.5 ? ballVelocity : -ballVelocity, // Pallon nopeus x-suunnassa
        dy: Math.random() < 0.5 ? ballVelocity : -ballVelocity, // Pallon nopeus y-suunnassa
    });
}

// Pallojen animaatio
function animate() {
    balls.forEach(ball => {
        ball.x += ball.dx;
        ball.y += ball.dy;

        // Seiniin osuminen
        if (ball.x <= 0 || ball.x + ball.element.offsetWidth >= window.innerWidth) {
            ball.dx *= -1;
        }
        if (ball.y <= 0 || ball.y + ball.element.offsetHeight >= window.innerHeight) {
            ball.dy *= -1;
        }

        // Pallojen liikkuminen
        ball.element.style.transform = `translate(${ball.x}px, ${ball.y}px)`;
    });

    requestAnimationFrame(animate);
}

animate();