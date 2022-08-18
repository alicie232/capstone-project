import styled from 'styled-components';

export default function HomePage({advices, time, counter}) {
  return (
    <>
      <StyledHeader>
        Tidy Up
        <StyledSpanHeaderBottom>Your Life</StyledSpanHeaderBottom>
      </StyledHeader>
      <Wrapper>
        <StyledAdvice>
          <em>&quot;{advices}&quot;</em>
        </StyledAdvice>
        <StyledTime>{time}</StyledTime>
        <CounterOpen>
          Offene Aufgaben: <StyledSpanOpen>{counter.counterFalse}</StyledSpanOpen>
        </CounterOpen>
        <CounterFinished>
          Erledigte Aufgaben: <StyledSpanFinish>{counter.counterTrue}</StyledSpanFinish>
        </CounterFinished>
      </Wrapper>
    </>
  );
}
const StyledHeader = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 15px;
  padding: 30px 40px 20px 20px;
  margin: 30px;
  margin-right: 90px;
  text-align: center;
  font-size: 3.5rem;
  font-family: 'Besley', serif;
`;

const StyledSpanHeaderBottom = styled.span`
  align-self: center;
  padding-left: 130px;
  font-size: 1.5rem;
`;

const StyledSpanOpen = styled.span`
  color: red;
  font-size: 1.2rem;
`;

const StyledSpanFinish = styled.span`
  color: var(--color-action);
  font-size: 1.2rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const StyledAdvice = styled.div`
  padding: 0 10px 0 10px;
  text-align: center;
  font-size: var(--fontsize-medium);
`;

const StyledTime = styled.div`
  text-align: center;
  font-size: var(--fontsize-medium);
`;

const CounterOpen = styled.div`
  position: relative;
  background: white;
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  margin: auto;
  text-align: center;
  padding: 20px;
  width: 300px;
  font-size: var(--fontsize-medium);
  border-radius: 15px;

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(-45deg, #f2b5d4 0%, #7bdff2 100%);
    transform: translate3d(0, 10px, 0) scale(0.95);
    filter: blur(20px);
    opacity: var(0.7);
    transition: opacity 0.3s;
    border-radius: inherit;
  }

  &::after {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: inherit;
    border-radius: inherit;
  }
`;

const CounterFinished = styled.div`
  position: relative;
  background: white;
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  margin: auto;
  text-align: center;
  padding: 20px;
  width: 300px;
  font-size: var(--fontsize-medium);
  border-radius: 15px;

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(-45deg, #f2b5d4 0%, #7bdff2 100%);
    transform: translate3d(0, 10px, 0) scale(0.95);
    filter: blur(20px);
    opacity: var(0.7);
    transition: opacity 0.3s;
    border-radius: inherit;
  }

  &::after {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: inherit;
    border-radius: inherit;
  }
`;
