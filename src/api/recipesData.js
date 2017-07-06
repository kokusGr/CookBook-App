import path from 'path';

const pathToImages = path.resolve(__dirname, 'src/images/');

const recipes = [
  {
    name: 'Pizza',
    id: '1',
    img: `${pathToImages}pizza.jpeg`,
    desc: 'True itallian recipe. Crusty, thin, quick. Perfect for every evening!'
  },
  {
    name: 'Burger',
    id: '2',
    img: `${pathToImages}burger.jpeg`,
    desc: 'American classic, with a touch of polish cusine. Homemade bun with a special sauce is a must try.'
  },
  {
    name: 'Chocolate Cake',
    id: '3',
    img: `${pathToImages}chocolate-cake.jpeg`,
    desc: 'Dark, lucious, sexy. Do I really have to say anything?'
  },
  {
    name: 'Shish Kebab',
    id: '4',
    img: `${pathToImages}shish-kebab.jpeg`,
    desc: 'Exotic dish that will make you dream about foreign adventure. Perfect combination of flavours!'
  },
];

export default recipes;
