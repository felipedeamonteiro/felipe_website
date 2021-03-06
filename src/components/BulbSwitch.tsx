import React, { useState, useEffect } from 'react';

import { Container } from '../styles/components/BulbSwitch';

const BulbSwitch: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    console.log('BulbSwitch darkMode:', darkMode);
  }, [darkMode]);
  return (
    <Container>
      <div className="switch">
        <input type="checkbox" defaultChecked={false} onChange={() => setDarkMode(!darkMode)}  name="toggle" />
        <label htmlFor="toggle">
          <i className="bulb">
            <span className="bulb-center"></span>
            <span className="filament-1"></span>
            <span className="filament-2"></span>
            <span className="sparks">
              <i className="spark1"></i>
              <i className="spark2"></i>
              <i className="spark3"></i>
              <i className="spark4"></i>
            </span>
          </i>
        </label>
      </div>
    </Container>
  );
}

export default BulbSwitch;