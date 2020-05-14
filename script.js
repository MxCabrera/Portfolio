const app = {};

app.isPlaying = undefined;

$('.arrowU').on('click', function(){
   window.scrollTo(0,0);
});

$('.arrowD').on('click', function(){
   window.scrollTo(0, 100000);
});


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


$(document).ready(function () {
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