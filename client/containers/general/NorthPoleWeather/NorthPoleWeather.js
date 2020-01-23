import React from 'react';

class NorthPoleWeather extends React.Component {
  constructor(props) {
    super(props);
    props.getWeather('90,135');
  }

  render() {
    const { loading, error, weather } = this.props;

    return loading ? (
      <div>Loading...</div>
    ) : error ? (
      <div>Error: {error}</div>
    ) : (
      <div>North Pole Temperature: {weather.currently.temperature}</div>
    );
  }
}

export default NorthPoleWeather;
