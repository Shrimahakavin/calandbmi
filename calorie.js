let foodsData = [];

// Fetch the data from the external JSON file
fetch('tamil_foods.json')
    .then(response => response.json())
    .then(data => {
        foodsData = data;
        populateFoodOptions();
    })
    .catch(error => console.error('Error loading the JSON data:', error));

// Populate the dropdown with food names
function populateFoodOptions() {
    const foodSelect = document.getElementById('food');
    foodsData.forEach(food => {
        const option = document.createElement('option');
        option.value = food.name;
        option.textContent = food.name;
        foodSelect.appendChild(option);
    });
}

// Function to update calories based on selected food
function updateCalories() {
    const selectedFood = document.getElementById('food').value;
    const quantity = document.getElementById('quantity').value;
    const foodItem = foodsData.find(food => food.name === selectedFood);

    if (foodItem) {
        const caloriesPerItem = foodItem.calorie;
        document.getElementById('calories-per-item').textContent = caloriesPerItem;
        document.getElementById('total-calories').textContent = caloriesPerItem * quantity;
    } else {
        document.getElementById('calories-per-item').textContent = 0;
        document.getElementById('total-calories').textContent = 0;
    }
}

// Function to calculate the total calories
function calculateCalories() {
    const selectedFood = document.getElementById('food').value;
    const quantity = document.getElementById('quantity').value;
    const foodItem = foodsData.find(food => food.name === selectedFood);

    if (foodItem) {
        const totalCalories = foodItem.calorie * quantity;
        document.getElementById('total-calories').textContent = totalCalories;
    } else {
        alert('Please select a food item.');
    }
}
