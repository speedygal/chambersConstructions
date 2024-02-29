function adjustImageForMobile() {
  var image = document.getElementById('dynamicImage');
  if (image) { // Check if the element exists
    var screenWidth = window.innerWidth;
  
    if (screenWidth <= 768) { // Assuming 768px is your breakpoint for mobile
        image.src = 'images/2.jpeg';
    } else {
        image.src = 'images/1.jpg'; // Ensures it goes back to the original on larger screens
    }
  }
}

// Call the function on initial load
adjustImageForMobile();

// Add an event listener to call the function on window resize
window.addEventListener('resize', adjustImageForMobile);

document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', function() {
      if (window.scrollY > 0) {
          navbar.classList.add('scrolled');
      } else {
          navbar.classList.remove('scrolled');
      }
  });
});