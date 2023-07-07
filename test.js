//function limit the number of options on the sauces :

function limitSauceSelect(){
    const checkBoxBtns = document.querySelectorAll('.options input[type="checkbox"]');
    let selectCount = 0;
  
    checkBoxBtns.forEach(checkbox=>{
      checkbox.addEventListener('change',()=>{
        if(checkbox.checked){
          if(selectCount >= 2){
            checkbox.checked=false;
          }else{
            selectCount++;
          }
        }else{
          selectCount --;
        }
      });
    });
  }
  limitSauceSelect();
  
  
  // this is the quantity button where you increase order or decrease order.
  
  // function increasebtn() {
  //   document.getElementById("myNumber").stepUp(1);
  // }
  // function decreasebtn() {
  //     document.getElementById("myNumber").stepDown(1);
  //   }
  
  
  // Function to display the order details in the modal
  function displayOrderDetails() {
    const modal = document.querySelectorAll('.modal-overlay');
    const orderItemsList = modal.querySelector('.order-items');
    const subtotalElement = modal.querySelector('.subtotal');
  
    orderItemsList.innerHTML = '';
    for (let i = 0; i < orderItems.length; i++) {
      const orderItem = orderItem[i];
      const listItem = document.createElement('li');
      listItem.textContent = `${orderItem.quantity} x ${orderItem.name}`;
      orderItemsList.appendChild(listItem);
    }
  
    subtotalElement.textContent = `Subtotal: R ${calculateSubtotal()}`;
    modal.style.display = 'flex';
  }
  
  // Add event listener to the "Close" button in the modal
  const closeModalButton = document.querySelector('.close-modal');
  closeModalButton.addEventListener('click', () => {
  const modal = document.querySelector('.modal-overlay');
  modal.style.display = 'none';
  });
  
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  const selectedOptions = Array.from(checkboxes).map(checkbox => checkbox.value);
  

  
  function collectInfo(name, price) {
 
    
    // Generate the modal content
    const modalContent = generateModalContent(name, price, selectedOptions);
  
    // Display the modal content
    alert(modalContent);
  }
  
  function generateModalContent(name, price, selectedOptions) {
    // Generate the content based on the provided parameters and selected options
    let content = `Item: ${name}`;
    content += `Price: R ${price}`;
    content += 'Selected Options:';
  
    if (selectedOptions.length > 0) {
      selectedOptions.forEach(option => {
        content += `- ${option}`;
      });
    } else {
      content += 'No options selected';
    }
  
    return content;
  };
  

  
  displayText +=`You ordered ${mealSelected} , Sides ${sideFood} , Sauces ${sauceToSpread } `;
  
  
  // Add to Order Function 
  function addToOrder(mealSelected) {
    // Check if mealSelected has selected/checked contents
    return mealSelected.trim().length > 0;
  }
  if (addToOrder(mealSelected)) {
    console.log('Meal has selected contents');
  } else {
    console.log('Meal does not have selected contents');
  };
  
  //view order function 
  
  function viewOrder(displayText){
    return
  };
  alert(displayText);