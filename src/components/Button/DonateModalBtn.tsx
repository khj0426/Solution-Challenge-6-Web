import styled from 'styled-components';

export const DonateModalBtn = ({ onClick }: { onClick: () => void }) => {
  return (
    <>
      <DonateModalbut onClick={onClick}>Yes</DonateModalbut>
    </>
  );
};

const DonateModalbut = styled.button`
  width: 125px;
  height: 50px;
  background-color: #367bb7;
  color: white;
  border-radius: 20px;
  font-size: 20px;
`;
