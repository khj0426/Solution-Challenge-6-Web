import { Skeleton } from '@mui/material';
import styled from 'styled-components';

const SuccessSkeleton = () => {
  return (
    <SuccessSkeletonWrapper>
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={350}
        height={350}
      />
      <Skeleton animation="wave" variant="text" width={350} height={50} />
      <Skeleton animation="wave" variant="text" width={350} height={400} />
      <Skeleton
        variant="text"
        width={300}
        height={45}
        style={{
          borderRadius: '40px',
          marginTop: '30px',
        }}
      />
    </SuccessSkeletonWrapper>
  );
};

const SuccessSkeletonWrapper = styled.section`
  margin: 0 auto;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 350px;
  background-color: #ffffff;
  height: 95vh;
  border-radius: 15px;
  @media (max-width: 500px) {
    width: 350px;
    height: auto;
    max-height: 80%;
  }
`;

export default SuccessSkeleton;
