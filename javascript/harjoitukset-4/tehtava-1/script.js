function changeImage(newSrc) {
    const imagehere = document.getElementById('imagehere');
    imagehere.src = newSrc;
}

document.getElementById('img1').addEventListener('click', () => {
    changeImage('img/car1.png');
});

document.getElementById('img2').addEventListener('click', () => {
    changeImage('img/car2.png');
});

document.getElementById('img3').addEventListener('click', () => {
    changeImage('img/car3.png');
});