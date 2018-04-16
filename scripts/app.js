

//=================================================================
//SCROLLING
//=================================================================

//Anchor Links:
const bioLink = document.getElementById('bio-link');
const musicLink = document.getElementById('music-link');
const homeLink = document.getElementById('home-link');
const contactLink = document.getElementById('contact-link');


//Anchors
const bioAnchor = document.querySelector('#bioSection');
const musicAnchor = document.querySelector('#musicSection');
const homeAnchor = document.querySelector('#homeSection');
const contactAnchor = document.querySelector('#contactSection');


//LISTENERS
bioLink.addEventListener('click', function(){
  bioAnchor.scrollIntoView({
    behavior: 'smooth'
  });
});

//LISTENERS
musicLink.addEventListener('click', function(){
  musicAnchor.scrollIntoView({
    behavior: 'smooth'
  });
});

//LISTENERS
homeLink.addEventListener('click', function(){
  homeAnchor.scrollIntoView({
    behavior: 'smooth'
  });
});

//LISTENERS
contactLink.addEventListener('click', function(){
  contactAnchor.scrollIntoView({
    behavior: 'smooth'
  });
});

//=================================================================
//PLAYER
//=================================================================

const button = document.querySelector('.button__play');
const songs = document.querySelector('#songs');

//songs
const islands = document.getElementById('islands').src;
const noWords = document.getElementById('no_words').src;
const ritual = document.getElementById('ritual').src;

//song triggers
const islandsTrigger = document.querySelectorAll('.song')[0];
const noWordsTrigger = document.querySelectorAll('.song')[1];
const ritualTrigger = document.querySelectorAll('.song')[2];


//player
const progress = document.querySelectorAll('.progress');

let intervalId;



//play button
button.addEventListener("click", function(){
if(songs.src===""){
  songs.src=islands;
}
togglePlayPause();
if(songs.src==islands){
  intervalId = setInterval(function(){getTrackProgress(0)}, 1000);
}
if(songs.src==noWords){
  intervalId = setInterval(function(){getTrackProgress(1)}, 1000);
}
if(songs.src==ritual){
  intervalId = setInterval(function(){getTrackProgress(2)}, 1000);
}
});

function togglePlayPause(){
  clearInterval(intervalId);
  if(songs.paused === true) {
    button.className = "button__pause";
    return songs.play();

  }
  if(songs.paused === false) {
  button.className = "button__play";
  return songs.pause();

  }

}

function resetPlayer(){
  if(songs.currentTime > 0) songs.currentTime = 0;
}

//song listeners
islandsTrigger.addEventListener("click", function(){
    if(songs.src!=islands) songs.src=islands;
    togglePlayPause();
    intervalId = setInterval(function(){getTrackProgress(0)}, 1000);

  });

noWordsTrigger.addEventListener("click", function(){
    if(songs.src!=noWords) songs.src=noWords;
    togglePlayPause();
    intervalId = setInterval(function(){getTrackProgress(1)}, 1000);
});

ritualTrigger.addEventListener("click", function(){
  if(songs.src!=ritual) songs.src=ritual;
  togglePlayPause();
    intervalId = setInterval(function(){getTrackProgress(2)}, 1000);
});


function getTrackProgress(track){
  let value = 0;
  // songs.addEventListener('timeupdate', getTrackProgress, false);
  if(songs.currentTime > 0) {
    value = Math.floor((100 / songs.duration) * songs.currentTime);
  }
  progress[track].style.width = value + "%";


}

//EVENT LISTENER FOR SEEK IN PROGRESS BAR

const progressBar0 = document.querySelectorAll('.progress__bar')[0];
progressBar0.addEventListener("click", function(event){
  let position = ((event.clientX - this.offsetLeft) / this.offsetWidth * 100);
  progress[0].style.width = position+"%";
  songs.currentTime = position * 2;
  

});
const progressBar1 = document.querySelectorAll('.progress__bar')[1];
progressBar1.addEventListener("click", function(event){
  let position = ((event.clientX - this.offsetLeft) / this.offsetWidth * 100);
  progress[1].style.width = position+"%";
  songs.currentTime = position * 2;


});
const progressBar2 = document.querySelectorAll('.progress__bar')[2];
progressBar2.addEventListener("click", function(event){
  let position = ((event.clientX - this.offsetLeft) / this.offsetWidth * 100);
  progress[2].style.width = position+"%";
  songs.currentTime = position * 2;


});
