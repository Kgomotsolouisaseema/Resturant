// array to store details
let orderList = [];

const mealPrice =
  document.getElementById("mealPrice").attributes.value.nodeValue;
const mealName = document.getElementById("mealName").attributes.value.nodeValue;
//function to add detailes to the array
function addMealChoice() {
  let side = document.querySelectorAll('input[type="radio"]:checked')[0].value;
  let sauces = document.querySelectorAll('input[type="checkbox"]:checked');
  let mealObj = {
    name: mealName,
    price: mealPrice,
    side : side,
    sauces:getSelectSauces(sauces)
  };
  
  // let sauces = document.getElementsByName("sauce").value;
// console.log(sauces);
orderList.push(mealObj)
console.log(mealObj)
}

//function to get values of selected sauces
function getSelectSauces(sauces){
  let values = []
  sauces.forEach(sauce => {
    values.push(sauce.value);

  });
  return values
}


































//Get the modal
let modal = document.getElementById("myModal");
//Get the button that open the modal
let btn = document.getElementById("myBtn");
//Get the span <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
//When the user clicks the button, open the modal :
btn.onclick = function click() {
  modal.style.display = "block"; //this function connects with the css "blocked line 88"
};
//When the user clicks on <span> (x) , close the modal
span.onclick = function close() {
  modal.style.display = "none";
};

// When the user clicks  anywhere outside of the modal,close it
window.onclick = function goBack() {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
