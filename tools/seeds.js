import mongoose from 'mongoose';
import Recipe from './models/recipe';

const data = [
  {
    id: '213',
    name: 'Yummy Burger',
    description: 'The most delicious american classic',
    mainImage: { id: '27182218', src: 'https://static.pexels.com/photos/496970/pexels-photo-496970.jpeg' }
  },
  {
    id: '21321',
    name: 'Burger ala Kokus',
    description: 'Best Burger EU',
    mainImage: { id: '271828', src: 'https://static.pexels.com/photos/59943/pexels-photo-59943.jpeg' }
  },
  {
    id: '21321212',
    name: 'Pizza',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    mainImage: { id: '2776528', src: 'https://static.pexels.com/photos/162918/pizza-cheese-margarita-homemade-162918.jpeg' }
  },
  {
    id: '21231112',
    name: 'Chocolate Cake',
    description: 'Creamy, velvety, dark. Do I need to say more?Creamy, velvety, dark. Do I need to say more?Creamy, velvety, dark. Do I need to say more?Creamy, velvety, dark. Do I need to say more?',
    mainImage: { id: '124677', src: 'https://static.pexels.com/photos/132694/pexels-photo-132694.jpeg' }
  }
];

const seedDB = () => {
  Recipe.remove((err) => {
    if (err) {
      console.log(err);
    }
    console.log('recipes removed');
  });
  data.map((seed) => {
    Recipe.create(seed, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Camp added');
      }
    });
  });
};

export default seedDB;
