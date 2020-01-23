/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import Paper from 'components/Surfaces/Paper';
import Countdown from 'containers/general/Countdown';
import ChristmasSocks from 'components/Animations/ChristmasSocks';
import Container, { Item } from 'components/Layout/Container';
import ListToSanta from 'containers/general/ListToSanta';
import SantaOnChimney from 'components/Animations/SantaOnChimney';
import NorthPoleWeather from 'containers/general/NorthPoleWeather';

export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>Home</title>
          <meta
            name="description"
            content="Home Page for Christmas Countdown"
          />
        </Helmet>
        <Container align={'stretch'}>
          <Item>
            <Paper>
              <Countdown label={'Christmas'} />
              <ChristmasSocks />
            </Paper>
          </Item>
          <Item md={8}>
            <Paper>
              <ListToSanta />
            </Paper>
          </Item>
          <Item md={4}>
            <Paper>
              <SantaOnChimney />
            </Paper>
          </Item>
          <Item md={12}>
            <Paper>
              <NorthPoleWeather />
            </Paper>
          </Item>
        </Container>
      </div>
    );
  }
}
