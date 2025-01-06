const products  = [
    {id: 1, name: "phone", price: 3200, quantity: 25, Image: "https://images.unsplash.com/photo-1606107557195-0e4589d1cec5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {id: 2, name: "Charger", price: 200, quantity: 250, Image: "https://via.placeholder.com/150"},
    {id: 3, name: "Air-bud", price: 9900, quantity: 20, Image: "https://via.placeholder.com/150"},
];

let cart = [ ];

//elements
const productList = document.getElementById("list");
const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");
const clearCart = document.getElementById("clear-cart");

function renderProducts() {
    products.forEach ((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
            <img src= "${product.Image}" alt= "${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <p>${product.quantity}</p>
            <button onclick ="addToCart(${product.id})">Add to cart</button> 
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    cart.push(product);
    renderCart();
}

function renderCart() {
    cartItems.innerHTML= " ";
    let total= 0;

    cart.forEach((item, index) => {
        total += item.price;

        const cartItem = document.createElement("li");
        cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.style.marginLeft = "10px";
        removeBtn.onclick = () => {
            cart.splice(index, 1);
            renderCart();
        };

        cartItem.appendChild(removeBtn);
        cartItems.appendChild(cartItem);
    });

    totalPrice.textContent = total.toFixed(2);
}

clearCartBtn.addEventListener("click", () => {
    cart = [ ];
    renderCart();
});

//initialize
renderProducts();