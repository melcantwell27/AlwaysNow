// Get the link element by its ID
var link = document.getElementById("highlightMe");

// Add a click event listener
link.addEventListener("click", function(event) {
  // Prevent the default behavior of the link
  event.preventDefault();

  // Toggle the 'highlight' class
  link.classList.toggle("highlight");
});