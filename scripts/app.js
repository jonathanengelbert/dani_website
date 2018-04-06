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
// homeLink.addEventListener('click', function(){
//   homeAnchor.scrollIntoView({
//     behavior: 'smooth'
//   });
// });

//LISTENERS
contactLink.addEventListener('click', function(){
  console.log(this);
  contactAnchor.scrollIntoView({
    behavior: 'smooth'
  });
});
