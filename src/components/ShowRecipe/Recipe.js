import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MdCake from 'react-icons/lib/md/cake';
import MdLocalCafe from 'react-icons/lib/md/local-cafe';
import Wrapper from '../common/Wrapper';
import Image from '../common/Image';
import FlexBox from '../common/FlexBox';
import ImageContainer from '../common/ImageContainer';
import Text from '../common/Text';
import Heading1 from '../common/Heading1';
import Heading2 from '../common/Heading2';
import Column from '../common/Column';
import ListItem from '../AddRecipeForm/ListItem';

const OrderedList = styled.ol`
  counter-reset: directions;
`;

const Ingridiento = ListItem.extend`
  width: 100%;
`;

const Recipe = ({ recipe }) => (
  <Wrapper>
    <FlexBox row>
      <Column width="40%" recipeImage>
        <Image noPadding block src={recipe.mainImage.src} />
      </Column>
      <Column width="60%" recipeTitle>
        <Heading1>{recipe.name}</Heading1>
        <Text>{recipe.description}</Text>
      </Column>
    </FlexBox>
    <FlexBox row>
      <Column width="31%">
        <Heading2>Ingridientos</Heading2>
        <ul>
          <Ingridiento>Pomodoro</Ingridiento>
          <Ingridiento>Czosnoro</Ingridiento>
          <Ingridiento>Marchewolo</Ingridiento>
          <Ingridiento>Winoro</Ingridiento>
          <Ingridiento>Pomodoro</Ingridiento>
          <Ingridiento>Czosnoro</Ingridiento>
          <Ingridiento>Marchewolo</Ingridiento>
          <Ingridiento>Winoro</Ingridiento>
        </ul>
      </Column>
      <Column width="65%">
        <Heading2>Directionoro</Heading2>
        <OrderedList>
          <ListItem direction>Cut the Pomidoro, Czosnoro and Marchewolo.</ListItem>
          <ListItem direction>Put the Pomidoro, Czosnoro and Marchewolo into Garnolo
            and saute for 5min.</ListItem>
          <ListItem direction>Pour the Winoro and stir until half of liqiudoro is gone</ListItem>
        </OrderedList>
      </Column>
    </FlexBox>
    <FlexBox row>
      <Column width="100%" alignCenter>
        <Text info>
          <MdCake />Kcal per 100g: <span>345</span>
        </Text>
        <Text info>
          <MdLocalCafe />Number of Servings: <span>4</span>
        </Text>
      </Column>
    </FlexBox>
    <FlexBox row>
      <FlexBox noLayout>
        <ImageContainer src="https://static.pexels.com/photos/511650/pexels-photo-511650.jpeg" />
        <ImageContainer src="https://static.pexels.com/photos/511650/pexels-photo-511650.jpeg" />
        <ImageContainer src="https://static.pexels.com/photos/511650/pexels-photo-511650.jpeg" />
        <ImageContainer src="https://static.pexels.com/photos/511650/pexels-photo-511650.jpeg" />
      </FlexBox>
    </FlexBox>
  </Wrapper>
);

Recipe.propTypes = {
  recipe: PropTypes.shape({})
};

export default Recipe;
