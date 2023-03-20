import type { Props } from '../Mission';
import { Modal, Box } from '@mui/material';
import styled from 'styled-components';
import { useState } from 'react';
import { SurfaceComponent } from '../../../components/WorldBank/Surface';
import Image from 'next/image';
import { Co2EmissionComponent } from '../../../components/WorldBank/Co2';

const DonateList = ({ state, setState }: Props) => {
  const [surfacemodal, setOpenSurfaceModal] = useState<boolean>(false);
  const [co2modal, setOpenCo2Modal] = useState<boolean>(false);
  return (
    <>
      {surfacemodal === true ? <SurfaceComponent /> : null}
      {co2modal === true && surfacemodal === false ? (
        <Co2EmissionComponent />
      ) : null}
      <Modal
        aria-labelledby="modal-modal-title"
        open={state}
        onClose={() => setState(!state)}
        style={{ width: '320px', margin: '0 auto' }}
      >
        <Box>
          <DonateModal style={{ background: '#fff' }}>
            <DonateTitle>Donate Status</DonateTitle>
            <DonateImgArea>
              <DonateText>
                <Image
                  src="/img/donatelist1.png"
                  alt="donate list first item"
                  width={50}
                  height={50}
                ></Image>
                <div>Country</div>
              </DonateText>
              <DonateText onClick={() => setOpenSurfaceModal(!surfacemodal)}>
                <Image
                  src="/img/donatelist2.png"
                  alt="donate list second item"
                  width={50}
                  height={50}
                ></Image>

                <div>Surface Area</div>
              </DonateText>
            </DonateImgArea>
            <DonateTitle style={{ marginTop: '30px' }}>Sponser</DonateTitle>
            <DonateImgArea>
              <DonateText>
                <Image
                  src="/img/donatelist7.png"
                  alt="donate list last item"
                  width={50}
                  height={50}
                ></Image>
                <div>ChildFund</div>
              </DonateText>
              <DonateText>
                <Image
                  src="/img/donatelist4.png"
                  alt="donate list four item"
                  width={50}
                  height={50}
                ></Image>
                <div>Google</div>
              </DonateText>
              <DonateText>
                <Image
                  src="/img/donatelist5.png"
                  alt="donate list five item"
                  width={50}
                  height={50}
                ></Image>
                <div>Red Cross</div>
              </DonateText>
              x
              <DonateText>
                <Image
                  src="/img/donatelist7.png"
                  alt="donate list seven item"
                  width={50}
                  height={50}
                ></Image>
                <div>ChildFund</div>
              </DonateText>
              <DonateText onClick={() => setOpenCo2Modal(!co2modal)}>
                <Image
                  src="/img/donatelist8.png"
                  alt="donate list last item"
                  width={50}
                  height={50}
                ></Image>
                <div>CO2</div>
              </DonateText>
            </DonateImgArea>
          </DonateModal>
        </Box>
      </Modal>
    </>
  );
};

const DonateModal = styled.div`
  margin: 25px auto;
  width: 320px;
  height: 400px;
  display: flex;
  background: #ffffff;
  box-shadow: 0px 0px 4px #dddddd;
  border-radius: 10px;
  flex-direction: column;
`;

const DonateTitle = styled.h6`
  font-weight: 600;
  font-size: 15px;
  line-height: 16px;
  margin-left: 11px;
  display: flex;
  align-items: center;
  text-align: center;
`;

const DonateText = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  font-size: 13px;
  align-items: center;
  font-weight: 600;
`;

const DonateImgArea = styled.div`
  display: flex;
  width: 100%;
  gap: 35px;

  margin-top: 15px;
  margin: 15px auto;
  align-items: center;
  text-overflow: ellipsis;
  flex-wrap: wrap;
  justify-content: center;
`;

export default DonateList;
