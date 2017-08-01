import Recipe from './models/recipe';

const data = [
  {
    id: '213',
    name: 'Yummy Burger',
    description: 'Wagyu filet mignon shoulder strip steak Cheeseburger brisket, short rib rump Burger chuck patties spare ribs. Shoulder sirloin chuck, kobe steak tail shank tri-tip rump bresaola meatball corned beef Burger brisket. Cheeseburger ribeye rump beef ribs porterhouse.',
    mainImage: { id: '27182218', src: 'https://static.pexels.com/photos/496970/pexels-photo-496970.jpeg' },
    imagse: [],
    ingridients: [
      { id: '050505', text: '4 Buns' },
      { id: '050501231', text: '1kg Ipsum meat' },
      { id: '05050125353', text: '2 Onions' },
      { id: '0525353', text: 'Ketchup' },
      { id: '0521211444', text: 'some Lettuce' }
    ],
    directions: [
      { id: '95902023', text: 'First you need to grind Ipsum meat and add spices just the way you like it.' },
      { id: '0912222848', text: 'Slice to onions. Thinly if possible' },
      { id: '0912848', text: 'Then I take a big bowl and pour about half a bottle of ketchup into it, throw onions and meat. Mix until it is a smooth paste' },
      { id: '0915228', text: 'Then preheat the grill to a max temp. If ready start placing burgers.' },
      { id: '091312', text: 'It should take about 4-5mins per side. Depending on how big your burgers are! Just don\'t burn them and we should be good!' },
      { id: '0913123', text: 'Now for the finnale! Assembly your burger: Take a bun. Cut it! Place lettuce. Place meat. Done!' }
    ],
    kcal: '999',
    servings: '1'
  },
  {
    id: '21321',
    name: 'Burger ala Kokus',
    description: 'Best Burger EU. Truly an american classic. Wait.. wat?',
    mainImage: { id: '271828', src: 'https://static.pexels.com/photos/59943/pexels-photo-59943.jpeg' },
    images: [
      { id: '21245676', src: 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg' },
      { id: '5637352', src: 'https://static.pexels.com/photos/59943/pexels-photo-59943.jpeg' },
      { id: '77842', src: 'https://static.pexels.com/photos/47320/burger-bacon-snack-fast-food-47320.jpeg' }
    ],
    ingridients: [
      { id: '0101010333', text: '4 sesame buns' },
      { id: '0101010211', text: '4lbs fresh beef' },
      { id: '0522010211', text: '1kg onions' },
      { id: '0526633211', text: '50g sugar' },
      { id: '0500202', text: 'cayene!' }
    ],
    directions: [
      { id: '959123', text: 'Burger ipsum dolor amet angus Burger steak tail wagyu ribeye short rib brisket tenderloin beef ribs. Porterhouse beef ri' },
      { id: '091605058', text: ' steak Cheeseburger brisket, short rib rump Burger chuck patties spare ribs. Shoulder sirloin chuck, kobe steak tail shank tri-tip rump bresaola meatball corned beef Burger brisket. Cheeseburger ribe' },
      { id: '0202020118', text: 'tties, strip steak shoulder Angus beef tenderloin meatloaf spare ribs steak tail beef ribs corne' },
      { id: '005050338', text: 'nd filet mignon flank Cheeseburger strip steak spare ribs shoulder bresaola meatloaf cow tenderloin Burger shank kobe. Tri-tip ground round cow ribeye bresaola. Tenderloin Angus patties short loin steak tail, shank chuck Burger wagyu Hamburger briske' },
      { id: '0913129995555', text: ' Angus shank meatloaf cow fla' },
      { id: '09199913123', text: 'Hahahaahaha You can\'t see me!!' },
      { id: '0050502929338', text: 'nd filet mignon flank Cheeseburger strip steak spare ribs shoulder bresaola meatloaf cow tenderloin Burger shank kobe. Tri-tip ground round cow ribeye bresaola. Tenderloin Angus patties short loin steak tail, shank chuck Burger wagyu Hamburger briske' },
      { id: '091101555', text: ' Angus shank meatloaf cow fla' },
      { id: '44202033', text: 'Bon apetit!' }
    ],
    kcal: '220',
    servings: '4'
  },
  {
    id: '21321212',
    name: 'Pizza',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    mainImage: { id: '2776528', src: 'https://static.pexels.com/photos/162918/pizza-cheese-margarita-homemade-162918.jpeg' },
    images: [
      { id: '562315324', src: 'https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg' },
      { id: '950934', src: 'https://static.pexels.com/photos/365459/pexels-photo-365459.jpeg' },
      { id: '0603232', src: 'https://static.pexels.com/photos/315755/pexels-photo-315755.jpeg' },
      { id: '0293423', src: 'https://static.pexels.com/photos/7907/food-pizza-slice-fast-food.jpg' },
      { id: '125151', src: 'https://static.pexels.com/photos/238306/pexels-photo-238306.jpeg' }
    ],
    ingridients: [
      { id: '0100202113', text: '40g yeast' },
      { id: '00302398021', text: '1kg flour. it\'s best when used italian 00, but it can also by some low type' },
      { id: '0529590349', text: '1kg onions' },
      { id: '05290502983', text: '50g sugar' },
      { id: '0592091022093', text: 'cayene!' },
      { id: '0593092093', text: '1kg tomatoes' },
      { id: '05090192893', text: 'salami. as much as you want. I used about 150g' },
      { id: '059392789174', text: 'cheese! the best is italian: mozarella or parmagiano regiano' },
      { id: '039820938', text: 'pretty much any other topping you want' }
    ],
    directions: [
      { id: '952921', text: 'Bow wow wow ac metizzle cool arcu pot aliquizzle. Quisque posuere. Sed get down get down shizzle my nizzle crocodizzle. Dizzle shiz pede, pot izzle, go to hizzle izzle, da bomb quis, mass.' },
      { id: '095940958', text: 'o. Nam vehicula hendrerizzle boom shackalack. Pimpin\' fo shizzle. Cras placerat leo break it down mi. Etizzle pellentesque. Bling bling mofo habitasse platea sure. Crizzle sure leo da bomb dizzl' },
      { id: '22929118', text: 'm in the shizzle purus tincidunt izzle. Sizzle gravida dizzl.' },
      { id: '012981928442', text: 'yall augue orci, for sure for sure,' }
    ],
    kcal: '0',
    servings: '10'
  },
  {
    id: '21231112',
    name: 'Chocolate Cake',
    description: 'Creamy, velvety, dark. Do I need to say more?Creamy, velvety, dark. Do I need to say more?Creamy, velvety, dark. Do I need to say more?Creamy, velvety, dark. Do I need to say more?',
    mainImage: { id: '124677', src: 'https://static.pexels.com/photos/132694/pexels-photo-132694.jpeg' },
    images: [
      { id: '90329', src: 'https://static.pexels.com/photos/236799/pexels-photo-236799.jpeg' }
    ],
    ingridients: [
      { id: '0200333', text: 'water' },
      { id: '019433', text: 'cake in the box' }
    ],
    directions: [
      { id: '300293', text: 'Mix and stir until combined' },
      { id: '19292293', text: 'Bake as the box says' }
    ],
    kcal: '848',
    servings: '1'
  }
];

const seedDB = () => {
  Recipe.remove((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('recipes removed');
      data.map(seed => (
        Recipe.create(seed).then(
          newRecipe => console.log('Success!', newRecipe),
          error => console.log('Error!', error)
        )
      ));
    }
  });
};
export default seedDB;
