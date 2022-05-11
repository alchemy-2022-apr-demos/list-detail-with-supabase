// instead of importing the data
// we want to load it from supabase
// import { animals } from './data.js';
import { getAnimals } from './fetch-utils.js';
import { renderListItem } from './render-utils.js';

// OPTION 1 -- wrap everything in loading function
async function loadData() {
    const animals = await getAnimals();
    console.log(animals);
    const main = document.querySelector('main');

    for (let animal of animals) {
        const animalDiv = renderListItem(animal);
        main.append(animalDiv);
    }
}

loadData();
