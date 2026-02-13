import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// Импортируем JSON как переменную
import animationData from './assets/animation.json'; 

const App = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#ffffff'
  };

  return (
    <div style={containerStyle}>
      {/* В DotLottieReact для локальных данных 
          используется пропс 'data' вместо 'src' 
      */}
      <DotLottieReact
        data={animationData} 
        loop
        autoplay
        style={{ width: '10000px', height: '10000px' }}
      />
    </div>
  );
};

export default App;