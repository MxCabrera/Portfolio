const app = {};

app.isPlaying = undefined;


$('.headerButton').on('click', function() {
   window.scrollTo(0,800);
   if (app.isPlaying) {
      audio.stop()
   } else {
      app.isPlaying = true;
      let audio = new Audio('./assets/intro.mp3');
      audio.volume = 0.01;
      audio.play();
   }
})


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

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
         });
      } // End if
   });
});

AOS.init({
   offset: 0,
   duration: 900
});

console.log('hey')

let choreographer = new Choreographer(config)
choreographer.runAnimationsAt(position)

console.log(choreographer)