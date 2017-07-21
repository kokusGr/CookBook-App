import styled from 'styled-components';

const NumberInput = styled.input.attrs({
  type: 'number',
  required: true,
  min: 0,
  placeholder: ' '
})`
  width: 100%;
  background-color: ${props => props.theme.colors.lightGray};
  padding: 20px;
  border: none;
  border-bottom: 1px solid #FFF;
  color:${props => props.theme.colors.mainBlack};

  &:focus {
    & + label {
      display: none;
    }
  }

  &:valid {
    & + label {
      display: none;
    }
  }

  &:invalid:not(:placeholder-shown) {
    & + label {
      display: none;
    }
  }
`;

export default NumberInput;
