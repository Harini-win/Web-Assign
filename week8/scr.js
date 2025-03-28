document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    let order = [];

    if (document.getElementById("apple").checked) {
        let qty = document.getElementById("appleQty").value || 0;
        order.push({ item: "Apple", price: 10, quantity: qty });
    }

    if (document.getElementById("banana").checked) {
        let qty = document.getElementById("bananaQty").value || 0;
        order.push({ item: "Banana", price: 5, quantity: qty });
    }

    if (document.getElementById("avocado").checked) {
        let qty = document.getElementById("avocadoQty").value || 0;
        order.push({ item: "Avocado", price: 7, quantity: qty });
    }

    let orderData = {
        name: name,
        phone: phone,
        email: email,
        order: order
    };

    localStorage.setItem("orderData", JSON.stringify(orderData));
    window.location.href = "rec.html";
});
