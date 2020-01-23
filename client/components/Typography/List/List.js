import React from 'react';
import PropTypes from 'prop-types';
import ListStyled from './ListStyled';
import ListItemStyled from './ListItemStyled';

const ListItem = ({ children, type }) => (
  <ListItemStyled type={type}>{children}</ListItemStyled>
);

const List = ({ children, type }) => (
  <ListStyled type={type}>
    { React.Children.map(children, child => (
          <ListItem type={type}>
            {child}
          </ListItem>
        ))
    }
  </ListStyled>
);

List.propTypes = {
  type: PropTypes.oneOf([
    'disc',
    'circle',
    'square',
    'decimal',
    'decimal-leading-zero',
    'lower-roman',
    'upper-roman',
    'lower-greek',
    'lower-latin',
    'upper-latin',
    'armenian',
    'georgian',
    'lower-alpha',
    'upper-alpha',
    'none'
  ])
};

List.defaultProps = {
  type: 'none'
};

export default List;
