import React, { useContext } from 'react';
import { myContext } from '../useContext';

const Son = () => {
  const theme = useContext(myContext);
  return (
    <div style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </div>
  );
};

export default Son;
