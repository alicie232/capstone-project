import styled from 'styled-components';

export default function CurrentDate() {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  const dateTime = new Date().toLocaleDateString('de-DE', options).replace('um', '');

  return <StyledDate>{dateTime}</StyledDate>;
}

const StyledDate = styled.div`
  color: red;
  margin: 10px;
  padding: 20px;
`;
