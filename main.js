// Event Listener for BMI Form Submission
document.getElementById("bmiForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let age = parseInt(document.getElementById("age").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let gender = document.querySelector('input[name="gender"]:checked')?.value;
    let activityMultiplier = parseFloat(document.getElementById("activity-level").value);

    if (!age || !weight || !height || !gender || isNaN(activityMultiplier)) {
        document.getElementById("bmi-result").innerHTML = `<p style="text-align: center; color: red;">Please enter all fields.</p>`;
        return;
    }

    height = height / 100; // Convert height to meters
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2); // Round BMI to two decimal places

    let resultText = `<p style="text-align: center; font-size: 18px;">Your BMI is <b>${bmi}</b>. <br>`;
    let bmiCategory = "";

    if (bmi < 18.5) {
        bmiCategory = "underweight";
        resultText += `You are <b>Underweight</b>.</p>`;
    } else if (bmi < 24.9) {
        bmiCategory = "normalweight";
        resultText += `You have a <b>Normal Weight</b>.</p>`;
    } else if (bmi < 29.9) {
        bmiCategory = "overweight";
        resultText += `You are <b>Overweight</b>.</p>`;
    } else {
        bmiCategory = "obese";
        resultText += `You are <b>Obese</b>.</p>`;
    }

    // Calculate BMR
    let bmr;
    if (gender === "male") {
        bmr = 88.36 + (13.4 * weight) + (4.8 * height * 100) - (5.7 * age);
    } else {
        bmr = 447.6 + (9.2 * weight) + (3.1 * height * 100) - (4.3 * age);
    }

    let tdee = bmr * activityMultiplier;

    // Add BMR and TDEE results to the display
    resultText += `<div style="text-align: center; margin-top: 15px;">
        <p><b>BMR:</b> ${bmr.toFixed(2)} kcal/day</p>
        <p style="font-size: 16px; color: gray;">BMR (Basal Metabolic Rate) is the number of calories your body needs to function at rest.</p>
    </div>`;

    resultText += `<div style="text-align: center; margin-top: 15px;">
        <p><b>TDEE:</b> ${tdee.toFixed(2)} kcal/day</p>
        <p style="font-size: 16px; color: gray;">TDEE (Total Daily Energy Expenditure) is the total calories you burn in a day, including activities.</p>
    </div>`;

    // Display the result
    document.getElementById("bmi-result").innerHTML = resultText;

    // Display the "Check Diet Plans" button
    let checkDietBtn = document.getElementById("check-diet-btn");
    checkDietBtn.style.display = "block";
    checkDietBtn.style.margin = "20px auto";
    checkDietBtn.dataset.category = bmiCategory;

    // Show the plan selection form
    document.getElementById("plan-selection-form").style.display = "block";
    document.getElementById("plan-selection-form").scrollIntoView({ behavior: "smooth" });

    // Show the Calorie Calculator button in the header
    document.getElementById("calorie-calculator-btn-header").style.display = "block"; 
});

// Event Listener for Plan Selection Form
document.getElementById("planForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let selectedPlan = document.getElementById("plan-choice").value;
    let category = document.getElementById("check-diet-btn").dataset.category;

    if (selectedPlan === "diet") {
        if (category === "overweight") {
            window.location.href = "overweight.html"; // Redirect to the overweight diet page
        } else if (category === "normalweight") {
            window.location.href = "normalweight.html"; // Redirect to the normalweight diet page
        } else if (category === "obese") {
            window.location.href = "obese.html"; // Redirect to the obese diet page
        } else if (category === "underweight") {
            window.location.href = "underweight.html"; // Redirect to the underweight diet page
        }
    }

    // Show the meal selection if Diet plan is selected
    if (selectedPlan === "diet") {
        document.getElementById("meal-selection").style.display = "block";
    } else if (selectedPlan === "exercise") {
        // Redirect to the exercise section on the appropriate page based on the BMI category
        window.location.href = category + ".html#exercise-section";
    }
});

// Event Listener for Meal Selection
document.getElementById("meal-choice").addEventListener("change", function () {
    let selectedMeal = document.getElementById("meal-choice").value;
    let category = document.getElementById("check-diet-btn").dataset.category;
    if (selectedMeal) {
        // Redirect to the appropriate meal page based on the BMI category
        window.location.href = category + ".html#" + selectedMeal;
    }
});

