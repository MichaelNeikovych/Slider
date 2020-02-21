'use strict';

const imageArray = [
    'img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 
    'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 
    'img/9.jpg', 'img/10.jpg', 'img/11.jpg', 'img/12.jpg' 
];

const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');
const image = document.querySelector('#img');

let currentImageIndex = 0;
image.src = imageArray[currentImageIndex];

let defaultInterval = setInterval(clickNextButton, 3000);

prevButton.addEventListener('click', function(){
    clickPrevButton();
    clearInterval(defaultInterval);
    defaultInterval = setInterval(clickNextButton, 3000);
})

nextButton.addEventListener('click', function(){
    clickNextButton();
    clearInterval(defaultInterval);
    defaultInterval = setInterval(clickNextButton, 3000);
})






// SLIDER WITH DISABLED BUTTONS
// let currentImageIndex = 0;
// let prevButton = document.querySelector('#prevButton');
// prevButton.disabled = true;

// let nextButton = document.querySelector('#nextButton');
// if (imageArray.length === 1) {
//     nextButton.disabled = true;
// }

// let image = document.querySelector('#img');
// image.src = imageArray[currentImageIndex];

// nextButton.addEventListener('click', clickNextButton);
// prevButton.addEventListener('click', clickPrevButton);