// name spacing object
const app = {};

app.isPlaying = undefined;

// arrow buttons to scroll to top or bottom of page
$('.arrowU').on('click', function(){
   window.scrollTo(0,0);
});

$('.arrowD').on('click', function(){
   window.scrollTo(0, 100000);
});


// play audio when header button is clicked

$('.headerButton').on('click', function() {
   window.scrollTo(0,800);
   if (app.isPlaying) {
      audio.stop();
   } else {
      app.isPlaying = true;
      let audio = new Audio('./assets/intro.mp3');
      audio.volume = 0.01;
      audio.play();
   };
});

// const Choreographer = require('choreographer-js')
// console.log(Choreographer)


$(document).ready(function () {
   let choreographer = new Choreographer({
      animations: [
      {
         range: [-1, 1000],
         selector: '#box',
         type: 'scale',
         style: 'opacity',
         from: 0,
         to: 1
      }
   ]})
   choreographer.runAnimationsAt(position)
   
   window.addEventListener('scroll', function () {
      choreographer.runAnimationsAt(window.pageYOffset)
   })
   console.log(KUTE);
   // var tween = KUTE.fromTo('headerTitle', { left: 0 }, { left: 100 }, { yoyo: true });
   // console.log(tween);
   // Add smooth scrolling to all links
   $("a").on('click', function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
         // Prevent default anchor click behavior
         event.preventDefault();
         // Store hash
         var hash = this.hash;
         // Using jQuery's animate() method to add smooth page scroll
         // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
         $('html, body').animate({
            scrollTop: $(hash).offset().top
         }, 800, function () {
            window.location.hash = hash;
         });
      } 
   });
});

AOS.init({
   offset: 250,
   duration: 900
});

console.log('hey');


// header logo animation

document.addEventListener('mousemove', (e) => {
   const sqrs = document.querySelectorAll('.item');
   const mouseX = e.pageX;
   const mouseY = e.pageY;

   sqrs.forEach(sqr => {
      const sqrX = sqr.offsetLeft + 20;
      const sqrY = sqr.offsetTop + 20;
      const diffX = mouseX - sqrX;
      const diffY = mouseY - sqrY;
      const radians = Math.atan2(diffY, diffX);
      const angle = radians * 180 / Math.PI;
      sqr.style.transform = `rotate(${angle}deg)`;
   })
})



/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
   var x = document.getElementById("myLinks");
   if (x.style.display === "none") {
      x.style.display = "flex";
   } else {
      x.style.display = "none";
   }
} 