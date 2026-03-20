const result = document.getElementById("result");
const searchBtn = document.getElementById("inputBtn");
const inputBox = document.getElementById("inputBox");
const searchForm = document.getElementById("searchForm");
const url = CONFIG.API_BASE_URL;
const header = document.getElementById("header");
const navbar = document.querySelector(".navbar");
const menuIcon = document.getElementById("menuIcon");

// Sticky header on scroll
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 100);
});

// Search functionality - Form submission handler
if (searchForm) {
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    performSearch();
  });
}

function performSearch() {
  let userInput = inputBox.value.trim();

  if (userInput.length === 0) {
    result.innerHTML = `<h2 class="h2" role="alert">Please enter a dish name</h2>`;
    result.style.minHeight = "30px";
    return;
  }

  // Show loading state
  result.innerHTML = `<div class="loading" role="status" aria-live="polite"><p>Searching for recipes...</p></div>`;
  result.style.minHeight = "100px";

  fetch(url + userInput)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      if (!data.meals || data.meals.length === 0) {
        result.innerHTML = `<h2 class="h2" role="alert">No recipes found for "${escapeHtml(userInput)}"</h2>`;
        result.style.minHeight = "30px";
        return;
      }

      let myMeal = data.meals[0];
      let count = 1;
      let ingredients = [];

      // Extract ingredients safely
      for (let i in myMeal) {
        let ingredient = "";
        let measure = "";
        if (i.startsWith("strIngredient") && myMeal[i]) {
          ingredient = myMeal[i];
          measure = myMeal[`strMeasure` + count];
          count += 1;
          ingredients.push(`${measure} ${ingredient}`);
        }
      }

      result.style.minHeight = "100vh";
      const mealImage = myMeal.strMealThumb || "";
      const mealName = escapeHtml(myMeal.strMeal) || "Recipe";
      const mealArea = escapeHtml(myMeal.strArea) || "International";
      const mealInstructions =
        escapeHtml(myMeal.strInstructions) || "Instructions not available";
      const youtubeLink = myMeal.strYoutube || "#";

      result.innerHTML = `
            <img src="${mealImage}" alt="${mealName}" loading="lazy">
            <div class="details">
                <h3>${mealName}</h3>
                <p class="origin">Origin: ${mealArea}</p>
            </div>
            
            <div id="ingredient-con">
                <h3>Ingredients</h3>
            </div>
            <div class="btnshow">
                <button id="show-recipe" aria-expanded="false" aria-controls="recipe">Show Recipe</button>
            </div>
            <div id="recipe" role="region" aria-labelledby="recipe-title" hidden>
                <button id="hide-recipe" aria-label="Close recipe instructions">×</button>
                <h3 id="recipe-title">Method</h3>
                <pre id="instructions" tabindex="0">${mealInstructions}</pre>
                ${youtubeLink !== "#" ? `<a id="youtube-play" href="${youtubeLink}" target="_blank" rel="noopener noreferrer" aria-label="Watch recipe video on YouTube">Watch on YouTube</a>` : ""}
            </div>`;

      let ingredientCon = document.getElementById("ingredient-con");
      let parent = document.createElement("ul");
      let recipe = document.getElementById("recipe");
      let hideRecipe = document.getElementById("hide-recipe");
      let showRecipe = document.getElementById("show-recipe");

      ingredients.forEach((i) => {
        let child = document.createElement("li");
        child.textContent = i;
        parent.appendChild(child);
        ingredientCon.appendChild(parent);
      });

      showRecipe.addEventListener("click", () => {
        const isOpen = recipe.hidden;
        recipe.hidden = !isOpen;
        showRecipe.setAttribute("aria-expanded", isOpen);
      });

      hideRecipe.addEventListener("click", () => {
        recipe.hidden = true;
        showRecipe.setAttribute("aria-expanded", false);
        showRecipe.focus();
      });
    })
    .catch((error) => {
      console.error("Error fetching recipe:", error);
      result.innerHTML = `<h2 class="h2" role="alert">Unable to find "${escapeHtml(userInput)}". Please try another dish name.</h2>`;
      result.style.minHeight = "30px";
    });
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
  if (!text) return "";
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Mobile menu toggle
menuIcon.addEventListener("click", () => {
  const icon = menuIcon.querySelector("i");
  icon.classList.toggle("bx-menu");
  icon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
  const isExpanded = menuIcon.getAttribute("aria-expanded") === "true";
  menuIcon.setAttribute("aria-expanded", !isExpanded);
});

// Close menu when link is clicked
document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", (e) => {
    // Remove active class from all links
    document
      .querySelectorAll(".navbar a")
      .forEach((a) => a.classList.remove("active"));

    // Add active class to clicked link
    link.classList.add("active");

    // Close mobile menu
    navbar.classList.remove("active");
    const icon = menuIcon.querySelector("i");
    icon.classList.add("bx-menu");
    icon.classList.remove("bx-x");
    menuIcon.setAttribute("aria-expanded", "false");
  });
});

/* Scroll reveal animations */
ScrollReveal({
  reset: true,
  distance: "100px",
  duration: 1200,
  delay: 200,
});

ScrollReveal().reveal(".mediaBoxes video, .Home_header", {
  origin: "top",
});

ScrollReveal().reveal(".recipeHeading", {
  origin: "top",
});
