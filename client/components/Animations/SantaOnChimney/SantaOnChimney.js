import React from 'react';
import lottie from 'lottie-web';
import SantaOnChimneyAnimation from './santa-claus-on-the-chimney.json';
import SantaOnChimneyStyled from './SantaOnChimneyStyled';

class SantaOnChimney extends React.Component {
  ref = null;

  componentDidMount() {
    lottie.loadAnimation({
      container: this.ref,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: SantaOnChimneyAnimation,
      rendererSettings: {
        className: 'animation',
        viewBoxOnly: true,
        preserveAspectRatio: 'xMidYMid slice'
      }
    });
  }

  render() {
    return (
      <div style={{ height: '100%' }}>
        <SantaOnChimneyStyled ref={ref => (this.ref = ref)} />
      </div>
    );
  }
}

export default SantaOnChimney;
