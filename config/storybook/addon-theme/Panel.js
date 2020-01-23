import React from 'react';
import styled from "styled-components";
import { useChannel, useAddonState } from '@storybook/api'

const Button = styled.button`
    border: 1px solid #BBB;
    border-radius: 6px;
    color: ${(props) => props.selected ? "white" : "#BBB"};
    padding: 13px;
    margin-right: 15px;
    height: 55px;
    cursor: pointer;
    line-height: 25px;
    font-weight: ${(props) => props.selected ? "bold" : "normal"};
    background-color: ${(props) => props.selected ? "#333" : "None"};
    white-space: nowrap;
`;

export default ({ api }) => {
 console.log('api => ', api)
  const [state, setState] = useAddonState('addon-theme', { themes: [], curr: 0 });

  const emit = useChannel({
    'addon-theme/theme-add': (themes) => {
      setState((prevState) => {
        return {
          ...prevState,
          themes
        }
      });
    }
  });

  const handleOnClick = (curr) => {
    emit('addon-theme/theme-change', curr);
    setState((prevState) => {
      return {
        ...prevState,
        curr
      }
    });

    api.setOptions({ test: 'true'})
  };


  return (
    <div>
      {
        state.themes && state.themes.map((x,i) => (
          <Button onClick={() => handleOnClick(i)} selected={i === state.curr}>
            {x.name}
          </Button>
        ))
      }
      <div>{state.curr}</div>
    </div>
  );
};
