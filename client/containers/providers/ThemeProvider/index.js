/**
 *
 * ThemeProvider
 *
 */

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';

import { KEY } from 'containers/store/theme/constants';
import { makeSelectTheme } from 'containers/store/theme/selectors';
import reducer from 'containers/store/theme/reducer';

import ThemeProvider from './ThemeProvider';

const mapStateToProps = createStructuredSelector({
  darkModeEnabled: makeSelectTheme()
});

const withConnect = connect(mapStateToProps, {});
const withReducer = injectReducer({ key: KEY, reducer });

export default compose(withReducer, withConnect)(ThemeProvider);
