import { connect } from 'react-redux';
import Recipe from './Recipe';

const getRecipeById = (id, recipes) => (
  recipes.find(recipe => recipe['_id'] === id)
);
const mapStateToProps = (state, ownProps) => ({
  recipe: getRecipeById(ownProps.id, state.recipes)
});

export default connect(mapStateToProps)(Recipe);
