import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from './Section';

const StyledInfoBox = styled.div`
  margin-top: 2rem;
`;

const Info = styled.p`
  display: inline-block;
  margin: 0;
  padding: .8rem 1rem;
  font-size: 0.9rem;
  font-weight: 300;

  & > span {
    color: #FFF;
    font-size: 1.3rem;
    font-weight: 400;
  }
`;

const InfoBox = ({ kcal, servings, editSection }) => (
  <Section editSection={editSection} id="info">
    <StyledInfoBox>
      <Info>
        kcal per 100g: <span>{kcal}</span>
      </Info>
      <Info>
        Number of Servings: <span>{servings}</span>
      </Info>
    </StyledInfoBox>
  </Section>
);

InfoBox.propTypes = {
  kcal: PropTypes.string.isRequired,
  servings: PropTypes.string.isRequired,
  editSection: PropTypes.func.isRequired
};

export default InfoBox;
