import LoginModal from '../components/Modal/Login';
import newStore from '../components/Store/module';
import styled from 'styled-components';
import MapWrapper from '../components/Map/MapWrapper';
import { useState, useEffect } from 'react';
export default function Home() {
  const StyledMainActive = styled.div`
    opacity: 1;
    width: 100%;
    height: 100%;
  `;

  const [login, setLoignActive] = useState<boolean>(
    newStore.getState().global.globalModal.modal
  );
  useEffect(() => {
    setLoignActive(newStore.getState().global.globalModal.modal);
  }, [newStore.getState().global.globalModal.modal]);

  return (
    <>
      {login && true ? (
        <StyledMainActive>
          <LoginModal />
        </StyledMainActive>
      ) : (
        <StyledMainActive>
          <MapWrapper />
        </StyledMainActive>
      )}
    </>
  );
}
