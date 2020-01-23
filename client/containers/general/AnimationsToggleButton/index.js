import { compose } from 'redux';
import { connect } from 'react-redux';

import injectReducer from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';

import { toggleAnimations } from 'containers/store/animations/actions';
import reducer from 'containers/store/animations/reducer';
import { KEY } from 'containers/store/animations/constants';
import { makeSelectAnimations } from 'containers/store/animations/selectors';

import AnimationsToggleButton from './AnimationsToggleButton';

const mapStateToProps = createStructuredSelector({
  animationsEnabled: makeSelectAnimations()
});

const mapDispatchToProps = dispatch => ({
  toggleAnimations: () => dispatch(toggleAnimations())
});

const withReducer = injectReducer({ key: KEY, reducer });
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withReducer, withConnect)(AnimationsToggleButton);
