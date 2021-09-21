import express from 'express';
import { COCKTAILS } from './constants';
import { filterIngredients, filterName } from './utils';

const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get('/cocktails', (req, res) => {
  console.log(req.query);
  const { name, ingredients, sortType = 'MOST_POPULAR' } = req.query;
  res.json(
    COCKTAILS.filter((cocktail) => {
      const inName =
        typeof name === 'string' ? filterName(cocktail, name) : true;
      const inIngredients =
        Array.isArray(ingredients) && typeof ingredients[0] === 'string'
          ? filterIngredients(cocktail, ingredients as string[])
          : true;

      return inName && inIngredients;
    }).sort((a, b) => {
      switch (sortType) {
        case 'HIGHEST_RATING':
          return a.rating > b.rating ? -1 : 1;
        case 'LOWEST_RATING':
          return a.rating > b.rating ? 1 : -1;
        case 'MOST_POPULAR':
        default:
          return a.views > b.views ? -1 : 1;
      }
    })
  );
});

app.get('/', (req, res) => {
  res.send('OK');
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
