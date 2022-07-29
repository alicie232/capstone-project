import styled from 'styled-components';
import DailyTasks from '../components/DailyTasks';

export default function HomePage() {
  return (
    <>
      <StyledHeader>
        <h1>Aktuelle Aufgaben</h1>
      </StyledHeader>
      <Wrapper>
        <DailyTasks />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  border: solid;
  max-width: 375px;
  padding: 10px;
  margin: auto;
`;

const StyledHeader = styled.header`
  text-align: center;
`;
