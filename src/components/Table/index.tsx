import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { Table } from './styles';
import { IDataSource } from '../../context/DataSourceContext';
import { stubsConnections } from '../../utils/mockData';

function getNameConnection(id:number) {
  return stubsConnections.find((c) => c.id === id)?.title;
}
interface ITableUI {
  rows: IDataSource[],
}
const TableUI:React.FC<ITableUI> = ({ rows }) => (
  <TableContainer component={Paper}>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="right">Code</TableCell>
          <TableCell align="right">Connection</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row:IDataSource) => (
          <TableRow key={row.title}>
            <TableCell component="th" scope="row">
              {row.title}
            </TableCell>
            <TableCell align="right">{row.code}</TableCell>
            <TableCell align="right">{getNameConnection(row.connection_id)}</TableCell>
          </TableRow>
          ))}
      </TableBody>
    </Table>
  </TableContainer>
  );

export default TableUI;
