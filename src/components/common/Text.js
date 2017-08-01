import styled, { css } from 'styled-components';

const style = {
  default: css`
    font-weight: 300;
    font-size: .9rem;
    color: #000;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: .1rem;
    display: inline-block;
    margin: 0;
  `,

  pageReview: css`
    font-size: 1rem;
    padding: 2.1rem .8rem;
  `,

  thumbnail: css`
    line-height: 1.7;
    padding: 1rem 0 .5rem;
  `,

  info: css`
    padding: .8rem 1rem;
    margin-right: 2rem;
    letter-spacing: 0;

    &:nth-last-of-type(1) {
      margin-right: 0;
    }

    & > span {
      color: #000;
      font-size: 1.5rem;
      font-weight: 400;
      padding-left: .2rem;
    }

    & > svg {
      color: ${props => props.theme.colors.mainOrange};
      transform: translateY(-3px);
      font-size: 2rem;
      margin-right: .8rem;
    }
  `,

  tag: css`
    font-style: italic;
    color: #FFF;
    padding: .7rem .8rem;
  `
};

const Text = styled.p`
  ${style.default};
  ${props => (props.pageReview ? style.pageReview : null)};
  ${props => (props.thumbnail ? style.thumbnail : null)};
  ${props => (props.info ? style.info : null)};
  ${props => (props.tag ? style.tag : null)};
`;

export default Text;
