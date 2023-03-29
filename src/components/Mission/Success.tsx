//미션 성공시 나타날 컴포넌트
import styled, { css } from 'styled-components';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import DonateModal from '../Modal/DonateModal';
import { getNewMisson } from '../../api/getmisson';
import newStore from '../Store/module';
import { useDispatch } from 'react-redux';
import { setMissonClear } from '../Store/module/misson/clearMisson';

export const MissonSuccess = () => {
  type newMisson = {
    category: string;
    content: string;
    imgUrl: string;
    question: string;
    userPoint: number;
  };

  const dispatch = useDispatch();

  const [modal, setModal] = useState<boolean>(false);
  const [data, setData] = useState<newMisson>({
    category: '',
    content: '',
    imgUrl: '',
    question: '',
    userPoint: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const id = newStore.getState().persist.globalLatLng.id + '';
      const response = await getNewMisson({ id });
      /*에러 핸들링 추가 할 부분 */
      setData(response.data);
      const { userPoint } = response.data;
      sessionStorage.setItem('userPoint', userPoint + '');
    };

    fetchData();
    dispatch(
      setMissonClear({
        clear: true,
      })
    );
  }, []);
  return (
    <>
      <StyledSection state={modal}>
        {modal && true ? (
          <DonateModal
            state={modal}
            setState={setModal}
            category={data.category}
          />
        ) : null}

        {data.imgUrl.length > 0 && (
          <Image
            style={{ objectFit: 'cover', display: 'block' }}
            src={data.imgUrl}
            alt="misson success image"
            height={350}
            width={350}
          />
        )}

        <StyledP></StyledP>
        <StyledH2>{data.question}</StyledH2>
        <StylerdTextArea>{data.content}</StylerdTextArea>

        <StyledButton
          onClick={() => {
            setModal(true);
          }}
        >
          <Image
            src="/img/donation 1.png"
            alt="dantate image"
            width={30}
            height={30}
          />
          Donate
        </StyledButton>
      </StyledSection>
    </>
  );
};

const StyledButton = styled.button`
  background: #367bb7;
  display: flex;
  justify-content: center;
  gap: 3px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  width: 300px;
  font-weight: 700;
  margin-top: 30px;
  height: 45px;
  align-items: center;
  color: #ffffff;
`;

const StyledP = styled.p`
  font-size: 13px;
  display: flex;
  width: 100%;
  font-weight: 700;
  margin-top: 30px;
  color: #616161;
`;

const StylerdTextArea = styled.div`
  color: #555555;
  margin-top: 20px;
  display: flex;
  max-height: 400px;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  flex-wrap: wrap;
  &::-webkit-scrollbar {
    border-radius: 6px;
    width: 12px;
    background-color: rgba(255, 255, 255, 0.8);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;

const StyledH2 = styled.h2`
  font-weight: 700;
  display: flex;
  width: 100%;
`;

const StyledSection = styled.section<{ state: boolean }>`
  margin: 0 auto;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 350px;
  height: 95vh;
  border-radius: 15px;
  background-color: #ffffff;
  ${({ state }) => state === true && backOpacityNone}

  @media (max-width: 500px) {
    width: 350px;
    height: auto;
    max-height: 80%;
  }
`;

const backOpacityNone = css`
  background-color: rgba(255, 255, 255, 1);
`;
