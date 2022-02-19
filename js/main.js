
// Get the video
var video = document.getElementById("myVideo");


// Get the button
var btn = document.getElementById("myBtn");
var lastPlayTrack = "empty";
var currentTrack
// Pause and play the video, and change the button text
function myFunction(track) {
    if(lastPlayTrack != 'empty') {
      document.getElementById(lastPlayTrack).pause();
      document.getElementById(lastPlayTrack).currentTime = 0;
    }
    var audio = document.getElementById(track);
    audio.play();
    lastPlayTrack = track;

}

function stopPlaying(){
  if(lastPlayTrack != 'empty') {
    document.getElementById(lastPlayTrack).pause();
    document.getElementById(lastPlayTrack).currentTime = 0;
  }
  console.log("will we ever stop?");
}
