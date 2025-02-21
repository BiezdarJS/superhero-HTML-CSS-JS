let index = 0;
const totalCards = 10;
const carousel = document.querySelector(".carousel");

// Initial 3D-positioning of the cards
const angleIncrement = 360 / totalCards; // 36 degrees per card
const distance = 350; // Verhoog de afstand tussen de kaarten

// Set each card's position in 3D space
document.querySelectorAll(".card").forEach((card, i) => {
  card.style.transform = `rotateY(${
    i * angleIncrement

  }deg) translateZ(${distance}px)`;
});

function moveCarousel(direction) {
  index += direction;

  if (index < 0) index = totalCards - 1; // Als je achteruit gaat, begin bij de laatste kaart
  if (index >= totalCards) index = 0; // Als je vooruit gaat, begin bij de eerste kaart

  updateCarousel();
}

function updateCarousel() {
  const angle = -index * angleIncrement; 
  carousel.style.transform = `rotateY(${angle}deg)`;
}

setTimeout(() => {
  setInterval(() => {
    moveCarousel(1);
  }, 2000);
}, 500);



// Fancy heading

var fancyHeading = document.getElementsByClassName('fancy-heading')[0];
var letters = fancyHeading.textContent.split('');

var content = letters.map((val, i) => {
  let delay = Math.floor((Math.random() * 1000) + 1);
  return ('<span style="animation-delay: '+ delay + 'ms">'
          + val +
          '</span>');
});

fancyHeading.innerHTML = "";

for (var i = 0; i < content.length; i++) {
  fancyHeading.innerHTML += content[i];
}



// Contact Form

$(document).ready(function () {
  $("#loginForm").on("submit", function (e) {
      e.preventDefault(); // Prevent actual form submission

      // Show success message
      $("#successMessage").removeClass("hidden").fadeIn();

      // Optionally clear the form fields
      $(this).trigger("reset");

      // Hide the success message after a few seconds (optional)
      setTimeout(function () {
          $("#successMessage").fadeOut();
      }, 3000);
  });

  // Hide success message when modal is closed
  $('#myModal').on('hidden.bs.modal', function () {
      $("#successMessage").addClass("hidden"); // Hide message
      $("#loginForm").trigger("reset"); // Reset form
  });
});



// Mobile Menu
(function () {
  var button = document.querySelector(".nav__toggler");
  var buttonLabel = button.querySelector(".nav__toggler-label");

  button.addEventListener(
    "click",
    function () {
      var menu = document.querySelector(".main-menu");
      console.log('kliknięto');
      menu.classList.toggle("main-menu_open");
      button.setAttribute(
        "aria-expanded",
        String(menu.classList.contains("main-menu_open"))
      );
      buttonLabel.classList.toggle("active");
      buttonLabel.classList.toggle("not-active");
    },
    false
  );
})();