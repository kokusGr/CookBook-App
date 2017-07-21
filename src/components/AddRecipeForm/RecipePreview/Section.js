import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MdEdit from 'react-icons/lib/md/edit';
import Button from '../../common/Button';

const StyledSection = styled.div`
  position: relative;

  &:hover {
    outline: 2px solid #FFF;
  }
`;

const Section = ({ id, ...props }) => (
  <StyledSection>
    <Button edit onClick={() => props.editSection(id)}>
      <i><MdEdit /></i>
      <span>Edit</span>
    </Button>
    {props.children}
  </StyledSection>
);

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]),
  editSection: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

export default Section;
