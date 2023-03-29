import styled from 'styled-components';
import type { Props as DonateModalState } from '../Mission/Mission';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { DonateModalBtn } from '../Button/DonateModalBtn';
import { DonateModalCencelBtn } from '../Button/DonateCancelBtn';
import { DonatePoint } from '../../api/donatePoint';
type DonateProps = DonateModalState & {
  category: string;
};

const DonateModal = ({ state, setState, category }: DonateProps) => {
  const [donatePoint, setDonatePoint] = useState<number>(100);
  const minusClickAction: () => void = () => {
    if (donatePoint >= 100) {
      setDonatePoint(donatePoint - 10);
    }
  };

  const plusClickAction: () => void = () => {
    setDonatePoint(donatePoint + 10);
  };

  return (
    <>
      <DonateModalArea>
        <ModalClose onClick={() => setState(!state)}>x</ModalClose>
        <DonateTitle>How many points would you like to donate?</DonateTitle>
        <DonatePointArea>
          <DonateNumber onClick={minusClickAction}>
            <RemoveIcon style={{ color: '3c3c3c', fontSize: '28px' }} />
          </DonateNumber>
          <DonateNumber>{donatePoint}</DonateNumber>
          <DonateNumber onClick={plusClickAction}>
            <AddIcon style={{ color: '3c3c3c', fontSize: '28px' }} />
          </DonateNumber>
        </DonatePointArea>
        <DonateButArea>
          <DonateModalCencelBtn />
          <DonateModalBtn
            onClick={() =>
              DonatePoint({ category, donationPoint: donatePoint, percent: '' })
            }
          />
        </DonateButArea>
      </DonateModalArea>
    </>
  );
};

const ModalClose = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  font-size: 18px;
`;

const DonateButArea = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

const DonatePointArea = styled.div`
  display: flex;
  width: 60%;
  margin: 0 auto;
  justify-content: space-around;
`;

const DonateNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 28px;
  display: flex;
  align-items: center;
  color: #3c3c3c;
`;

const DonateTitle = styled.h5`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
`;

const DonateModalArea = styled.div`
  width: 300px;

  flex-direction: column;
  height: 240px;
  background-color: #ffffff;
  display: flex;
  position: absolute;
  opacity: 1;
  justify-content: space-evenly;
  margin: 150px auto;
  border-radius: 10px;
`;
export default DonateModal;
