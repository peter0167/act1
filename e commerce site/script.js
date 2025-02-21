document.addEventListener("DOMContentLoaded", function () {
    const cart = [];
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            const product = button.parentElement;
            const productName = product.querySelector("h2").innerText;
            const productPrice = product.querySelector("p").innerText;

            const cartItem = {
                name: productName,
                price: productPrice
            };

            cart.push(cartItem);
            updateCart();
            alert(`${productName} has been added to the cart!`);
        });
    });

    function updateCart() {
        console.log("Cart Items:", cart);
    }
});
