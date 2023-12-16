var growingDiv = document.getElementById('growingDiv');
var growButton = document.getElementById('growButton');

// Set initial height and define a variable to track the height
var initialHeight = 100;
var currentHeight = initialHeight;

// Add a click event listener to the button
growButton.addEventListener('click', function () {
    // Increase the height by a certain amount (you can adjust this value)
    currentHeight += 20;

    // Update the height of the div
    growingDiv.style.height = currentHeight + 'px';
});