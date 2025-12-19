// Sidebar Cart
document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("openCartBtn");
    const closeBtn = document.getElementById("closeCartBtn");
    const sidebar = document.getElementById("cartSidebar");
    const overlay = document.getElementById("cartOverlay");

    if (!openBtn || !sidebar || !overlay) return;

    openBtn.addEventListener("click", () => {
        sidebar.classList.remove("translate-x-full");
        overlay.classList.remove("opacity-0", "pointer-events-none");
    });

    closeBtn.addEventListener("click", closeCart);
    overlay.addEventListener("click", closeCart);

    function closeCart() {
        sidebar.classList.add("translate-x-full");
        overlay.classList.add("opacity-0", "pointer-events-none");
    }
});

function showHome() {
    window.location.href = "index.html"
}

function showCat() {
    window.location.href = "categories.html"
}

function showCart() {
    window.location.href = "cart.html"
}

function showAccount() {
    window.location.href = "account.html"
}

function showCatPage() {
    window.location.href = "productby-category.html"
}

function showProductDetail() {
    window.location.href = "product-detail.html"
}

function showLocationPage() {
    window.location.href = "location.html";
}

function showProductbyCat() {
    window.location.href = "productby-category.html";
}

function showLogin() {
    window.location.href = "login.html";
}

function goBack() {
    window.history.back();
}

// fetch("components/desktop-header.html")
//     .then(res => res.text())
//     .then(html => {
//         document.getElementById("desktop-header").innerHTML = html;
//     });

// fetch("components/mobile-header.html")
//     .then(res => res.text())
//     .then(html => {
//         document.getElementById("mobile-header").innerHTML = html;
//     });

// fetch("components/bottom-nav.html")
//     .then(res => res.text())
//     .then(html => {
//         document.getElementById("bottom-nav").innerHTML = html;
//     });

// fetch("components/desktop-footer.html")
//     .then(res => res.text())
//     .then(html => {
//         document.getElementById("desktop-footer").innerHTML = html;
//     });

// fetch("components/desktop-banner.html")
//     .then(res => res.text())
//     .then(html => {
//         document.getElementById("desktop-banner").innerHTML = html;
//     });

function slideRight(btn) {
    const container = btn.nextElementSibling;
    container.scrollBy({
        left: 220,
        behavior: 'smooth'
    });
}

function login() {
    window.location.href = "login.html"
};


// Searchbar Animation 
const placeholders = [
    "Search Products",
    "Search Cleaning Items",
    "Search Dry Fruits",
    "Search Stationery",
    "Search Home Essentials"
];

const input = document.getElementById("searchInput");

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

// Banner
const banner = document.getElementById("bannerCarousel");
const dots = document.querySelectorAll(".banner-dot");

let index = 0;
const realSlides = dots.length;

function moveBanner() {
    banner.style.transition = "transform 0.7s cubic-bezier(0.4,0,0.2,1)";
    banner.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach((dot, i) => {
        dot.classList.toggle("w-5", i === index % realSlides);
        dot.classList.toggle("bg-green-500", i === index % realSlides);
        dot.classList.toggle("w-2", i !== index % realSlides);
        dot.classList.toggle("bg-gray-300", i !== index % realSlides);
    });
}

setInterval(() => {
    index++;

    moveBanner();

    // RESET WITHOUT ANIMATION
    if (index === realSlides) {
        setTimeout(() => {
            banner.style.transition = "none";
            banner.style.transform = "translateX(0%)";
            index = 0;
        }, 700);
    }
}, 3500);


// Location Modal
function openLocationModal() {
    // desktop only
    if (window.innerWidth < 768) return;

    document.getElementById("locationModal").classList.remove("hidden");
    document.getElementById("locationModal").classList.add("flex");
}

function closeLocationModal() {
    document.getElementById("locationModal").classList.add("hidden");
    document.getElementById("locationModal").classList.remove("flex");
}

function confirmLocation() {
    const input = document.getElementById("locationInput");
    const error = document.getElementById("locationError");

    if (!input.value.trim()) {
        error.classList.remove("hidden");
        return;
    }

    error.classList.add("hidden");

    // You can store location in localStorage
    localStorage.setItem("userLocation", input.value);

    closeLocationModal();
}

// Location Page
function confirmLocation() {
    const input = document.getElementById("locationInput");
    const error = document.getElementById("errorText");

    if (!input.value.trim()) {
        error.classList.remove("hidden");
        return;
    }

    error.classList.add("hidden");
    localStorage.setItem("userLocation", input.value);
    alert("Location saved successfully!");
}


// Category Slider

const slider = document.querySelector(".categoryScroll");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const leftFade = document.querySelector(".leftFade");
const rightFade = document.querySelector(".rightFade");

const SCROLL_STEP = 220;

function isDesktop() {
    return window.innerWidth >= 768;
}

function updateControls() {
    if (!isDesktop()) {
        // MOBILE: force hide
        prevBtn.classList.add("hidden");
        nextBtn.classList.add("hidden");
        leftFade.classList.remove("opacity-100");
        rightFade.classList.remove("opacity-100");
        return;
    }

    const maxScroll = slider.scrollWidth - slider.clientWidth;
    const scrollLeft = Math.ceil(slider.scrollLeft);

    // LEFT
    if (scrollLeft > 0) {
        prevBtn.classList.remove("hidden");
        leftFade.classList.add("opacity-100");
    } else {
        prevBtn.classList.add("hidden");
        leftFade.classList.remove("opacity-100");
        prevBtn.classList.remove("md:flex");
    }

    // RIGHT
    if (scrollLeft < maxScroll - 1) {
        nextBtn.classList.remove("hidden");
        nextBtn.classList.remove("md:flex");
        rightFade.classList.add("opacity-100");
    } else {
        nextBtn.classList.add("hidden");
        rightFade.classList.remove("opacity-100");
    }
}

nextBtn.onclick = () =>
    slider.scrollBy({ left: SCROLL_STEP, behavior: "smooth" });

prevBtn.onclick = () =>
    slider.scrollBy({ left: -SCROLL_STEP, behavior: "smooth" });

slider.addEventListener("scroll", updateControls);
window.addEventListener("resize", updateControls);
window.addEventListener("load", updateControls);


// Product Image Slider
const images = [
    "./Assets/Images/stationery-item-bgremove.webp",
    "./Assets/Images/Bathroom-products-bg-remove.webp",
    "./Assets/Images/cleaning-essentials-bgremove.webp"
];

let currentIndex = 0;
const imageEl = document.getElementById("productImage");
const dot = document.querySelectorAll(".dot");

function updateSlider() {
    imageEl.src = images[currentIndex];
    dot.forEach((dot, i) => {
        dot.classList.toggle("bg-green-500", i === currentIndex);
        dot.classList.toggle("bg-gray-300", i !== currentIndex);
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
}

// Optional: click dot
dot.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentIndex = index;
        updateSlider();
    });
});

// Login Dropdown
function toggleLoginDropdown() {
  const dropdown = document.getElementById("loginDropdown");
  dropdown.classList.toggle("hidden");
}

document.addEventListener("click", function (e) {
  const dropdown = document.getElementById("loginDropdown");
  const loginBtn = document.getElementById("loginBtn");

  if (!dropdown.contains(e.target) && !loginBtn.contains(e.target)) {
    dropdown.classList.add("hidden");
  }
});

// User Login Modal
function openUserLoginModal() {
    document.getElementById("userLoginModal").classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
}

function closeUserLoginModal() {
    document.getElementById("userLoginModal").classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
    resetUserLogin();
}

function showUserOTP() {
    document.getElementById("user-phone-section").classList.add("hidden");
    document.getElementById("user-otp-section").classList.remove("hidden");
    document.querySelector(".user-otp-input").focus();
}

function resetUserLogin() {
    document.getElementById("user-phone-section").classList.remove("hidden");
    document.getElementById("user-otp-section").classList.add("hidden");
}

function submitUserOTP() {
    const toast = document.getElementById("loginSuccessToast");
    toast.classList.remove("hidden");

    setTimeout(() => {
        toast.classList.add("hidden");
        window.location.href = "index.html";
    }, 1500);
}

// OTP Auto Focus
document.addEventListener("input", function (e) {
    if (e.target.classList.contains("user-otp-input")) {
        if (e.target.value.length === 1) {
            const next = e.target.nextElementSibling;
            if (next) next.focus();
        }
    }
});

function showMessageToast() {
    const toast = document.getElementById("messageToast");

    toast.classList.remove("hidden");
    toast.classList.add("animate-fadeIn");

    setTimeout(() => {
        toast.classList.add("hidden");
        toast.classList.remove("animate-fadeIn");
    }, 2000);
}











