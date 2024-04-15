// Function to handle the search
function searchRecipe() {
    var userInput = document.getElementById('user-inp').value;
    var url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + userInput;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            displayRecipe(data.meals);
        })
        .catch(error => console.error('Error:', error));
}
// Function to display the recipe details
function displayRecipe(meals) {
    var resultDiv = document.getElementById('result');
    var studentHTML = `<p style="text-align:end; color: black; font-weight: bold">Student Id: 200556289<br/>Name: Jeelkumar Limbachiya</p>`;
    resultDiv.innerHTML = studentHTML;
    if (meals) {
        meals.forEach(meal => {
            var mealName = meal.strMeal;
            var mealThumbnail = meal.strMealThumb;
            var mealInstructions = meal.strInstructions;

            var mealContainer = document.createElement('div');
            mealContainer.classList.add('meal-container');

            var img = document.createElement('img');
            img.src = mealThumbnail;
            img.alt = mealName;

            var name = document.createElement('p');
            name.style.alignContent = 'flex-start'
            name.textContent = mealName;

            var instructions = document.createElement('p');
            instructions.textContent = mealInstructions;
            mealContainer.appendChild(img);
            mealContainer.appendChild(name);
            mealContainer.appendChild(instructions);
            
            resultDiv.appendChild(mealContainer);
        });
    } else {
        resultDiv.innerHTML += `<p style="color:red">No matching recipes found.</p>`;
    }
}

// Add event listener to the search button
document.getElementById('search-btn').addEventListener('click', searchRecipe);