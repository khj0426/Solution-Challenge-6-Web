//카테고리 별 포인트 나타내는 컴포넌트
import { TypeofDonateFetchAPI } from '../../../api/getDonationPoints';
import styled from 'styled-components';
import { v4 } from 'uuid';
import Image from 'next/image';

export const CategoricalPoints = ({
  points,
  colors,
}: {
  points: TypeofDonateFetchAPI[];
  colors: string[];
}) => {
  return (
    <>
      <StyledCategoriesWrapper>
        {points.map((point, index) => (
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-around',
            }}
            key={v4()}
          >
            <StyledCategorie>
              <StyledCategorePoint
                style={{
                  background: `${colors[index]}`,
                }}
              />
              <StyledTextArea>
                <div>{point.category}</div>
                <div>{point.donationPoint}</div>
              </StyledTextArea>
            </StyledCategorie>
            <Image
              src="./img/PayPalBtn.jpg"
              alt="PayPal Connect Btn"
              width={209}
              height={80}
            />
          </div>
        ))}
      </StyledCategoriesWrapper>
    </>
  );
};

const StyledCategoriesWrapper = styled.div`
  display: flex;
  margin-top: 15px;
  width: 100%;
  margin-bottom: 20px;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  border: 1px solid #ffffff;
  border-radius: 30px;
`;

const StyledCategorie = styled.div`
  border: 2px solid #d1d1d1;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
`;

const StyledCategorePoint = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

const StyledTextArea = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
`;
