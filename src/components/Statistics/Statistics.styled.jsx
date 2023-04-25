import styled from '@emotion/styled';

export const LiRender = styled.li`
  background-color: ${({ label }) => {
    switch (label) {
      case 'docx':
        return 'blue';
      case 'pdf':
        return 'red';
      case 'mp3':
        return 'green';
      default:
        return 'yellow';
    }
  }};
`;

export const UlRender = styled.ul`
  display: flex;
  gap: 10px;
  & li {
    width: 200px;
    text-align: center;
  }
`;
