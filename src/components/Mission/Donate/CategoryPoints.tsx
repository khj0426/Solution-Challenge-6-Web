//카테고리 별 포인트 나타내는 컴포넌트
import { DonatePointType } from '../../../api/donatePoint';
import styled from 'styled-components';
import { uuidv4 } from '@firebase/util';
export const CategoricalPoints = ({
  points,
  colors,
}: {
  points: DonatePointType[];
  colors: string[];
}) => {
  return (
    <>
      <StyledCategoriesWrapper>
        {points.map((point, index) => (
          <div key={uuidv4()}>
            <StyledCategorie key={uuidv4()}>
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
