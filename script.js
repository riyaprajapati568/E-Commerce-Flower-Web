// MENU TOGGLE
const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.onclick = () => {
  navbar.classList.toggle("active");
};

// CART FUNCTION
let cartCount = 0;
const cartDisplay = document.getElementById("cart-count");
const addCartBtns = document.querySelectorAll(".add-cart");

addCartBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    cartCount++;
    cartDisplay.textContent = cartCount;
    btn.innerText = "Added ✓";
    btn.style.background = "#444";
    setTimeout(() => {
      btn.innerText = "Add to Cart";
      btn.style.background = "#2e8b57";
    }, 1000);
  });
});

// HEART (WISHLIST)
const heartIcon = document.querySelector(".fa-heart");

heartIcon.onclick = () => {
  heartIcon.classList.toggle("active");
  heartIcon.style.color = heartIcon.classList.contains("active") ? "red" : "#333";
};

// SHOP BUTTON SCROLL
document.getElementById("shopBtn").onclick = () => {
  document.querySelector(".products").scrollIntoView({
    behavior: "smooth"
  });
};
