import * as React from 'react';

import { Stack } from '@fluentui/react';

const stackStyles = {
  root: {
    height: '80px',
    position: 'fixed',
    bottom: '0',
    width: '100vw',
  },
};


export const Footer = () => {
  return (
      <Stack styles={stackStyles}>
         <Stack className="left"></Stack>
         <Stack className="control">
sss
         </Stack>
         <Stack className="right"></Stack>
      </Stack>
    
  );
};
