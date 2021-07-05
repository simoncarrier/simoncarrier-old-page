var video = document.getElementById('vid');

var btn = document.getElementById('pause');

function pauseVid(){
   if (video.paused){
       video.play();
       btn.innerHTML = "Pause";
   } else {
       video.pause();
       btn.innerHTML = "Play";
   }
}