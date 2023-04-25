import styled from '@emotion/styled';

export const Table = styled.table`
  width: 100%;
  display: flex-box;
  justify-content: center;

  tbody {
    text-align: center;
  }

  tbody tr:nth-of-type(2n) {
    background-color: grey;
  }
`;
export const TableDecs = styled.thead`
  background-color: lightblue;
  color: white;
`;
