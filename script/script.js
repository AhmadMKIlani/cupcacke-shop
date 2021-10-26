$(document).ready(show_cupcakes);

var cup_cakes=[
    {"name":"Chocolate","calories":"high","weight":"200gm"},
    {"name":"Carrot","calories":"medium","weight":"150gm"},
    {"name":"Banana","calories":"high","weight":"200gm"},
    {"name":"Strawberry","calories":"low","weight":"160gm"},
    {"name":"Peanut","calories":"medium","weight":"200gm"}
];


let customerName = document.querySelector(".customer-name");
let customerNumber = document.querySelector(".customer-number");
let cackeType = document.querySelector(".cacke-type");
let time = document.querySelector(".time");
let options = document.querySelector(".options");
let table = document.querySelector(".table");
let bigForm = document.querySelector(".big-form");
let welcome = document.querySelector(".welcome");
let submitButton =document.querySelector(".submit-button"); 
var error = document.querySelectorAll(".error");
let show = document.querySelector(".show");

function removeError(){
    error = "";
}


function show_cupcakes(){
    //write code that shows the cupcakes in the table as per the instructions
}

customerName.addEventListener("blur", (e) => {
    try {
        if (e.target.value === "") throw "The name shouldn't be empty!";
        if (e.target.value !== "") removeError(error[0]);
        if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(e.target.value))
            throw "You have entered an invalid name";
        if (/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(e.target.value))
            removeError(error[0]);
    } catch (errors) {
        error[0].innerHTML = errors;
    }


});

customerNumber.addEventListener("blur", (e) => {
    try {
        if (e.target.value === "") throw "The name shouldn't be empty!";
        if (e.target.value !== "") removeError(error[1]);
        if (!/[^0-9]/g.test(e.target.value))
            throw "You have entered an invalid name";
        if (/[^0-9]/g.test(e.target.value))
            removeError(error[1]);
    } catch (errors) {
        error[1].innerHTML = errors;
    }
});




function validate(){
    //write code that validates the form

   

}

function show_storage() {


    submitButton.addEventListener("click",() =>{
            if (
    customerName.value != "" &&
    customerNumber.value != "" ) {
    localStorage.setItem("custmer-name", customerName.value);
    localStorage.setItem("customer-number", customerNumber.value);
}

    });


    customerName.addEventListener("blur", (e) => {
        localStorage.setItem("customer-name", e.target.value);
      });

    welcome.innerHTML = `welcome ${localStorage.getItem("customer-name")}`;
  


}


fetch("https://raw.githubusercontent.com/haithamassoli/HTML-CSS-JS-Assessment-Task/main/cup%20cakes.json")
  .then((response) => response.json())
  .then((data) => {
    for (i = 0; i < data.length; i++) {
      let tabel = ` <tr>
    <td>${data[i].name}</td>
    <td class="${allColor(data[i])}">${data[i].calories}</td>
    <td>${data[i].weight}</td>
  </tr>`;
      table.insertAdjacentHTML("beforeend", tabel);
    }
  });

function allColor(data) {
  return data.calories == "high"
    ? "red"
    : data.calories == "low"
    ? "green"
    : data.calories == "medium"
    ? "orange"
    : "";
}


