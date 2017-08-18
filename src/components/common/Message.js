import styled, { css } from 'styled-components';

const style = {
  default: css`
    color: ${props => props.theme.colors.mainRed};
    font-size: 1.5rem;
    margin: 0;
    padding: .5rem 0;
  `
};

const Message = styled.p`
  ${style.default};
`;

export default Message;
