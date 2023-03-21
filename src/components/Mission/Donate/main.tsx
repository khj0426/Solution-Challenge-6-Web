import styled from 'styled-components';
import { Props } from '../Mission';

const DonateModal = ({ setState }: Props) => {
  return (
    <>
      <StyledModalMain onClick={() => setState(false)}></StyledModalMain>
    </>
  );
};

const StyledModalMain = styled.div`
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border: 3.5px solid #367bb7;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 10;
`;

export default DonateModal;
