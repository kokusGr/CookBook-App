import React from 'react';
import { Link } from 'react-router-dom';
import Heading1 from '../common/Heading1';
import TopBox from './TopBox';
import Button from '../common/Button';
import Wrapper from '../common/Wrapper';
import PageSection from '../common/PageSection';
import RecipesListManager from './RecipesListManager';
import FlexBox from '../common/FlexBox';

const RecipesListPage = () => (
  <div>
    <TopBox>
      <Wrapper>
        <FlexBox noLayout stripe>
          <Link to="/recipes/new">
            <Button noMargin>Add Recipe</Button>
          </Link>
          <Heading1>Recipes List Page</Heading1>
        </FlexBox>
      </Wrapper>
    </TopBox>
    <PageSection>
      <Wrapper>
        <RecipesListManager />
      </Wrapper>
    </PageSection>
  </div>
);

export default RecipesListPage;
