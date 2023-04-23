// JavaScript Document

const cardLinks = document.querySelectorAll('.card-link');

// Loop through each card link and add a click event listener
cardLinks.forEach(function(cardLink) {
  cardLink.addEventListener('click', function() {
    // Get the corresponding collapse element
    const collapseElement = this.parentElement.nextElementSibling;
    
    // Toggle the collapse state of the element
    if (collapseElement.classList.contains('show')) {
      collapseElement.classList.remove('show');
    } else {
      collapseElement.classList.add('show');
    }
  });
});