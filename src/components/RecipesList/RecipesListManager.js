import { connect } from 'react-redux';
import RecipesList from './RecipesList';

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  };
}

export default connect(mapStateToProps)(RecipesList);
