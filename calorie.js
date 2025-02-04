let foodsData = [];
fetch('tamil_foods.json')
    .then(response => response.json())
    .then(data => {
        foodsData = data;
        populateFoodOptions();
    })
    .catch(error => console.error('Error loading the JSON data:', error));
function populateFoodOptions() {
    const sections = ['calorie', 'protein', 'fat', 'fibre'];
    sections.forEach(type => {
        const foodSelect = document.getElementById(`food-${type}`);
        foodSelect.innerHTML = '<option value="">--Select Food--</option>'; // Reset
        foodsData.forEach(food => {
            const option = document.createElement('option');
            option.value = food.name;
            option.textContent = food.name;
            foodSelect.appendChild(option);
        });
    });
}
function updateValues(type) {
    const selectedFood = document.getElementById(`food-${type}`).value;
    const quantity = parseInt(document.getElementById(`quantity-${type}`).value) || 1;
    const foodItem = foodsData.find(food => food.name === selectedFood);

    if (foodItem) {
        document.getElementById(`${type}-per-item`).textContent = foodItem[type] || 0;
        document.getElementById(`total-${type}`).textContent = (foodItem[type] * quantity) || 0;
    } else {
        resetValues(type);
    }
}
function resetValues(type) {
    document.getElementById(`${type}-per-item`).textContent = '0';
    document.getElementById(`total-${type}`).textContent = '0';
}
function calculateValues(type) {
    updateValues(type);
}
function showSection(sectionId) {
    const sections = ['calorie-section', 'protein-section', 'fat-section', 'fibre-section'];
    sections.forEach(section => {
        document.getElementById(section).style.display = (section === sectionId) ? 'block' : 'none';
    });
}
