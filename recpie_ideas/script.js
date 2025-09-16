const recipes = [
  {
    id: 1,
    title: "Spaghetti",
    image: "images/spaghetti.jpg",
    description: "Delicious Italian pasta with tomato sauce"
  },
  {
    id: 2,
    title: "Salad",
    image: "images/salad.jpg",
    description: "Fresh vegetable salad with dressing"
  },
  {
    id: 3,
    title: "Paneer Curry",
    image: "images/paneer.jpg",
    description: "Indian cottage cheese curry with spices"
  },
  {
    id: 4,
    title: "Mango Smoothie",
    image: "images/mango-smoothie.jpg",
    description: "Refreshing summer drink with mango and yogurt"
  }
];

const recipesContainer = document.getElementById("recipes");
const searchInput = document.getElementById("search");

function displayRecipes(filteredRecipes) {
  recipesContainer.innerHTML = "";
  filteredRecipes.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `
      <a href="recipe.html?id=${recipe.id}">
        <img src="${recipe.image}" alt="${recipe.title}">
        <h3>${recipe.title}</h3>
        <p>${recipe.description}</p>
      </a>
    `;
    recipesContainer.appendChild(card);
  });
}

// initial load
displayRecipes(recipes);

// search function
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filtered = recipes.filter(r =>
    r.title.toLowerCase().includes(searchTerm) ||
    r.description.toLowerCase().includes(searchTerm)
  );
  displayRecipes(filtered);
});
