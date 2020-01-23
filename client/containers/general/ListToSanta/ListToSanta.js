import React from 'react';
import List from 'components/Typography/List';
import TextBox from 'components/Inputs/TextBox';
import Button from 'components/Inputs/Button';
import FancyHeader from 'components/Typography/FancyHeader';
import ListToSantaStyled from './ListToSantaStyled';
import ListToSantaItemStyled from './ListToSantaItemStyled';

const ListToSanta = ({ items, addItem, removeItem, draft, updateDraft }) => {
  const handleClick = () => {
    addItem({ label: draft });
    updateDraft('');
  };

  return (
    <ListToSantaStyled>
      <FancyHeader variant={'CandyCane'}>{'List for Santa'}</FancyHeader>
      <List type={'none'}>
        {items.map(x => (
          <ListToSantaItemStyled key={x}>
            <Button
              variant={'link'}
              color={'danger'}
              onClick={() => removeItem(x)}
            >
              X
            </Button>
            {x.label}
          </ListToSantaItemStyled>
        ))}
      </List>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexBasis: 'fit-content'
        }}
      >
        <TextBox
          value={draft}
          onKeyPress={key => key === 'Enter' && handleClick()}
          onChange={updateDraft}
          placeholder={'Add item to list'}
        />
        <Button onClick={handleClick}>Add</Button>
      </div>
    </ListToSantaStyled>
  );
};

export default ListToSanta;
