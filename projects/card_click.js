document.addEventListener('DOMContentLoaded', function () {
    // Get all elements with the class 'projectCard'
    const projectCards = document.querySelectorAll('.projectCard');

    // Add a click event listener to each button
    projectCards.forEach(function (button) {
        button.addEventListener('click', function () {
            // Access the file path from the data attribute
            const filePath = button.dataset.filepath;

            // Open the file in a new tab/window
            window.open(filePath, '_blank');
        });
    });
});
