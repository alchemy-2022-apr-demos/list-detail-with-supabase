## Supabase List / Detail

0. Copy over your render function, data, app.js, CSS from your Spotlight.
1. Add your table in Supabase

-   Keys in your data correspond to your columns
-   Strings become varchars, Numbers become either ints or floats
-   Lets not worry about nested arrays
-   Create a row for each item in your array of data using the values
    _Validation step: Can you see the data in Supabase (also can ask TAs or Julie)_

2. Set up my app to be ready for Supabase

-   Add our script tag to our HTML in the `<head>`

```js
<script defer src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
```

-   Make a `fetch-util.js` file, and add your Supabase URL and key at the top

```js
const SUPABASE_URL = 'https://ibfimxopxwngijoyxknw.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjY4NDQ3MSwiZXhwIjoxOTUyMjYwNDcxfQ.ewbC-sV1ELppz_IP21q0P7QEX_VoDqbi_ZZ1__Uphvs';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
```

3. Add a fetch function for your data in your `fetch-utils.js`

```js
export async function getAnimals() {
    const resp = await client.from('farm_animals').select('*');
    console.log(resp);
    return resp.data;
}
```

_Validation step: Call fetch function inside of your fetch-utils and confirm you're getting data back_

4. Add an async loading function in your `app.js` to replace the hard coded data with the data from Supabase

```js
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
```

_Validation Step: stuff is loading on your page_
