import { compose } from 'redux';
import { connect } from 'react-redux';

import injectReducer from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';

import { toggleDarkMode } from 'containers/store/theme/actions';
import reducer from 'containers/store/theme/reducer';
import { KEY } from 'containers/store/theme/constants';
import { makeSelectTheme } from 'containers/store/theme/selectors';

import DarkModeToggleButton from './DarkModeToggleButton';

const mapStateToProps = createStructuredSelector({
  darkModeEnabled: makeSelectTheme()
});

const mapDispatchToProps = dispatch => ({
  toggleDarkMode: () => dispatch(toggleDarkMode())
});

const withReducer = injectReducer({ key: KEY, reducer });
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withReducer, withConnect)(DarkModeToggleButton);
