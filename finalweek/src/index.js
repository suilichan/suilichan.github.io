const i_gotchu_btn =  document.getElementById("i_gotchu");
const meal_container = document.getElementById("meal");


/* this is to fetch the API when user clicks the 'igotchu' button */
i_gotchu_btn.addEventListener("click", () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(res => {
      createMeal(res.meals[0]);
    })
    .catch(e => console.error(e));
});

/*Create createMeal*/
const createMeal = meal => {
    const ingredients = [];
  
    /*fetching all the ingredients from the randomized api*/
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push(
          `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
        );
      } else {
        /*if not more ingredients, this will tell it to stop*/
        break;
      }
    }
    const newInnerHtml = `
      <div class="row">
        <div class="columns">
          <img src="${meal.strMealThumb}" alt="MealImage">
          ${
            meal.strCategory
              ? `<p><strong>Category: </strong>${meal.strCategory}</p>`
              : ""
          }
          ${meal.strArea ? `<p><strong>Area: </strong>${meal.strArea}</p>` : ""}
          ${
            meal.strTags
              ? `<p><strong>Tags: </strong> ${meal.strTags
                  .split(",")
                  .join(", ")}</p>`
              : ""
          }
          <h5>Ingredients: </h5>
          <ul>
            ${ingredients.map(ingredients => `<li>${ingredients}</li>`).join("")}
          </ul>
        </div>
        <div class="columnsseven">
          <h4>${meal.strMeal}</h4>
          <div class="instructions">${meal.strInstructions}</div>
        </div>
      </div>
  
      ${
        meal.strYoutube
          ? `
          <div class="row">
            <h5>Video Recipe</h5>
            <div class="videoWrapper">
              <iframe width=""420" height="315"
              src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
              </iframe>
            </div>
          </div>
        `
          : ""
      }
    `;
    meal_container.innerHTML = newInnerHtml;
  };
  