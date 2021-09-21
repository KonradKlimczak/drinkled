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
        step: 'shake',
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
        step: 'shake',
        ingredients: [
          {
            name: 'Ice cubes',
            amount: 4,
          },
        ],
      },
      {
        step: 'garnish',
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
    name: 'Dawds Sour',
    rating: 2,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/5/59/Whiskey_Sour.jpg',
    recipe: [
      {
        step: 'shake',
        ingredients: [
          {
            name: 'Egg white',
            amount: 1,
          },
        ],
      },
      {
        step: 'shake',
        ingredients: [
          {
            name: 'Ice cubes',
            amount: 4,
          },
        ],
      },
      {
        step: 'garnish',
        ingredients: [
          {
            name: 'Angostura Bitters',
            amount: 4,
            unit: 'drops',
          },
        ],
      },
    ],
    views: 23,
  },
];
