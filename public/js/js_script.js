let myButton = document.getElementById("purchase_button");

// function readForm() {
//     let info = new Object();
//     info.name = document.getElementById("name").value;
//     info.email = document.getElementById("email").value;
//     info.street = document.getElementById("street").value;
//     info.house = document.getElementById("house").value;
//     info.payment_options = document.getElementById("payment_options").value;
//     info.gender = document.querySelector('input[name="gender"]:checked').value;

//     // let info = { name, email, street, house, payment_options, gender };
//     return info;
// }

function readForm() {
    return {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        street: document.getElementById("street").value,
        house: document.getElementById("house").value,
        payment_options: document.getElementById("payment_options").value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        selectedBurgers: [...document.querySelectorAll('#burger_menu input:checked')].map(x => " " + x.value),
    }

}


// myButton.onclick = function () {
//     console.log(".onclick!");
// }