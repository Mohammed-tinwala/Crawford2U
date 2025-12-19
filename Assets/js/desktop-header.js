// Searchbar Animation 
const placeholders = [
    "Search Products",
    "Search Cleaning Items",
    "Search Dry Fruits",
    "Search Stationery",
    "Search Home Essentials"
];

const input = document.getElementsByClassName(".searchInput");

let placeholderIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typePlaceholder() {
    const currentText = placeholders[placeholderIndex];

    if (!isDeleting) {
        // Typing
        input.placeholder = currentText.slice(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, 1200);
        }
    } else {
        // Deleting
        input.placeholder = currentText.slice(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            placeholderIndex = (placeholderIndex + 1) % placeholders.length;
        }
    }

    const speed = isDeleting ? 50 : 80;
    setTimeout(typePlaceholder, speed);
}

typePlaceholder();