const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');

const movieList = ['videos/hero-1.mp4','videos/hero-2.mp4','videos/hero-3.mp4','videos/hero-4.mp4']

let index = 0; // This will help us to track which video is to be display
nextButton.addEventListener('click', function(){
    index += 1;
    video.src = movieList[index];

    if(index === 3){
        index = -1; // if we set 0 here it will never goes back to index 0
    }

})