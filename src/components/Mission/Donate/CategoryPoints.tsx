//카테고리 별 포인트 나타내는 컴포넌트
import { DonatePointType } from '../../../api/donatePoint';
import styled from 'styled-components';

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
          <>
            <StyledCategorie>
              <StyledCategorePoint
                key={point.category}
                style={{
                  background: `${colors[index]}`,
                }}
              />
              <StyledTextArea>
                <div>{point.category}</div>
                <div>{point.donationPoint}</div>
              </StyledTextArea>
            </StyledCategorie>
          </>
        ))}
      </StyledCategoriesWrapper>
    </>
  );
};

const StyledCategoriesWrapper = styled.div`
  display: flex;
  margin-top: 15px;
  width: 100%;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;

  font-weight: 600;
`;

const StyledCategorie = styled.div`
  border: 1.5px solid #d1d1d1;
  border-radius: 5px;
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
