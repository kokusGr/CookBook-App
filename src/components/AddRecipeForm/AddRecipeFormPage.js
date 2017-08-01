import React from 'react';
import Wrapper from '../common/Wrapper';
import FormManager from './FormManager';
import Heading1 from '../common/Heading1';


const AddRecipeFormPage = () => (
  <Wrapper>
    <Heading1 hidden>New recipe form</Heading1>
    <FormManager />
  </Wrapper>
);

export default AddRecipeFormPage;
