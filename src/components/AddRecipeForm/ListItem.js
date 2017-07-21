import styled, { css } from 'styled-components';

const style = {
  default: css`
    text-align: left;
    padding: .5rem 0 .5rem 1rem;
    margin: 0.5rem 2.5%;
    list-style: none;
    display: inline-block;
    width: 45%;
    background-color: #FFF;
    position: relative;
    font-weight: 300;
    font-size: 0.9rem;
  `,

  direction: css`
    width: 95%;
    margin: .5rem 2.5%;
    padding: .8rem .8rem .8rem 3rem;
    font-weight: 300;
    font-size: 0.9rem;
    line-height: 1.5;

    &::before {
      content: counter(directions);
      counter-increment: directions;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: .9rem;
      font-size: 2.5rem;
      font-style: italic;
      opacity: 0.5;
    }
  `
};

const ListItem = styled.li`
  ${style.default}
  ${props => (props.direction ? style.direction : null)}
`;

export default ListItem;
