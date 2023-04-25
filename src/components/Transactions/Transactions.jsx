import { Table, TableDecs } from './Transactions.styled';
import PT from 'prop-types';

export const Transactions = ({ items }) => {
  const tableData = items.map(el => (
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

Transactions.propTypes = {
  items: PT.arrayOf(
    PT.shape({
      id: PT.string.isRequired,
      type: PT.string.isRequired,
      amount: PT.string.isRequired,
      currency: PT.string.isRequired,
    })
  ),
};
