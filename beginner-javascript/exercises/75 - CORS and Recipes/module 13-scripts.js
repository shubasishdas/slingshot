// video 2(75)

// console.log('working');

const baseEndpoint = 'http://www.recipepuppy.com/api';
const proxy = 'https://cors-anywhere.herokuapp.com/';
const form = document.querySelector('form.search');
const recipesGrid = document.querySelector('.recipes');

async function fetchRecipes(query) {
  const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
  const data = await res.json();
  //   console.log(data);
  return data;
}

async function handleSubmit(event) {
  event.preventDefault();
  const el = event.currentTarget;
  console.log(form.query.value);

  //   // turn the form off
  //   el.submit.disabled = true;
  //   // submit the search
  //   const recipes = await fetchRecipes(el.query.value);
  //   console.log(recipes);
  //   el.submit.disabled = false;
  //   displayRecipes(recipes.results);
  fetchAndDisplay(form.query.value);
}

async function fetchAndDisplay(query) {
  // turn the form off
  form.submit.disabled = true;
  // submit the search
  const recipes = await fetchRecipes(query);
  console.log(recipes);
  form.submit.disabled = false;
  displayRecipes(recipes.results);
}

function displayRecipes(recipes) {
  console.log('Creating HTML');
  //   console.log(recipes);
  const html = recipes.map(
    (recipe) =>
      `<div class="recipe">
    <h2>${recipe.title}</h2>
    <p>${recipe.ingredients}</p>
    
    ${
      recipe.thumbnail &&
      `
        <img src="${recipe.thumbnail}" alt="${recipe.title}" />
      `
    }
    <a href ="${recipe.href}">View Recipe</a>
    </div>`
  );
  //   console.log(html);
  recipesGrid.innerHTML = html.join('');
}

form.addEventListener('submit', handleSubmit);

// on page load , run it with pizza
// fetchRecipes('pizza');
fetchAndDisplay('pizza');
