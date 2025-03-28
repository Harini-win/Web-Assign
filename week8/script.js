function calculateTotal() {
    let adultCount = document.getElementById("adults");
    let childCount = document.getElementById("children").value;

    let totalAmount = (adultCount * 10) + (childCount * 5);
    document.getElementById("total").value = "₹" + totalAmount;
}