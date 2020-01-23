import React from 'react';
import lottie from 'lottie-web';
import ChristmasSocksAnimation from './christmas-socks.json';
import ChristmasSocksStyled from './ChristmasSocksStyled';

class ChristmasSocks extends React.Component {
  ref = null;

  componentDidMount() {
    lottie.loadAnimation({
      container: this.ref,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: ChristmasSocksAnimation,
      rendererSettings: {
        className: 'animation',
        viewBoxOnly: true,
        preserveAspectRatio: 'xMidYMid slice'
      }
    });
  }

  render() {
    return <ChristmasSocksStyled ref={ref => (this.ref = ref)} />;
  }
}

export default ChristmasSocks;
