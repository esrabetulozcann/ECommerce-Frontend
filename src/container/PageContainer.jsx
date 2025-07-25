import React from 'react';
import Container from '@mui/material/Container';

function PageContainer({ children }) {
  return (
    <Container sx={{ maxWidth: '1400px', margin: '0 auto' }}>
      {children}
    </Container>
  );
}

export default PageContainer;
