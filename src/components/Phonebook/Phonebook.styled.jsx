import styled from '@emotion/styled';

export const FeedbackSection = styled.div`
  color: black;
  background-color: grey;
  padding: 30px;
  justify-content: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: no-wrap;

  .btn {
    width: 200px;
    height: auto;
    font-size: 24px;
  }
  .description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  & img {
    width: 200px;
    border-radius: 50%;
  }
`;

export const Contact = styled.ul`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;
  width: 100%;
`;

export const Input = styled.input`
  height: auto;
  font-size: 32px;
  padding-le
  width:50%;

`;
