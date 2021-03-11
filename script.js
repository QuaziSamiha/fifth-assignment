const searchFood = document.getElementById('search-food');
const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener("click", function () {

    if (searchFood.value == "") { // if search bar in empty
        document.getElementById('all-food').style.display = 'none';
        document.getElementById('ingredient-div').style.display = 'none';
    }
    else {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchFood.value)
            .then(response => response.json())
            .then(data => displayFood(data))

        const displayFood = foodies => { // arrow function

            const allFood = document.getElementById('all-food');

            foodies.meals.forEach(function (food) { // forEach method

                const foodItem = document.createElement('div'); // this div will contain food-name and food-image of one item of food
                foodItem.className = 'food-item';

                // these innerHTML are for image and name of each food item
                // if image is clicked,then ingredients will be shown 
                const foodDetail = `
            <div class="food-image" onclick="showIngredient('${food.strMeal}')"> 
            <img id="image" src="${food.strMealThumb}">
             </div>
            <div class="food-name">
                <h6 id="name">${food.strMeal}</h6>
            </div>
            `;
                foodItem.innerHTML = foodDetail;
                allFood.appendChild(foodItem);
            });
        }
        searchFood.value = "";
    }
})

const ingredientDiv = document.getElementById('ingredient-div');

const showIngredient = foodName => {

    document.getElementById('ingredient-div').style.display = 'block';
    const ingredientDiv = document.getElementById('ingredient-div');

    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + foodName)
        .then(response => response.json())
        .then(data => {
            data.meals.forEach(function (ingredient) {

                ingredientDiv.innerHTML = `
                <img id="ingredient-img" src="${ingredient.strMealThumb}">
                `
                const foodTitle = document.createElement('h3');
                foodTitle.innerText = foodName;
                ingredientDiv.appendChild(foodTitle);

                const title = document.createElement('h6');
                title.innerText = "Ingredients";
                ingredientDiv.appendChild(title);

                const p1 = document.createElement('p');
                p1.innerText = ingredient.strIngredient1;
                ingredientDiv.appendChild(p1);
                const p2 = document.createElement('p');
                p2.innerText = ingredient.strIngredient2;
                ingredientDiv.appendChild(p2);
                const p3 = document.createElement('p');
                p3.innerText = ingredient.strIngredient3;
                ingredientDiv.appendChild(p3);
                const p4 = document.createElement('p');
                p4.innerText = ingredient.strIngredient4;
                ingredientDiv.appendChild(p4);
                const p5 = document.createElement('p');
                p5.innerText = ingredient.strIngredient5;
                ingredientDiv.appendChild(p5);
                const p6 = document.createElement('p');
                p6.innerText = ingredient.strIngredient6;
                ingredientDiv.appendChild(p6);
                const p7 = document.createElement('p');
                p7.innerText = ingredient.strIngredient7;
                ingredientDiv.appendChild(p7);
                const p8 = document.createElement('p');
                p8.innerText = ingredient.strIngredient8;
                ingredientDiv.appendChild(p8);
                const p9 = document.createElement('p');
                p9.innerText = ingredient.strIngredient9;
                ingredientDiv.appendChild(p9);
                const p10 = document.createElement('p');
                p10.innerText = ingredient.strIngredient10;
                ingredientDiv.appendChild(p10);
                const p11 = document.createElement('p');
                p11.innerText = ingredient.strIngredient11;
                ingredientDiv.appendChild(p11);
                const p12 = document.createElement('p');
                p12.innerText = ingredient.strIngredient12;
                ingredientDiv.appendChild(p12);
                const p13 = document.createElement('p');
                p13.innerText = ingredient.strIngredient13;
                ingredientDiv.appendChild(p13);
                const p14 = document.createElement('p');
                p14.innerText = ingredient.strIngredient14;
                ingredientDiv.appendChild(p14);
                const p15 = document.createElement('p');
                p15.innerText = ingredient.strIngredient15;
                ingredientDiv.appendChild(p15);
                const p16 = document.createElement('p');
                p16.innerText = ingredient.strIngredient16;
                ingredientDiv.appendChild(p16);
                const p17 = document.createElement('p');
                p17.innerText = ingredient.strIngredient17;
                ingredientDiv.appendChild(p17);
                const p18 = document.createElement('p');
                p18.innerText = ingredient.strIngredient18;
                ingredientDiv.appendChild(p18);
                const p19 = document.createElement('p');
                p19.innerText = ingredient.strIngredient19;
                ingredientDiv.appendChild(p19);
                const p20 = document.createElement('p');
                p20.innerText = ingredient.strIngredient20;
                ingredientDiv.appendChild(p20);
            });
        })
}


// 7 or 8 February,2021
// 10 or 11 March,2021
