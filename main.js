const result_output = document.getElementById("result");
const food_weight_input = document.getElementById("food-weight");
const calc_btn = document.getElementById("calc-btn");
const food_category = document.querySelectorAll(".food-category");
const container = document.querySelector(".food-items");
const add_food_btn = document.getElementById("add-item");
/* Dynamic inputs creating */
let counter = 0;
function newfoodInput() {
  counter++;
  const foodItem = document.createElement("div");
  foodItem.classList.add("food-item");
  foodItem.id = `added-food-input-${counter}`;

  const foodCategoryOptions = food_names
    .map(name => `<option>${name}</option>`)
    .join(""); 

  foodItem.innerHTML = `
    <div class="food-info">
      <label for="food-weight${counter}">Enter your food weight:</label>
      <input type="number" name="food-info" id="food-weight${counter}" value="0" min="0">
      <label for="food-category${counter}">What are you going to eat:</label>
      <select name="food-info" id="food-category${counter}" class="food-category">
        <option>Choose option</option>
        ${foodCategoryOptions}
      </select>
    </div>
    <button onclick="add_remove('added-food-input-${counter}')">
      <img src="./footage/images/remove.png" alt="remove item" title="remove">
    </button>
  `;

  container.appendChild(foodItem);
}
function removeFoodItem() {
  const added_food_input = document.querySelectorAll(".food-item");
  added_food_input.forEach(el => el.remove());
}
function changeHeight(){
  if(container.childElementCount > 2){
    document.body.style.height = "fit-content";
    document.body.style.backgroundSize = "cover";
  }else{
    document.body.style.height = "100vh";
  }
}
  function add_remove(containerId) {
  if (containerId === "add-item") {
      newfoodInput();
      changeHeight();
      window.scrollTo(0,document.body.scrollHeight);
  } else {
    const itemToRemove = document.getElementById(containerId);
    itemToRemove.remove();
    changeHeight()
  }
}
// not ready yet
/*const langs = document.querySelectorAll(".lang");
langs.forEach(lang =>{
  lang.addEventListener("click", () =>{
    let fwl = document.getElementById("fwl");
    let fcl = document.getElementById("fcl");
    let co = document.getElementById("co");
      switch(lang.id){
        case "ar": lang.classList.add("selected");
           document.getElementById("en").classList.remove("selected");
           fwl.textContent = ":كم  ستأكل  (غ)";
           fcl.textContent = ":ماذا سـتأكل";
           co.textContent = "اختر";
           fwl.style.gridColumn  = "2/3";
           fwl.style.gridRow = "1/2";
           fwl.style.textAlign = "right"
           fcl.style.gridColumn  = "2/3";
           fcl.style.gridRow = "2/2";
           fcl.style.textAlign = "right";
           calc_btn.value = "حساب";
           food_category.forEach(fc =>{
            fc.style.textAlign = "right";
           })
           food_weight_input.style.textAlign = "right";
        break
        case "en": lang.classList.add("selected");
           document.getElementById("ar").classList.remove("selected");
           fwl.textContent = "Enter your food weight (g):";
           fcl.textContent = "What are you going to eat:";
           co.textContent = "Choose option";
           fwl.style.gridColumn  = "unset";
           fwl.style.gridRow = "unset";
           fwl.style.textAlign = "left"
           fcl.style.gridColumn  = "unset";
           fcl.style.gridRow = "unset";
           fcl.style.textAlign = "left";
           calc_btn.value = "calculate";
           food_category.forEach(fc =>{
            fc.style.textAlign = "left";
           })
           food_weight_input.style.textAlign = "left";
        break
      }
                                      })
                     })*/
/* calculating needed insulin uints */

const  food_names = ["frites", "Lentilles", "riz", "pates","kesra"];
const sugar_in100gOf_food_items = [40, 20, 30, 30,60];
try{function createFoodObject(name, sugarIn100g) {
  return { name, sugarIn100g };
}

const foodObjects = food_names.map((name, index) =>
  createFoodObject(name, sugar_in100gOf_food_items[index])
);

// Populate the first select field with options
const firstSelect = document.getElementById("food-category");
food_names.forEach(name => {
  const option = document.createElement("option");
  option.textContent = name;
  firstSelect.appendChild(option);
});

calc_btn.onclick = () => {
  let totalInsulinUnits = 0;

  const foodItems = document.querySelectorAll(".food-item");
  foodItems.forEach(item => {
    const weightInput = item.querySelector("[name='food-info']");
    const categorySelect = item.querySelector(".food-category");
    const selectedFood = foodObjects.find(
      food => food.name === categorySelect.value
    );

    if (selectedFood && parseFloat(weightInput.value) >= 10) {
      const sugarIn100g = selectedFood.sugarIn100g;
      const insulinUnits =
        (parseFloat(weightInput.value) * sugarIn100g) / 100 / 11;
      totalInsulinUnits += insulinUnits;
    } else {
      window.alert("Invalid food category selection or weight.");
      result_output.textContent = "0";
      return;
    }
  });

  if (totalInsulinUnits > 0) {
    result_output.textContent = totalInsulinUnits.toFixed(2);
  } else {
    window.alert("10 is the minimum weight");
    result_output.textContent = "0";
  }
};}catch(err){
  console.log(err.message);
}