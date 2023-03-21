import React from 'react';
import Map from '../components/Map/MapWrapper';
import styled from 'styled-components';

export default function Home() {
  const StyledMainActive = styled.div`
    opacity: 1;
    width: 100%;
    height: 100%;
  `;

  return (
    <>
      <StyledMainActive>
        <Map />
      </StyledMainActive>
    </>
  );
}
