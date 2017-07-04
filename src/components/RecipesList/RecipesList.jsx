import React from 'react';
import Columns from '../common/layout/Columns';
import Image from '../common/style/Image';

/* eslint-disable global-require */
class RecipesList extends React.Component {
  render() {
    return (
      <div>
        <Columns>
          <div>
            <Image src={require('../../images/burger.jpeg')} alt="burger" />
          </div>
          <div>
            <Image src={require('../../images/burger.jpeg')} alt="burger" />
          </div>
          <div>
            <Image src={require('../../images/choclate-cake.jpeg')} alt="burger" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.</p>
          </div>
          <div>
            <Image src={require('../../images/pizza.jpeg')} alt="burger" />
          </div>
          <div>
            <Image src={require('../../images/shish-kebab.jpeg')} alt="burger" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </Columns>
      </div>
    );
  }
}

export default RecipesList;
