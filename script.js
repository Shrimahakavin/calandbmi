// Function to toggle the visibility of the recipe content
function showRecipe(meal) {
    // Define the recipes in an object
    const recipes = {
        idli_sambar: "Pour Idli batter into idli molds and steam for 10 minutes. Sambar: Cook toor dal with turmeric until soft and mash it. Heat oil, add mustard seeds, onions, and curry leaves. Add tomatoes, vegetables, and cook with sambar powder. Pour in tamarind extract and boiled dal, simmer for five minutes.",
        dosai: "Dosai Recipe: Ferment rice and urad dal batter overnight. Spread on a hot tawa, drizzle oil, and cook until golden brown. Serve with sambar and molaga podi.",
        upma: "Upma Recipe: Roast wheat rava, sauté mustard seeds, green chilies, and vegetables, then cook with water until soft.",
        idiyappam: "Kothu Idiyappam Recipe: Steam rice noodles, stir-fry with vegetables, spices, and curry leaves.",
        pongal: "Pongal Recipe: Cook rice and moong dal with black pepper, cumin, ginger, and cashews.",
        pesarattu: "Pesarattu Recipe: Soak green gram, blend into a batter, and cook like a dosa on a hot pan.",
        uttapam: "Uttapam Recipe: Pour thick dosa batter on a pan, top with onions, tomatoes, and green chilies.",
        brown_rice_sambar: "Brown Rice & Sambar Recipe: Serve cooked brown rice with lentil-based sambar rich in vegetables.",
        rasam_sadham: "Rasam Sadham Recipe: Tamarind-based rasam with tempered spices, served with rice and sundal.",
        thalicha_sadham: "Thalicha Sadham Recipe: Tempered rice with curry leaves, mustard seeds, and keerai poriyal.",
        vatha_kulambu: "Vatha Kulambu Recipe: Spiced tamarind gravy with sundried vegetables, served with brown rice.",
        curd_rice: "Curd Rice Recipe: Mix cooked rice with curd, add grated carrot, pomegranate, and tempering.",
        vegetable_kootu: "Vegetable Kootu Recipe: A mixed vegetable curry with coconut and dal base, served with rice.",
        lemon_rice: "Lemon Rice Recipe: Cooked rice mixed with lemon juice, turmeric, and tempered spices.",
        roti: "Roti Recipe: Whole wheat flatbread served with vegetable curry.",
        chapati_roll: "Chicken Chapati Roll Recipe: Roti stuffed with spiced grilled chicken and vegetables.",
        egg_kothu_parotta: "Egg Kothu Parotta Recipe: Chopped parotta stir-fried with eggs, onion, and spices.",
        grilled_fish: "Grilled Fish Recipe: Marinate fish with spices, grill until golden, and serve with steamed veggies.",
        kollu_sundal: "Kollu Sundal Recipe: Boiled horse gram tempered with mustard seeds, curry leaves, and coconut.",
        boiled_egg: "Boiled Egg Recipe: Boil eggs for 10 minutes, sprinkle pepper, and serve.",
        buttermilk: "Buttermilk Recipe: Whisk curd with water, add salt, ginger, and coriander.",
        puffed_rice: "Puffed Rice Recipe: Mix pori with roasted peanuts and a dash of salt.",
        roasted_makhana: "Roasted Makhana Recipe: Dry roast fox nuts with salt and spices.",
        cucumber_slices: "Cucumber Slices Recipe: Slice cucumber and sprinkle with chat masala.",
        steamed_peanuts: "Steamed Masala Peanuts Recipe: Steam peanuts and mix with salt, lemon, and chili powder."
    };

    // Hide all recipe contents
    const recipeContents = document.querySelectorAll('.recipe-content');
    recipeContents.forEach(function (content) {
        content.style.display = 'none';
    });

    // Show the specific recipe
    const mealContainer = document.getElementById(meal);
    if (mealContainer) {
        mealContainer.innerText = recipes[meal] || "Recipe not available";
        mealContainer.style.display = 'block';  // Show the recipe content
    }
}

// Function to toggle the visibility of the Exercise Routine section
function toggleExercise() {
    const exerciseSection = document.getElementById("exercise");
    if (exerciseSection.style.display === "none" || exerciseSection.style.display === "") {
        exerciseSection.style.display = "block"; // Show exercise section
    } else {
        exerciseSection.style.display = "none"; // Hide it
    }
}

// Hide all recipe and exercise sections by default when the page loads
document.addEventListener('DOMContentLoaded', function () {
    const allContent = document.querySelectorAll('.recipe-content');
    allContent.forEach(function (content) {
        content.style.display = 'none';  // Hide all recipe sections initially
    });

    // Hide exercise section on page load
    document.getElementById("exercise").style.display = "none";
});
