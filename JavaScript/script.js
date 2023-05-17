var myVideo = document.getElementById("video1");
var playimg = document.getElementById("play1"); 

function play7() { 
  if (myVideo.paused) 
    myVideo.play(playimg.style.visibility = "hidden"); 
  else 
    myVideo.pause(playimg.style.visibility = "visible");
}