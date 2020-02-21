'use strict';

function clickPrevButton(){
    if (currentImageIndex === 0){
        currentImageIndex = imageArray.length;
    }
    
    currentImageIndex--;
    image.src = imageArray[currentImageIndex];
}

function clickNextButton(){
    currentImageIndex++;
    
    if (currentImageIndex === imageArray.length) {
        currentImageIndex = 0;
    }
    
    image.src = imageArray[currentImageIndex];
}







// SLIDER WITH DISABLED BUTTONS
// function clickPrevButton(){
//     currentImageIndex--;
//     image.src = imageArray[currentImageIndex];
// 	nextButton.disabled = false;
    
//     if (currentImageIndex === 0){
//         prevButton.disabled = true;
//     }
// }

// function clickNextButton(){
//     currentImageIndex++;
//     image.src = imageArray[currentImageIndex];
//     prevButton.disabled = false;

//     if (currentImageIndex === (imageArray.length - 1)) {
//         nextButton.disabled = true;
//     }
// }