import { compose } from 'redux';
import { connect } from 'react-redux';

import injectReducer from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';

import { setTimeUntil } from 'containers/store/countdown/actions';
import reducer from 'containers/store/countdown/reducer';
import { KEY } from 'containers/store/countdown/constants';
import { makeSelectCountdown } from 'containers/store/countdown/selectors';

import Countdown from './Countdown';

const mapStateToProps = createStructuredSelector({
  timeUntil: makeSelectCountdown()
});

const mapDispatchToProps = dispatch => ({
  setTimeUntil: (...params) => dispatch(setTimeUntil(...params))
});

const withReducer = injectReducer({ key: KEY, reducer });
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withReducer, withConnect)(Countdown);
