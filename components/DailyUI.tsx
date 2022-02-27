import styled, { css } from 'styled-components';

interface DailyProps {
  backgroundColor: string;
}

const Daily = styled.div<DailyProps>`
  height: 480px;
  width: 640px;
  background-color: ${(props) => props.backgroundColor || 'none'};
  border: 1px solid #ffffff;
  > img {
    margin: 73px 62px auto;
    width: 515px;
  }
  @media screen and (max-width: 600px) {
    width: 360px;
    height: 270px;
    > img {
      margin: 0 auto;
      width: 300px;
    }
  }
`;

const DailyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 73px;
  width: 515px;
  @media screen and (max-width: 600px) {
    margin-top: 36px;;
    width: 300px;
  }
`;

const DailyBottomRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 8px;
`;

const DailyLabel = styled.label`
  font-family: Clash Display;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  text-transform: uppercase;
  color: ${(props) => props.color || '#ffffff'};
  @media screen and (max-width: 600px) {
    font-size: 16.5211px;
    line-height: 20px;
  }
`;

interface DailyUIProps {
  backgroundColor: string;
  number: string;
  name: string;
  color: string;
}

export const DailyUI = ({
  backgroundColor,
  number,
  name,
  color,
}: DailyUIProps) => {
  return (
    <Daily backgroundColor={backgroundColor}>
      <DailyContainer>
        <img
          src={`images/${number}.png`}
          alt={`Daily UI Challenge ${number} ${name}`}
        />
        <DailyBottomRow>
          <DailyLabel color={color}>{name}</DailyLabel>
          <DailyLabel color={color}>{number}</DailyLabel>
        </DailyBottomRow>
      </DailyContainer>
    </Daily>
  );
};
