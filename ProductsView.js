
function updatePrice() {
    var selectedOption = document.querySelector("select option:checked");
    var selectedGrams = selectedOption.textContent;


    var pricePerGrams;
    switch (selectedGrams) {
        case "250g":
            pricePerGrams = 399.99;
            break;
        case "500g":
            pricePerGrams = 699.99;
            break;
        case "750g":
            pricePerGrams = 999.99;
            break;
        case "1kg":
            pricePerGrams = 1299.99;
            break;
        case "1Piece":
            pricePerGrams = 199.99;
            break;
        default:
            pricePerGrams = 0;
    }

    var quantity = parseInt(document.querySelector("input[type='number']").value);
    if (isNaN(quantity) || quantity < 0) {
        quantity = 0;
    }

    var totalPrice = pricePerGrams * quantity;

    var priceElement = document.querySelector("h4");
    priceElement.textContent = "Rs: " + totalPrice.toFixed(2);
}

document.querySelector("select").addEventListener("change", updatePrice);

document.querySelector("input[type='number']").addEventListener("input", updatePrice);
