const gridItems = document.querySelectorAll('.grid-item');
const dialog = document.querySelector('.image-dialog');
const dialogImage = document.getElementById('dialog-image');
const overlay = document.querySelector('.image-dialog-overlay');

// Open the dialog with the zoomed-out image
gridItems.forEach(item => {
    item.addEventListener('click', function () {
        const imgSrc = this.querySelector('img').src;
        dialogImage.src = imgSrc; // Set the clicked image source to the dialog
        dialog.classList.add('active'); // Show the dialog
    });
});

// Close the dialog when clicking on the overlay
overlay.addEventListener('click', function () {
    dialog.classList.remove('active'); // Hide the dialog
    dialogImage.src = ''; // Clear the image source
});
