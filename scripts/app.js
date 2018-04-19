
//=================================================================
//SCROLLING
//=================================================================

//Anchor Links:
const bioLink = document.querySelectorAll('.bio-link');
const musicLink = document.querySelectorAll('.music-link');
const homeLink = document.querySelectorAll('.home-link');
const contactLink = document.querySelectorAll('.contact-link');
const navBar = document.getElementsByTagName('nav')[0];

const linksList = [bioLink, musicLink, homeLink, contactLink];

//Anchors
const bioAnchor = document.querySelector('#bioSection');
const musicAnchor = document.querySelector('#musicSection');
const homeAnchor = document.querySelector('#homeSection');
const contactAnchor = document.querySelector('#contactSection');


//adds listeners to links

function unpackLinks(){
  linksList.forEach(function(linkList){
    linkList.forEach(function(link){

    });
  });
}

function addListenerToLinks(link, anchor){
  link.forEach(function(link){
    link.addEventListener('click', function(){
      anchor.scrollIntoView({
        behavior: 'smooth'
      });
        });
      }
)};

addListenerToLinks(musicLink, musicAnchor);
addListenerToLinks(bioLink, bioAnchor);
addListenerToLinks(contactLink, contactAnchor);
addListenerToLinks(homeLink, homeAnchor);


function toggleLinkHighlight(targetLink){
  unpackLinks();
  linksList.forEach(function(link){
    if(link != targetLink){
        link[0].classList.remove('highlight');
        link[1].classList.remove('highlight');
    }
    if(link == targetLink){
      link[0].classList.add("highlight");
      link[1].classList.add("highlight");
    }
  });
}

//HIGHLIGHT WHEN SCROLLING
window.addEventListener('scroll', function(){
theNav = getCoords(navBar).top + 100;

if(theNav >= homeAnchorCoord && theNav < bioAnchorCoord){
  toggleLinkHighlight(homeLink);
}
 if(theNav >= bioAnchorCoord && theNav < musicAnchorCoord ){
  toggleLinkHighlight(bioLink);
}
 if(theNav >= musicAnchorCoord  && theNav < contactAnchorCoord){
   toggleLinkHighlight(musicLink);
}
 if(theNav >= contactAnchorCoord){
   toggleLinkHighlight(contactLink);
  }
});

// get document coordinates of the element
function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };

}
let theNav = getCoords(navBar).top;
let homeAnchorCoord = getCoords(homeAnchor).top;
let bioAnchorCoord = getCoords(bioAnchor).top;
let musicAnchorCoord = getCoords(musicAnchor).top;
let contactAnchorCoord = getCoords(contactAnchor).top;


//Elements Coordinates for Scrollling

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
