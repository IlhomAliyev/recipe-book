import React, { useEffect, useState } from 'react';

const LoadingDots = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const intervalID = setInterval(
      () => setDots((dots) => (dots.length === 3 ? '' : dots + '.')),
      500
    );

    return () => clearInterval(intervalID);
  }, []);

  return <span>{dots}</span>;
};

export default LoadingDots;
