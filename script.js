document.addEventListener('DOMContentLoaded', () => {
  // Select necessary elements
  const track = document.querySelector('.carousel-track');
  const items = Array.from(track.children); // Convert NodeList to an array
  const nextButton = document.querySelector('.carousel-control.next');
  const prevButton = document.querySelector('.carousel-control.prev');

  // Calculate the width of a single carousel item
  const itemWidth = items[0].getBoundingClientRect().width;

  // Debugging
  console.log("Carousel initialized with item width:", itemWidth);
  console.log("Total items:", items.length);

  // Arrange the items side by side in a row
  items.forEach((item, index) => {
      item.style.left = `${itemWidth * index}px`;
  });

  // Keep track of the current index
  let currentIndex = 0;

  // Function to update carousel position
  const moveCarousel = (index) => {
      const amountToMove = itemWidth * index;
      track.style.transform = `translateX(-${amountToMove}px)`;
      track.style.transition = "transform 0.3s ease-in-out"; // Smooth transition
  };

  // Event listener for the "Next" button
  nextButton.addEventListener('click', () => {
      if (currentIndex < items.length - 3) { // Ensure only 3 items are visible
          currentIndex++;
          moveCarousel(currentIndex);
      }
  });

  // Event listener for the "Previous" button
  prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
          currentIndex--;
          moveCarousel(currentIndex);
      }
  });
});

document.querySelectorAll('.dropdown').forEach((dropdown) => {
  dropdown.addEventListener('mouseenter', () => {
    const menu = dropdown.querySelector('.dropdown-menu');
    if (menu) {
      menu.style.display = 'block';
    }
  });

  dropdown.addEventListener('mouseleave', () => {
    const menu = dropdown.querySelector('.dropdown-menu');
    if (menu) {
      menu.style.display = 'none';
    }
  });
});


    document.addEventListener('DOMContentLoaded', function () {
        const hamburger = document.querySelector('.hamburger-menu');
        const navList = document.querySelector('.nav-list');
        
        hamburger.addEventListener('click', function () {
            navList.classList.toggle('active');
        });
    });



// Handle pricing toggle (monthly/yearly)
const toggle = document.getElementById('billing-toggle');
const prices = document.querySelectorAll('.pricing-card h4');

toggle.addEventListener('change', () => {
  prices.forEach((price, index) => {
    const amount = index === 0 ? 17 : 88; // Monthly prices
    const yearlyAmount = (amount * 12 * 0.75).toFixed(0); // 25% discount for yearly
    price.innerHTML = toggle.checked
      ? `<span class="currency">$</span>${yearlyAmount} <span class="duration">/ year</span>`
      : `<span class="currency">$</span>${amount} <span class="duration">/ month</span>`;
  });
});

// FAQ section toggle
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling; // Get the next sibling (answer div)
    const toggle = question.querySelector('.faq-toggle');

    // Close any other open FAQ items
    document.querySelectorAll('.faq-answer').forEach((item) => {
      if (item !== answer) {
        item.style.display = 'none';
        item.previousElementSibling.querySelector('.faq-toggle').classList.remove('open');
      }
    });

    // Toggle open/close state
    const isOpen = answer.style.display === 'block';
    answer.style.display = isOpen ? 'none' : 'block';
    toggle.classList.toggle('open', !isOpen);
  });
});

// Handle page navigation
document.addEventListener("DOMContentLoaded", function () {
  const pricingContent = document.getElementById("pricing-content");
  const supportContent = document.getElementById("support-content");
  const landingContent = document.querySelector("main:not(#pricing-content):not(#support-content)");
  const faqSection = document.querySelector(".faq-section"); // Select the FAQ section

  const pricingNav = document.getElementById("pricing-nav");
  const supportNav = document.getElementById("support-nav"); // Add an ID to the Support link in the header

  pricingNav.addEventListener("click", function (event) {
    event.preventDefault();
    pricingContent.style.display = "block";
    supportContent.style.display = "none";
    landingContent.style.display = "none";
    faqSection.style.display = "block"; // Show FAQ for Pricing page
    window.scrollTo(0, 0); // Scroll to top
  });

  supportNav.addEventListener("click", function (event) {
    event.preventDefault();
    supportContent.style.display = "block";
    pricingContent.style.display = "none";
    landingContent.style.display = "none";
    faqSection.style.display = "none"; // Hide FAQ for Support page
    window.scrollTo(0, 0); // Scroll to top
  });

  // Show landing content on page refresh
  window.addEventListener("load", function () {
    landingContent.style.display = "block";
    pricingContent.style.display = "none";
    supportContent.style.display = "none";
    faqSection.style.display = "block"; // Show FAQ for Landing page
  });
});
