import { compose } from 'redux';
import { connect } from 'react-redux';

import injectReducer from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';

import {
  addItem,
  removeItem,
  updateDraft
} from 'containers/store/itemlist/actions';
import reducer from 'containers/store/itemlist/reducer';
import { KEY } from 'containers/store/itemlist/constants';
import {
  makeSelectItemList,
  makeSelectDraft
} from 'containers/store/itemlist/selectors';

import ListToSanta from './ListToSanta';

const mapStateToProps = createStructuredSelector({
  items: makeSelectItemList(),
  draft: makeSelectDraft()
});

const mapDispatchToProps = dispatch => ({
  updateDraft: (...params) => dispatch(updateDraft(...params)),
  addItem: (...params) => dispatch(addItem(...params)),
  removeItem: (...params) => dispatch(removeItem(...params))
});

const withReducer = injectReducer({ key: KEY, reducer });
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withReducer, withConnect)(ListToSanta);
