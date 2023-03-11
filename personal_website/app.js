const generate_button = document.querySelector(".generate_button");

generate_button.addEventListener("click", generateRandomNumber);

function generateRandomNumber() {
    randomNumber = Math.floor(Math.random() * 51)
    const display_number = document.querySelector(".display_number");
    display_number.innerHTML = randomNumber;
}
