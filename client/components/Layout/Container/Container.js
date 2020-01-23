/**
 *
 * Container
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import ContainerStyled from './ContainerStyled';

class Container extends React.Component {
  static propTypes = {
    spacing: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    direction: PropTypes.oneOf([
      'row',
      'row-reverse',
      'column',
      'column-reverse'
    ]),
    justify: PropTypes.oneOf([
      'flex-start',
      'center',
      'flex-end',
      'space-between',
      'space-around',
      'space-evenly'
    ]),
    align: PropTypes.oneOf([
      'flex-start',
      'center',
      'flex-end',
      'stretch',
      'baseline'
    ])
  };

  static defaultProps = {
    spacing: 1,
    direction: 'row',
    justify: 'flex-start',
    align: 'flex-start'
  };

  render() {
    const {
      direction,
      justify,
      align,
      spacing,
      children,
      ...other
    } = this.props;

    const offSet = spacing * 4;

    return (
      <ContainerStyled
        spacing={offSet}
        direction={direction}
        justify={justify}
        align={align}
        {...other}
      >
        {React.Children.map(children, child => {
          return React.cloneElement(child, {
            style: { padding: `${offSet}px` }
          });
        })}
      </ContainerStyled>
    );
  }
}

export default Container;
