// Sample data (You can replace this with your actual API call)
const cartData = [
    { id: 1, name: 'Product 1', price: 500, quantity: 2 },
    { id: 2, name: 'Product 2', price: 1500, quantity: 1 },
    { id: 3, name: 'Product 3', price: 1000, quantity: 3 }
];

// Function to display cart data
function displayData() {
    const cartItemsContainer = document.getElementById('cart-items');
    let totalPrice = 0;

    // Clear the existing content
    cartItemsContainer.innerHTML = '';

    if (cartData.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        document.getElementById('total-price').innerText = 'Total: Rs. 0.00';
    } else {
        cartData.forEach(item => {
            // Calculate total price
            totalPrice += item.price * item.quantity;

            // Create item HTML
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <h3>${item.name}</h3>
                <p>Price: Rs. ${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
                <button class="remove-btn" onclick="removeItem(${item.id})">Remove</button>
            `;

            cartItemsContainer.appendChild(itemElement);
        });

        // Update total price in the DOM
        document.getElementById('total-price').innerText = `Total: Rs. ${totalPrice.toFixed(2)}`;
    }
}

// Function to remove item from cart
function removeItem(itemId) {
    // Remove item by filtering the cartData
    const updatedCart = cartData.filter(item => item.id !== itemId);
    
    // Update the cartData (for testing purposes, I am directly updating the global cartData)
    cartData.length = 0;  // Clear the array
    cartData.push(...updatedCart);  // Add back updated items

    // Display updated cart
    displayData();
}

// Call displayData when page loads
window.onload = function() {
    displayData();
};
