const images = ["./images/chefs.jpeg","./images/service.jpeg","./images/decor.jpeg","./images/photography.jpeg","./images/at work.jpeg"]
let currentIndex = 0;
function moveSlide(step) {
    currentIndex += step;
    if (currentIndex < 0) currentIndex = images.length -1;
    if (currentIndex >= images.length) currentIndex = 0;
    document.getElementById("slide").src = images[currentIndex];
}