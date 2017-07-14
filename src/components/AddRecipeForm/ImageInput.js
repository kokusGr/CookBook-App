import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledImageInput = styled.div`
  & > input[type="file"] {
    display: none;
  }

  & label {
    padding: 10px;
    display: block;
    width: 200px;
    color: #FFF;
    margin: 10px auto;
    cursor: pointer;
    background: ${props => props.theme.colors.mainBlack};
  }
`;

const ImageInput = ({ onChange }) => (
  <StyledImageInput>
    <label htmlFor="img">Add new image</label>
    <input type="file" id="img" accept=".jpg, .jpeg, .png" onChange={onChange} />
  </StyledImageInput>
);

ImageInput.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default ImageInput;
