const app = {};


$('.headerButton').on('click', function() {
   let audio = new Audio('./assets/intro.mp3');
   audio.volume = 0.012
   window.scrollTo(0,800);
   audio.play()
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
   offset: 300,
   duration: 1000
});

console.log('hey')

