import LoginModal from '../components/Modal/Login';
import { useSelector } from 'react-redux';
import { RootState } from '../components/Store/module';
import styled from 'styled-components';
import MapWrapper from '../components/Map/MapWrapper';
export default function Home() {
  const StyledMainActive = styled.div`
    opacity: 1;
    width: 100%;
    height: 100%;
  `;

  const isLogin = useSelector(
    (state: RootState) => state.global.globalModal.modal
  );

  return (
    <>
      <StyledMainActive>
        {isLogin && true ? <LoginModal /> : <MapWrapper />}
      </StyledMainActive>
    </>
  );
}
