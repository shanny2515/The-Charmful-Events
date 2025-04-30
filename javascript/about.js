// we want to creater a slider that will show images of our work
// we will first declare the variable "images" then initialize it with an array.
const images = ["./images/chefs.jpeg","./images/service.jpeg","./images/decor.jpeg","./images/photography.jpeg","./images/at work.jpeg"]

//  we  then tell it to start with the first image of the array which is 0
let currentIndex = 0;

// Then we declare the function "moveslide" which will take a parameter "step".
// This function will be called when the user clicks on the left or right arrow buttons.
function moveSlide(step) {
    // the first one updates the current index by adding 1
    currentIndex += step;
    // This one says that if the current index is less than 0, it should be set to the last image in the array.
    if (currentIndex < 0) currentIndex = images.length -1;
    // This one says that if the current index is greater than or equal to the length of the array, it should be set to 0.
    if (currentIndex >= images.length) currentIndex = 0;
    // This one updates the source of the image element with the id "slide" to the current image in the array.
    document.getElementById("slide").src = images[currentIndex];
}