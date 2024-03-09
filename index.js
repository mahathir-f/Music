let range = document.getElementById("range");
let song = document.getElementById("song");
let control = document.getElementById("control");


song.onloadedmetadata = function(){
    range.max = song.duration;
    range.value = song.currentTime;
}
function playPause(){
    if (control.classList.contains("fa-pause")) {
        song.pause();
        control.classList.remove("fa-pause");
        control.classList.add("fa-play");
    }else{
        song.play();
        control.classList.add("fa-pause");
        control.classList.remove("fa-play");
    }
}
if (song.play()) {
    setInterval(()=>{
        range.value = song.currentTime;
    },50)
}
range.onchange = function(){
    song.play();
    song.currentTime = range.value;
    control.classList.add("fa-pause");
    control.classList.remove("fa-play");
}