// Sample data (in a real application, this would come from a backend)
const farmers = [
    { id: 1, name: "Green Thumb Farm", specialty: "Organic vegetables" },
    { id: 2, name: "Sunny Orchard", specialty: "Fruits and jams" },
    { id: 3, name: "Blooming Fields", specialty: "Flowers and ornamental plants" }
];

const products = [
    { id: 1, name: "Organic Tomatoes", price: 2.99, farmerId: 1 },
    { id: 2, name: "Apple Jam", price: 4.99, farmerId: 2 },
    { id: 3, name: "Sunflower Bouquet", price: 9.99, farmerId: 3 }
];

// Function to create farmer cards
function createFarmerCard(farmer) {
    return `
        <div class="farmer-card">
            <h3>${farmer.name}</h3>
            <p>${farmer.specialty}</p>
        </div>
    `;
}

// Function to create product cards
function createProductCard(product) {
    return `
        <div class="product-card">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `;
}

// Function to populate featured farmers
function populateFeaturedFarmers() {
    const featuredFarmers = document.getElementById('featuredFarmers');
    if (featuredFarmers) {
        featuredFarmers.innerHTML = farmers.map(createFarmerCard).join('');
    }
}

// Function to populate featured products
function populateFeaturedProducts() {
    const featuredProducts = document.getElementById('featuredProducts');
    if (featuredProducts) {
        featuredProducts.innerHTML = products.map(createProductCard).join('');
    }
}

// Function to populate all farmers
function populateAllFarmers() {
    const farmerList = document.getElementById('farmerList');
    if (farmerList) {
        farmerList.innerHTML = farmers.map(createFarmerCard).join('');
    }
}

// Function to populate all products
function populateAllProducts() {
    const productList = document.getElementById('productList');
    if (productList) {
        productList.innerHTML = products.map(createProductCard).join('');
    }
}

// Modal functionality
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const closeBtns = document.getElementsByClassName('close');

loginBtn.onclick = () => loginModal.style.display = "block";
registerBtn.onclick = () => registerModal.style.display = "block";

for (let closeBtn of closeBtns) {
    closeBtn.onclick = function() {
        loginModal.style.display = "none";
        registerModal.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
    if (event.target == registerModal) {
        registerModal.style.display = "none";
    }
}

// Initialize page content
document.addEventListener('DOMContentLoaded', () => {
    populateFeaturedFarmers();
    populateFeaturedProducts();
    populateAllFarmers();
    populateAllProducts();
});

// Placeholder function for adding to cart
function addToCart(productId) {
    alert(`Product ${productId} added to cart!`);
}