import type { Props } from '../Mission';
import { Modal, Box } from '@mui/material';
import styled from 'styled-components';
import Image from 'next/image';
const DonateList = ({ state, setState }: Props) => {
  return (
    <>
      <Modal
        aria-labelledby="modal-modal-title"
        open={state}
        onClose={() => setState(!state)}
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
              <DonateText>
                <Image
                  src="/img/donatelist2.png"
                  alt="donate list second item"
                  width={50}
                  height={50}
                ></Image>
                <div>Category</div>
              </DonateText>
            </DonateImgArea>
            <DonateTitle style={{ marginTop: '30px' }}>Sponser</DonateTitle>
            <DonateImgArea>
              <DonateText>
                <Image
                  src="/img/donatelist3.png"
                  alt="donate list third item"
                  width={50}
                  height={50}
                ></Image>
                <div>Vodafone</div>
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
              <DonateText>
                <Image
                  src="/img/donatelist6.png"
                  alt="donate list six item"
                  width={50}
                  height={50}
                ></Image>
                <div>Doctors Without Borders</div>
              </DonateText>
              <DonateText>
                <Image
                  src="/img/donatelist7.png"
                  alt="donate list last item"
                  width={50}
                  height={50}
                ></Image>
                <div>ChildFund</div>
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
