const recipes = [
  {
    id: 1,
    title: "Spaghetti Pasta",
    image: "images/spaghetti.jpg",
    ingredients: ["Spaghetti", "Tomato Sauce", "Garlic", "Olive Oil", "Cheese"],
    steps: [
      "Boil spaghetti until cooked.",
      "Prepare sauce with garlic and tomato.",
      "Mix pasta with sauce and serve with cheese."
    ]
  },
  {
    id: 2,
    title: "Vegetable Salad",
    image: "images/salad.jpg",
    ingredients: ["Lettuce", "Tomato", "Cucumber", "Carrot", "Olive Oil"],
    steps: [
      "Chop all vegetables.",
      "Mix them in a bowl.",
      "Add olive oil and seasoning before serving."
    ]
  },
  {
    id: 3,
    title: "Paneer Curry",
    image: "images/paneer.jpg",
    ingredients: ["Paneer", "Onion", "Tomato", "Spices", "Cream"],
    steps: [
      "Fry onion and tomato with spices.",
      "Add paneer cubes and cook.",
      "Finish with cream and serve hot."
    ]
  },
  {
    id: 4,
    title: "Mango Smoothie",
    image: "images/mango-smoothie.jpg",
    ingredients: ["Mango", "Milk", "Honey", "Ice"],
    steps: [
      "Cut mango into pieces.",
      "Blend with milk, honey, and ice.",
      "Serve chilled."
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const recipeId = params.get("id");

  const recipeDetail = document.getElementById("recipeDetail");
  const recipeTitle = document.getElementById("recipeTitle");

  const recipe = recipes.find(r => r.id == recipeId);
  if (recipe) {
    recipeTitle.textContent = recipe.title;
    recipeDetail.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}">
      <h2>Ingredients</h2>
      <ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
      <h2>Steps</h2>
      <ol>${recipe.steps.map(s => `<li>${s}</li>`).join("")}</ol>
    `;
  } else {
    recipeDetail.innerHTML = "<p>Recipe not found.</p>";
  }
});
