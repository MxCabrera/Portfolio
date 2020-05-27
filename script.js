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
   window.scrollTo(0,700);
   // if (app.isPlaying) {
   //    audio.stop();
   // } else {
   //    app.isPlaying = true;
   //    let audio = new Audio('./assets/intro.mp3');
   //    audio.volume = 0.025;
   //    audio.play();
   // };
});

// const Choreographer = require('choreographer-js')
// console.log(Choreographer)


$(document).ready(function () {
   // let choreographer = new Choreographer({
   //    animations: [
   //    {
   //       range: [-1, 1000],
   //       selector: '#box',
   //       type: 'scale',
   //       style: 'opacity',
   //       from: 0,
   //       to: 1
   //    }
   // ]})
   // choreographer.runAnimationsAt(position)
   
   // window.addEventListener('scroll', function () {
   //    choreographer.runAnimationsAt(window.pageYOffset)
   // })
   // console.log(KUTE);
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
   const sqrs = document.querySelectorAll('.itemz');
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


$('.css').on('click', function(){
   Swal.fire({
      title: 'CSS3',
      text: 'Cascading Style Sheet - used to describe the how HTML elements are to be displayed in the app',
      // icon: 'info',
      confirmButtonText: 'Exit',
      animation: false,
      imageUrl: 'https://mcabrera.ca/assets/logo.png',
      imageWidth: 200,
      imageHeight: 200,
      // background: '#fff url(https://image.shutterstock.com/z/stock-vector--exclamation-mark-exclamation-mark-hazard-warning-symbol-flat-design-style-vector-eps-444778462.jpg)'
   })
})

$('.html').on('click', function () {
   Swal.fire({
      title: 'HTML5',
      text: 'Hyperlink Text Markup Language - the standard markup language for web pages',
      // icon: 'info',
      confirmButtonText: 'Exit',
      animation: false,
      imageUrl: 'https://mcabrera.ca/assets/logo.png',
      imageWidth: 200,
      imageHeight: 200,
      // background: '#fff url(https://image.shutterstock.com/z/stock-vector--exclamation-mark-exclamation-mark-hazard-warning-symbol-flat-design-style-vector-eps-444778462.jpg)'
   })
})

$('.js').on('click', function () {
   Swal.fire({
      title: 'JavaScript',
      text: 'The programming language for the web and can update and change both CSS and HTML',
      // icon: 'info',
      confirmButtonText: 'Exit',
      animation: false,
      imageUrl: 'https://mcabrera.ca/assets/logo.png',
      imageWidth: 200,
      imageHeight: 200,
      // background: '#fff url(https://image.shutterstock.com/z/stock-vector--exclamation-mark-exclamation-mark-hazard-warning-symbol-flat-design-style-vector-eps-444778462.jpg)'
   })
})

$('.jq').on('click', function () {
   Swal.fire({
      title: 'jQuery',
      text: 'a JavaScript Library that allows you to code quicker and easily with its built-in methods',
      // icon: 'info',
      confirmButtonText: 'Exit',
      animation: false,
      imageUrl: 'https://mcabrera.ca/assets/logo.png',
      imageWidth: 200,
      imageHeight: 200,
      // background: '#fff url(https://image.shutterstock.com/z/stock-vector--exclamation-mark-exclamation-mark-hazard-warning-symbol-flat-design-style-vector-eps-444778462.jpg)'
   })
})

$('.gthb').on('click', function () {
   Swal.fire({
      title: 'GitHub',
      text: 'A Git repository hosting service that allows you to manipulate personal projects, share it, collaborate and many other features.',
      // icon: 'info',
      confirmButtonText: 'Exit',
      animation: false,
      imageUrl: 'https://mcabrera.ca/assets/logo.png',
      imageWidth: 200,
      imageHeight: 200,
      // background: '#fff url(https://image.shutterstock.com/z/stock-vector--exclamation-mark-exclamation-mark-hazard-warning-symbol-flat-design-style-vector-eps-444778462.jpg)'
   })
})

$('.git').on('click', function () {
   Swal.fire({
      title: 'Git',
      text: 'A free and open source distributed version control system designed to handle every projects efficiently.',
      // icon: 'info',
      confirmButtonText: 'Exit',
      animation: false,
      imageUrl: 'https://mcabrera.ca/assets/logo.png',
      imageWidth: 200,
      imageHeight: 200,
      // background: '#fff url(https://image.shutterstock.com/z/stock-vector--exclamation-mark-exclamation-mark-hazard-warning-symbol-flat-design-style-vector-eps-444778462.jpg)'
   })
})

$('.react').on('click', function () {
   Swal.fire({
      title: 'React',
      text: 'A JavaScript library which allows users to create interactive UI projects. Used as a base in the development of apps.',
      // icon: 'info',
      confirmButtonText: 'Exit',
      animation: false,
      imageUrl: 'https://mcabrera.ca/assets/logo.png',
      imageWidth: 200,
      imageHeight: 200,
      // background: '#fff url(https://image.shutterstock.com/z/stock-vector--exclamation-mark-exclamation-mark-hazard-warning-symbol-flat-design-style-vector-eps-444778462.jpg)'
   })
})

$('.fire').on('click', function () {
   Swal.fire({
      title: 'Firebase',
      text: 'A development platform that allows users to store information within their own projects to be manipulated according to client request.',
      // icon: 'info',
      confirmButtonText: 'Exit',
      animation: false,
      imageUrl: 'https://mcabrera.ca/assets/logo.png',
      imageWidth: 200,
      imageHeight: 200,
      // background: '#fff url(https://image.shutterstock.com/z/stock-vector--exclamation-mark-exclamation-mark-hazard-warning-symbol-flat-design-style-vector-eps-444778462.jpg)'
   })
})

$('.sass').on('click', function () {
   Swal.fire({
      title: 'Sass',
      text: 'Syntactically awesome style sheets - An extension of CSS that enables you to use styling code more efficiently.',
      // icon: 'info',
      confirmButtonText: 'Exit',
      animation: false,
      imageUrl: 'https://mcabrera.ca/assets/logo.png',
      imageWidth: 200,
      imageHeight: 200,
      // background: '#fff url(https://image.shutterstock.com/z/stock-vector--exclamation-mark-exclamation-mark-hazard-warning-symbol-flat-design-style-vector-eps-444778462.jpg)'
   })
})

$('.term').on('click', function () {
   Swal.fire({
      title: 'iTerminal2',
      text: 'A GPL-licensed terminal emulator for macOS which supports operating system features.',
      // icon: 'info',
      confirmButtonText: 'Exit',
      animation: false,
      imageUrl: 'https://mcabrera.ca/assets/logo.png',
      imageWidth: 200,
      imageHeight: 200,
      // background: '#fff url(https://image.shutterstock.com/z/stock-vector--exclamation-mark-exclamation-mark-hazard-warning-symbol-flat-design-style-vector-eps-444778462.jpg)'
   })
})

$('.resp').on('click', function () {
   Swal.fire({
      title: 'Responsive Web Designs',
      text: 'An approach to web design that make web pages render to correct size properly according to a variety of electronic devices',
      // icon: 'info',
      confirmButtonText: 'Exit',
      animation: false,
      imageUrl: 'https://mcabrera.ca/assets/logo.png',
      imageWidth: 200,
      imageHeight: 200,
      // background: '#fff url(https://image.shutterstock.com/z/stock-vector--exclamation-mark-exclamation-mark-hazard-warning-symbol-flat-design-style-vector-eps-444778462.jpg)'
   })
})

$('.acc').on('click', function () {
   Swal.fire({
      title: 'Web Accessibility',
      text: 'An approach to design a web application that allows people with disabilities to use them easily and efficiently. Minimal/No barriers when experiencing the app.',
      // icon: 'info',
      confirmButtonText: 'Exit',
      animation: false,
      imageUrl: 'https://mcabrera.ca/assets/logo.png',
      imageWidth: 200,
      imageHeight: 200,
      // background: '#fff url(https://image.shutterstock.com/z/stock-vector--exclamation-mark-exclamation-mark-hazard-warning-symbol-flat-design-style-vector-eps-444778462.jpg)'
   })
})
