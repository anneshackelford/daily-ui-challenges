import Image from 'next/image';
import styled from 'styled-components';
// import Image from './Image';


interface DailyProps {
  backgroundColor: string;
}

const Daily = styled.div<DailyProps>`
  height: 100%;
  background-color: ${(props) => props.backgroundColor || 'none'};
  border: 1px solid #ffffff;
  @media screen and (max-width: 600px) {
  }
`;

const DailyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 73px 62px;

  > img {
    max-width: 100%;
  }
  @media screen and (max-width: 600px) {
    margin-top: 36px;
  }
`;

const DailyBottomRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 8px;
`;

const DailyLabel = styled.label`
  font-family: 'Clash Display', sans-serif;
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
        <Image
          src={`/images/${number}.png`}
          alt={`Daily UI Challenge ${number} ${name}`}
          width={516}
          height={290}
          layout='responsive'
          // loader={'custom'}
          // unoptimized
        />
        <DailyBottomRow>
          <DailyLabel color={color}>{name}</DailyLabel>
          <DailyLabel color={color}>{number}</DailyLabel>
        </DailyBottomRow>
      </DailyContainer>
    </Daily>
  );
};
