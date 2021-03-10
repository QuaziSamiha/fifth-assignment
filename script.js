const searchFood = document.getElementById('search-food').value;
fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=sandwich')
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => displayFood(data))

const displayFood = foodies => { // arrow function

    const searchBtn = document.getElementById('search-btn');
    searchBtn.addEventListener("click", function () {

        console.log(foodies);
        const foodList = document.getElementById('food-list');

        foodies.meals.forEach(function (food) {
            const foodName = document.createElement('li');
            foodName.innerText = food.strMeal;
            foodList.appendChild(foodName);
        });
    })
}