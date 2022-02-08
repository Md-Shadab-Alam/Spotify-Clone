
let songIndex = 1;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let currentTime = document.getElementById('currentTime');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songname:"Kali Kali Zulfon",filePath:"1.mp3", coverPath:"logo.png"},
    {songname:"Agar Tum Sath Ho",filePath:"2.mp3", coverPath:"2.jpg"},
    {songname:"Bismil",          filePath:"3.mp3", coverPath:"3.jpg"},
    {songname:"Kali Kali Zulfon",filePath:"1.mp3", coverPath:"logo.png"},
    {songname:"Agar Tum Sath Ho",filePath:"2.mp3", coverPath:"2.jpg"},
    {songname:"Bismil",          filePath:"3.mp3", coverPath:"3.jpg"},
    
]
songItems.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML= songs[i].songname;
  //  element.getElementsByClassName("timestamp")[0].innerHTML= songs[i]
})
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
    }
})
//Listen to Event
audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change' ,()=>{
    audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100;
}) 

const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName("ch")).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
})
}

Array.from(document.getElementsByClassName("ch")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlay();
        songIndex= parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src= `${songIndex}.mp3`;
        masterSongName.innerHTML = songs[songIndex-1].songname;
        audioElement.currentTime =0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',function(){
    if(songIndex>=3){
        songIndex = 1
    }
    else{
    songIndex +=1;
    }
    audioElement.src= `${songIndex}.mp3`;
    masterSongName.innerHTML = songs[songIndex-1].songname;
    audioElement.currentTime =0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})


document.getElementById('previous').addEventListener('click',function(){
    if(songIndex<=1){
        songIndex=3;
    }
    else{
        songIndex-=1;
    }
    audioElement.src= `${songIndex}.mp3`;
    masterSongName.innerHTML = songs[songIndex-1].songname;
    audioElement.currentTime =0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})