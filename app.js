var songs=[
    "Earth Wind  Fire - September.mp3" ,
    "Earth Wind  Fire - Boogie Wonderland (Feat. The Emotions).mp3",
    "George Benson - The Ghetto.mp3",
    "alla_pugacheva_-_a_znaesh__vse_eshche_budet_(zvukoff.ru).mp3",
    "luciano-pavarotti_-_mario-santa-lucia-luntana.mp3",
    ];

var songTitle= document.getElementById("songTitle");
var currentTime= document.getElementById("currentTime");
var duration= document.getElementById("duration");
var volumesSlider=document.getElementById("songSlider");
var nextSongTitle=document.getElementById("nextSong");

var song = new Audio();
var currentSong= 0;



function loadSong(){
    song.src ="audio/"+ songs[currentSong];
    songTitle.innerHTML= (currentSong + 1)+ "." + songs[currentSong];
    nextSongTitle.innerHTML= "Next Song: " + songs[currentSong +1];
    song.play();   

}
function stopSong(){
    song.src ="audio/"+ songs[currentSong];
    song.stop();
}
function nextSong(){
    currentSong= currentSong + 1 % songs.length;
    loadSong();
}
function previousSong(){
    currentSong= currentSong - 1 % songs.length;
    loadSong();
}
function pauseSong(){
    song.src ="audio/"+ songs[currentSong];
    songs.pause();
}
    var date= new Date();
    currentTime.innerHTML= date.getHours()+":"+date.getMinutes();


