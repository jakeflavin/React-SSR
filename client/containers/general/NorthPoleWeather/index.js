import { compose } from 'redux';
import { connect } from 'react-redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { createStructuredSelector } from 'reselect';

import { getWeather } from 'containers/store/weather/actions';
import reducer from 'containers/store/weather/reducer';
import { KEY } from 'containers/store/weather/constants';
import {
  makeSelectWeather,
  makeSelectWeatherLoading,
  makeSelectWeatherError
} from 'containers/store/weather/selectors';
import saga from 'containers/store/weather/saga';

import NorthPoleWeather from './NorthPoleWeather';

const mapStateToProps = createStructuredSelector({
  weather: makeSelectWeather(),
  loading: makeSelectWeatherLoading(),
  error: makeSelectWeatherError()
});

const mapDispatchToProps = dispatch => ({
  getWeather: (...params) => dispatch(getWeather(...params))
});

const withReducer = injectReducer({ key: KEY, reducer });
const withSaga = injectSaga({ key: KEY, saga: saga });
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withReducer, withSaga, withConnect)(NorthPoleWeather);
