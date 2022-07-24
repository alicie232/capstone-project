import styled from 'styled-components';
import DailyTasks from './components/DailyTasks';

export default function App() {
  return (
    <Wrapper>
      <DailyTasks />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: solid;
  max-width: 375px;
  padding: 10px;
  margin: auto;
`;
