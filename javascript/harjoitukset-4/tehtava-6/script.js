const ball = document.getElementById('ball');

let isDragging = false;

// Hiiren nappi pohjaan
ball.addEventListener('mousedown', (e) => {
    isDragging = true;
    ball.style.cursor = 'grabbing';
});
// Itse liikkuminen
document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        ball.style.left = `${e.clientX - ball.offsetWidth / 2}px`;
        ball.style.top = `${e.clientY - ball.offsetHeight / 2}px`;
    }
});
// Hiiren nappi ylös
document.addEventListener('mouseup', () => {
    isDragging = false;
    ball.style.cursor = 'grab';
});