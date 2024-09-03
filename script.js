const result = document.getElementById('result');
const searchBtn = document.getElementById('inputBtn');
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const header = document.getElementById('header');
const navbar = document.querySelector('.navbar');
const menuIcon = document.getElementById('menuIcon');
window.addEventListener('scroll',() => {
    header.classList.toggle('sticky', window.scrollY > 100)
})
searchBtn.addEventListener('click', (e) =>{
    let userInput = document.getElementById('inputBox').value;
    if(userInput.length == 0){
        result.innerHTML = `<h2 class = 'h2'> Input box cannot be empty</h2>`;
    }
    else{
        fetch(url + userInput)
.then(response => response.json())
.then((data) => {
let myMeal = data.meals[0];
let count = 1;
let ingredients = [];
for(let i in myMeal){
    let ingredient = "";
    let measure = "";
    if(i.startsWith("strIngredient") && myMeal[i]) {
        ingredient = myMeal[i];
        measure = myMeal[`strMeasure` + count];
        count += 1;
        ingredients.push(`${measure} ${ingredient}`);
    }
}
result.style.minHeight = '100vh'
result.innerHTML = `<img src = "${myMeal.strMealThumb}">
<div class = 'details'>
    <h2>${myMeal.strMeal}</h2>
    <h3>Origin: ${myMeal.strArea}</h3>
</div>

<div id = 'ingredient-con'>
    <h2>Ingredients</h2>
</div> 
<div class = 'btnshow'>
    <button id ='show-recipe'>Show Recipe</a>
</div>
 <div id ='recipe'>
        <button id ='hide-recipe'>X</button>
        <h2>Method</h2>
        <pre id ='instructions'>${myMeal.strInstructions}</pre>
        <a id = "youtube-play" href = "${myMeal.strYoutube}" target ="_blank">YouTube Video</a>
</div>`;
let ingredientCon = document.getElementById('ingredient-con');
let parent = document.createElement('ul')
let recipe = document.getElementById('recipe');
let hideRecipe = document.getElementById('hide-recipe');
let showRecipe = document.getElementById('show-recipe');

ingredients.forEach((i) => {
    let child = document.createElement('li');
    child.innerHTML = i;
    parent.appendChild(child);
    ingredientCon.appendChild(parent);
})

showRecipe.addEventListener('click', () => {
    recipe.style.display = 'block';
})
hideRecipe.addEventListener('click', () => {
    recipe.style.display = 'none';
});
  
}).catch(() => {
    result.innerHTML = `<h2 class = 'h2'>Invalid input</h2>`
})

}
  
})

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

});



// Swiper images*/
const swiper = new Swiper('.swiper', {
    effect : 'slide',
    loop : true,
    autoplay : {
        delay : '2500'
    },
  });

  /* ======================Scroll animations =================*/
ScrollReveal({
    reset : true,
    distance : '-150px',
    duration: 1500,
    delay : 500,

});

ScrollReveal().reveal('.mediaBoxes img, .Home_header .btnExplore',{
    origin : 'top',
});

ScrollReveal().reveal('.recipeHeading p, .weekly_heading p, .footer__container h4',{
    origin : 'right',
});




 