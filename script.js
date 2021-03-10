const searchFood = document.getElementById('search-food');
const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener("click", function () {

    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchFood.value)
        .then(response => response.json())
        .then(data => displayFood(data))

    const displayFood = foodies => { // arrow function


        console.log(foodies);
        const allFood = document.getElementById('all-food');

        foodies.meals.forEach(function (food) {
            const foodItem = document.createElement('div');
            foodItem.innerText = food.strMeal;
            foodItem.className = 'food-item'
            allFood.appendChild(foodItem);
        });
    }
})
