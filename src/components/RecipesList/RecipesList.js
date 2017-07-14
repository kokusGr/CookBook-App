import React from 'react';
import Columns from '../common/Columns';
import Image from '../common/Image';
import Thumbnail from '../common/Thumbnail';

/* eslint-disable global-require */
class RecipesList extends React.Component {
  render() {
    return (
      <div>
        <Columns>
          <Thumbnail>
            <Image src={require('../../images/burger.jpeg')} alt="burger" />
            <h3>Yummy Burger</h3>
          </Thumbnail>
          <Thumbnail>
            <Image src={require('../../images/burger.jpeg')} alt="burger" />
          </Thumbnail>
          <Thumbnail>
            <Image src={require('../../images/chocolate-cake.jpeg')} alt="burger" />
            <h3>Chocolate Cake</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.</p>
          </Thumbnail>
          <Thumbnail>
            <Image src={require('../../images/pizza.jpeg')} alt="burger" />
          </Thumbnail>
          <Thumbnail>
            <Image src={require('../../images/shish-kebab.jpeg')} alt="burger" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Thumbnail>
          <Thumbnail>
            <Image src={require('../../images/burger.jpeg')} alt="burger" />
          </Thumbnail>
          <Thumbnail>
            <Image src={require('../../images/burger.jpeg')} alt="burger" />
          </Thumbnail>
          <Thumbnail>
            <Image src={require('../../images/chocolate-cake.jpeg')} alt="burger" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.</p>
          </Thumbnail>
          <Thumbnail>
            <Image src={require('../../images/pizza.jpeg')} alt="burger" />
          </Thumbnail>
          <Thumbnail>
            <Image src={require('../../images/shish-kebab.jpeg')} alt="burger" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Thumbnail>
        </Columns>
      </div>
    );
  }
}

export default RecipesList;
