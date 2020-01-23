/**
 *
 * Item
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import ItemStyled from './ItemStyled';

class Item extends React.Component {
  static propTypes = {
    align: PropTypes.oneOf(['right', 'left', 'center']),
    xs: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    sm: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    md: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    lg: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    xl: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
  };

  static defaultProps = {
    align: 'left',
    xs: 12
  };

  render() {
    const { align, xs, sm, md, lg, xl, children, ...other } = this.props;

    let curr = xs;
    const arr = [xs, sm, md, lg, xl].map(x => {
      if (!x) {
        return curr;
      }
      curr = x;
      return x;
    });

    return (
      <ItemStyled
        align={align}
        xs={arr[0]}
        sm={arr[1]}
        md={arr[2]}
        lg={arr[3]}
        xl={arr[4]}
        {...other}
      >
        {children}
      </ItemStyled>
    );
  }
}

export default Item;
