import { Wrapper } from '@googlemaps/react-wrapper';
import MapComponent from './Map';
import styled from 'styled-components';

const Map = () => {
  if (process.env.NEXT_PUBLIC_MAP_KEY)
    return (
      <StyledMain>
        <StyledMapWrapper>
          <Wrapper apiKey={process.env.NEXT_PUBLIC_MAP_KEY}>
            <MapComponent />
          </Wrapper>
        </StyledMapWrapper>
      </StyledMain>
    );
  return <div>error</div>;
};

const StyledMapWrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  width: 100%;
`;

export default Map;
