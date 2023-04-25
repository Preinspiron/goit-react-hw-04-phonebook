import { Table, TableDecs } from './Transactions.styled';

export const Transactions = props => {
  console.log(props.items);
  const tableData = props.items.map(el => (
    <tr key={el.id}>
      <td>{el.type}</td>
      <td>{el.amount}</td>
      <td>{el.currency}</td>
    </tr>
  ));
  return (
    <Table className="transaction-history">
      <TableDecs>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableDecs>

      <tbody>{tableData}</tbody>
    </Table>
  );
};
