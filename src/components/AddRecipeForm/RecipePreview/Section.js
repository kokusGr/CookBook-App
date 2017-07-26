import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MdEdit from 'react-icons/lib/md/edit';
import Button from '../../common/Button';
import getSteps from '../../../constants/steps';

const StyledSection = styled.div`
  position: relative;

  &:hover {
    outline: 2px solid #FFF;
  }
`;

class Section extends React.Component {

  handleClick = () => {
    const steps = getSteps();
    const stepNumber = steps.findIndex(step => step === this.props.id);
    this.props.editSection(stepNumber);
  }
  render() {
    return (
      <StyledSection>
        <Button edit onClick={this.handleClick}>
          <i><MdEdit /></i>
          <span>Edit</span>
        </Button>
        {this.props.children}
      </StyledSection>
    );
  }
}

Section.propTypes = {
  children: PropTypes.node,
  editSection: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

export default Section;
