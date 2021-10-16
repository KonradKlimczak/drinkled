import { Cocktail } from './types';

export const COCKTAILS: Cocktail[] = [
  {
    id: 'w1',
    name: 'Whiskey Sour',
    rating: 4.9,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/5/59/Whiskey_Sour.jpg',
    recipe: [
      {
        action: 'shake',
        ingredients: [
          {
            name: 'Whiskey Rye',
            amount: 60,
            unit: 'ml',
          },
          {
            name: 'Simple Syrup',
            amount: 15,
            unit: 'ml',
          },
          {
            name: 'Lemon Juice',
            amount: 22,
            unit: 'ml',
          },
          {
            name: 'Egg white',
            amount: 1,
          },
        ],
      },
      {
        action: 'shake',
        ingredients: [
          {
            name: 'Ice cubes',
            amount: 4,
          },
        ],
      },
      {
        action: 'garnish',
        ingredients: [
          {
            name: 'Angostura Bitters',
            amount: 4,
            unit: 'drops',
          },
        ],
      },
    ],
    views: 223,
  },
  {
    id: 'd1',
    name: 'Tom Collins',
    rating: 3,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/0/0b/Tom_Collins_in_Copenhagen.jpg',
    recipe: [
      {
        action: 'shake',
        ingredients: [
          {
            name: 'Gin',
            amount: 60,
            unit: 'ml',
          },
          {
            name: 'Lemon Juice',
            amount: 30,
            unit: 'ml',
          },
          {
            name: 'Simple Syrup',
            amount: 8,
            unit: 'ml',
          },
        ],
      },
      {
        action: 'pour',
        ingredients: [
          {
            name: 'Seltzer',
            amount: 'Top with',
          },
        ],
      },
    ],
    views: 23,
  },
];
