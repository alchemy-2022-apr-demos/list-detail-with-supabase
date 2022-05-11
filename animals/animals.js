import { getAnimalById } from '../fetch-utils.js';

const animalNameElem = document.getElementById('animal-name');

// use the id to load the data of the individual animal
// previously, we looped through our data until we found a matching obejct
//   (using our findById)
// NOW we're gonna just use Supabase

async function loadData() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const animal = await getAnimalById(id);
    animalNameElem.textContent = animal.name;
}

loadData();

// getAnimalById(1);
