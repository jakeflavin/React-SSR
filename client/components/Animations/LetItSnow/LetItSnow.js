import React from 'react';
import lottie from 'lottie-web';
import LetItSnowAnimation from './let-it-snow.json';
import LetItSnowStyled from './LetItSnowStyled';

class LetItSnow extends React.Component {
  ref = null;

  componentDidMount() {
    lottie.loadAnimation({
      container: this.ref,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: LetItSnowAnimation,
      rendererSettings: {
        className: 'animation',
        viewBoxOnly: true,
        preserveAspectRatio: 'xMidYMid slice'
      }
    });
  }

  render() {
    return (
      <div style={{ position: 'absolute', height: '100%' }}>
        <LetItSnowStyled ref={ref => (this.ref = ref)} />
      </div>
    );
  }
}

export default LetItSnow;
