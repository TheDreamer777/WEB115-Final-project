function generateMealPlan() {
    // Get user input values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let goal = document.getElementById("goal").value;

    // Validate email
    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Get meal plan input values for each day
    let sundayBreakfast = document.getElementById("sundayBreakfast").value;
    let sundayFirstSnack = document.getElementById("sundayFirstSnack").value;
    let sundayLunch = document.getElementById("sundayLunch").value;
    let sundaySecondSnack = document.getElementById("sundaySecondSnack").value;
    let sundayDinner = document.getElementById("sundayDinner").value;

    let mondayBreakfast = document.getElementById("mondayBreakfast").value;
    let mondayFirstSnack = document.getElementById("mondayFirstSnack").value;
    let mondayLunch = document.getElementById("mondayLunch").value;
    let mondaySecondSnack = document.getElementById("mondaySecondSnack").value;
    let mondayDinner = document.getElementById("mondayDinner").value;

    let tuesdayBreakfast = document.getElementById("tuesdayBreakfast").value;
    let tuesdayFirstSnack = document.getElementById("tuesdayFirstSnack").value;
    let tuesdayLunch = document.getElementById("tuesdayLunch").value;
    let tuesdaySecondSnack = document.getElementById("tuesdaySecondSnack").value;
    let tuesdayDinner = document.getElementById("tuesdayDinner").value;

    let wednesdayBreakfast = document.getElementById("wednesdayBreakfast").value;
    let wednesdayFirstSnack = document.getElementById("wednesdayFirstSnack").value;
    let wednesdayLunch = document.getElementById("wednesdayLunch").value;
    let wednesdaySecondSnack = document.getElementById("wednesdaySecondSnack").value;
    let wednesdayDinner = document.getElementById("wednesdayDinner").value;

    let thursdayBreakfast = document.getElementById("thursdayBreakfast").value;
    let thursdayFirstSnack = document.getElementById("thursdayFirstSnack").value;
    let thursdayLunch = document.getElementById("thursdayLunch").value;
    let thursdaySecondSnack = document.getElementById("thursdaySecondSnack").value;
    let thursdayDinner = document.getElementById("thursdayDinner").value;

    let fridayBreakfast = document.getElementById("fridayBreakfast").value;
    let fridayFirstSnack = document.getElementById("fridayFirstSnack").value;
    let fridayLunch = document.getElementById("fridayLunch").value;
    let fridaySecondSnack = document.getElementById("fridaySecondSnack").value;
    let fridayDinner = document.getElementById("fridayDinner").value;

    let saturdayBreakfast = document.getElementById("saturdayBreakfast").value;
    let saturdayFirstSnack = document.getElementById("saturdayFirstSnack").value;
    let saturdayLunch = document.getElementById("saturdayLunch").value;
    let saturdaySecondSnack = document.getElementById("saturdaySecondSnack").value;
    let saturdayDinner = document.getElementById("saturdayDinner").value;
    
    // Generate the meal plan HTML content
    let mealPlanHTML = `
        <div id="banner2" style="text-align: center;">
        <img src="banner2.png" alt="Perfectly Portioned Fitness Banner">
        </div>
        <div id="plan">
                <h2 style="text-align: center;">Meal Plan for ${name}</h2>
                <h3 style="text-align: center;">Email: ${email}</h3>
                <h3 style="text-align: center;">Goal for the Week: ${goal}</h3>

                <h3 style="text-align: center;">Sunday:</h3>
                <p style="text-align: center;">Breakfast: ${sundayBreakfast}</p>
                <p style="text-align: center;">First Snack: ${sundayFirstSnack}</p>
                <p style="text-align: center;">Lunch: ${sundayLunch}</p>
                <p style="text-align: center;">Second Snack: ${sundaySecondSnack}</p>
                <p style="text-align: center;">Dinner: ${sundayDinner}</p>

                <h3 style="text-align: center;">Monday:</h3>
                <p style="text-align: center;">Breakfast: ${mondayBreakfast}</p>
                <p style="text-align: center;">First Snack: ${mondayFirstSnack}</p>
                <p style="text-align: center;">Lunch: ${mondayLunch}</p>
                <p style="text-align: center;">Second Snack: ${mondaySecondSnack}</p>
                <p style="text-align: center;">Dinner: ${mondayDinner}</p>

                <h3 style="text-align: center;">Tuesday:</h3>
                <p style="text-align: center;">Breakfast: ${tuesdayBreakfast}</p>
                <p style="text-align: center;">First Snack: ${tuesdayFirstSnack}</p>
                <p style="text-align: center;">Lunch: ${tuesdayLunch}</p>
                <p style="text-align: center;">Second Snack: ${tuesdaySecondSnack}</p>
                <p style="text-align: center;">Dinner: ${tuesdayDinner}</p>

                <h3 style="text-align: center;">Wednesday:</h3>
                <p style="text-align: center;">Breakfast: ${wednesdayBreakfast}</p>
                <p style="text-align: center;">First Snack: ${wednesdayFirstSnack}</p>
                <p style="text-align: center;">Lunch: ${wednesdayLunch}</p>
                <p style="text-align: center;">Second Snack: ${wednesdaySecondSnack}</p>
                <p style="text-align: center;">Dinner: ${wednesdayDinner}</p>

                <h3 style="text-align: center;">Thursday:</h3>
                <p style="text-align: center;">Breakfast: ${thursdayBreakfast}</p>
                <p style="text-align: center;">First Snack: ${thursdayFirstSnack}</p>
                <p style="text-align: center;">Lunch: ${thursdayLunch}</p>
                <p style="text-align: center;">Second Snack: ${thursdaySecondSnack}</p>
                <p style="text-align: center;">Dinner: ${thursdayDinner}</p>

                <h3 style="text-align: center;">Friday:</h3>
                <p style="text-align: center;">Breakfast: ${fridayBreakfast}</p>
                <p style="text-align: center;">First Snack: ${fridayFirstSnack}</p>
                <p style="text-align: center;">Lunch: ${fridayLunch}</p>
                <p style="text-align: center;">Second Snack: ${fridaySecondSnack}</p>
                <p style="text-align: center;">Dinner: ${fridayDinner}</p>

                <h3 style="text-align: center;">Saturday:</h3>
                <p style="text-align: center;">Breakfast: ${saturdayBreakfast}</p>
                <p style="text-align: center;">First Snack: ${saturdayFirstSnack}</p>
                <p style="text-align: center;">Lunch: ${saturdayLunch}</p>
                <p style="text-align: center;">Second Snack: ${saturdaySecondSnack}</p>
                <p style="text-align: center;">Dinner: ${saturdayDinner}</p>

                <button style="display: block; margin: auto; margin-top: 20px;" onclick="window.print()">Download PDF | Print Meal Plan</button>
            </div>
       
    `;

    // Open a new window to display the meal plan
    var mealPlanWindow = window.open();
    mealPlanWindow.document.write(mealPlanHTML);
}

function isValidEmail(email) {
    // Very basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clearPlanner() {
    // Clear all input fields
    document.getElementById("mealPlanForm").reset();
}
