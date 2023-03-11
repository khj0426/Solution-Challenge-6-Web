import styled from 'styled-components';
import Image from 'next/image';
const Custom404 = () => {
  return (
    <>
      <StyledTextArea>
        <StyledTitle>해당 페이지를 찾지 못했습니다.</StyledTitle>
        <StyledDetailContent>
          주소가 잘못되었거나 더 이상 존재하지 않는 페이지입니다.
        </StyledDetailContent>
        <Image
          src="/img/Earth.gif"
          alt="지구 이미지"
          width={400}
          height={400}
        />
      </StyledTextArea>
      /
    </>
  );
};

const StyledTitle = styled.h2`
  font-weight: 700;
  font-size: 3rem;
`;

const StyledDetailContent = styled.p`
  font-size: 2rem;
`;

const StyledTextArea = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 35px;
  margin: 50px auto;
  flex-wrap: wrap;
  width: 1000px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Custom404;
