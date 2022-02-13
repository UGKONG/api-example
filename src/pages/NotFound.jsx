import React from 'react';
import styled from 'styled-components';

export default function () {
  return (
    <NotFound>
      <h1>404 Page Not Found</h1>
    </NotFound>
  )
}

const NotFound = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;