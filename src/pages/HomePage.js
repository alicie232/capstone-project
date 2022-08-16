import styled from 'styled-components';

export default function HomePage({advices, time, counter}) {
  return (
    <>
      <StyledHeader>
        <StyledSpanHeaderTop>Tidy Up</StyledSpanHeaderTop>
        <StyledSpanHeaderBottom>Your Life</StyledSpanHeaderBottom>
      </StyledHeader>
      {time}
    </>
  );
}

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 15px;
  padding: 20px;
  padding-right: 40px;
  margin: 40px;
  margin-right: 90px;
  text-align: center;
  font-size: 2.5rem;
  font-family: 'Besley', serif;
`;

const StyledSpanHeaderTop = styled.span``;
const StyledSpanHeaderBottom = styled.span`
  align-self: center;
  padding-left: 90px;
  font-size: 1.5rem;
`;
