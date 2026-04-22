// products.js - Yahan aap apne saare products list karenge
const allProducts = [
    {
        id: 1,
        title: "Midnight Katan Suit",
        price: "₹6,500",
        image: "https://i.postimg.cc/44L2dCx6/suit.jpg",
        category: "suit",
        subCategory: "katan",
        isNew: true,
        isBestSeller: false
    },
    {
        id: 2,
        title: "Zari Buti Saree",
        price: "₹4,800",
        image: "https://i.postimg.cc/wMTrrgTb/siote-1.jpg",
        category: "saree",
        subCategory: "silk",
        isNew: true,
        isBestSeller: true
    },
    {
        id: 3,
        title: "Emerald Handloom Set",
        price: "₹7,200",
        image: "https://i.postimg.cc/44L2dCx6/suit.jpg",
        category: "suit",
        subCategory: "katan",
        isNew: false,
        isBestSeller: true
    },
    {
        id: 4,
        title: "Organza Floral Saree",
        price: "₹8,500",
        image: "https://i.postimg.cc/wMTrrgTb/siote-1.jpg",
        category: "saree",
        subCategory: "organza",
        isNew: true,
        isBestSeller: false
    }
    // Naya product yahan add karte jayein...
];

// Home Page par products dikhane ka function
function renderHomeProducts() {
    const katanGrid = document.getElementById('katan-suits-home');
    const newArrivalGrid = document.getElementById('new-arrivals-home');
    const bestSellerGrid = document.getElementById('best-sellers-home');

    if(katanGrid) {
        const katanProducts = allProducts.filter(p => p.subCategory === 'katan').slice(0, 4);
        katanGrid.innerHTML = katanProducts.map(p => createProductHTML(p, 'salwar-shop.html')).join('');
    }

    if(newArrivalGrid) {
        const newProducts = allProducts.filter(p => p.isNew).slice(0, 8);
        newArrivalGrid.innerHTML = newProducts.map(p => createProductHTML(p, p.category === 'suit' ? 'salwar-shop.html' : 'sarees.html')).join('');
    }

    if(bestSellerGrid) {
        const bestProducts = allProducts.filter(p => p.isBestSeller).slice(0, 8);
        bestSellerGrid.innerHTML = bestProducts.map(p => createProductHTML(p, p.category === 'suit' ? 'salwar-shop.html' : 'sarees.html')).join('');
    }
}

// Product Card ka HTML banane ka function
function createProductHTML(product, link) {
    return `
        <div class="product-card" onclick="window.location.href='${link}'">
            <div class="img-box">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-title">${product.title}</div>
            <div class="price-tag">${product.price}</div>
        </div>
    `;
}

// Jab page load ho tab function chalayein
document.addEventListener('DOMContentLoaded', renderHomeProducts);