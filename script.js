// array to store details
let orderList = [];
let display = document.getElementById("findmeal").attributes.value;
const mealPrice =  document.getElementById("mealPrice").attributes.value.nodeValue; //nodevalue is the property that provides access to the text or comment on HTML element.
const mealName = document.getElementById("mealName").attributes.value.nodeValue;   //used to collect the text content of the 'value' attribute withing the attribute object 

//function to add detailes to the array.
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
orderList.push(mealObj)
console.log(mealObj)     //diplays the updated order list in the console

// Display in modal pop-up the contents of the object 
console.log(orderList)
findmeal.innerHTML = JSON.stringify(orderList);     //findmeal is the id for the the content sec of the modal line 68 html. JSON.stringify 
};
// this code is for when i click my image and then it should hold the img in an array , i think i should concat ........
let imgEle = document.getElementById("English Muffin");
imgEle.addEventListener('click' , function(){
  orderList.push("English Muffin") ; 
});
console.log(orderList)

// This is the quantity button where you increase order or decrease order.
  function increasebtn() {
    document.getElementById("myNumber").stepUp(1);
  };
  function decreasebtn() {
    document.getElementById("myNumber").stepDown(1);
  };
    
  function totalClick(click){
    const totalClicks= document.getElementById("totalClicks");
    const sumvalue = parseInt(totalClicks.innerText) + click; 
    totalClicks.innerText = sumvalue; 

  // Avoid negetives -1
    if(sumvalue < 0){
      totalClicks.innerText = 0
    }

  //Reset values values to 0
    if(click == 0){
      totalClicks.innerText = 0
    }
  };
    
//function to get values of selected sauces
function getSelectSauces(sauces){
  let values = []
  sauces.forEach(sauce => {
    values.push(sauce.value);

  });
  return values
}

// THIS IS ALL FOR THE MODAL CONTENT ONLY AND DISPLAYING THE CONTENTS OF orderList =[] 
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

//The end . 