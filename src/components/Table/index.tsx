/*import {
    TableBody,
 TableCell, TableHead, TablePagination, TableRow,
} from '@material-ui/core';
import { ChangeEvent, useState } from 'react';
import TablePaginationActions from './pagination';
import { TableContainer, Table } from './styles';

export interface ITableProps {
    columnDefs: Array<string>[],
    rowsData: Array<string>[],
    onClickEdit: () => void,
    onClickView: () => void,
    onClickRemove: () => void,
    pagination: boolean
}

const TableUI: React.FC<ITableProps> = ({
    columnDefs,
    rowsData,
    onClickEdit,
    onClickView,
    onClickRemove,
    pagination = true,
}) => {
    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(pagination ? 15 : rowsData.length);
    const rowsPerPageOptions = rowsData.length > rowsPerPage ? [15, 25, 50, 75, { label: 'All', value: -1 }] : { label: 'All', value: -1 };

    const handleChangePage = (event:ChangeEvent<HTMLButtonElement>, newPage:number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event:ChangeEvent<HTMLButtonElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
      <>
        <TableContainer>
          <Table size="small" aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                
                <TableCell
                  component="th"
                  key="Actions"
                >
                  <strong>Acciones</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody />
          </Table>
        </TableContainer>
      </>
    );
};*/

const TableUI = () => <div></div>;
export default TableUI;
