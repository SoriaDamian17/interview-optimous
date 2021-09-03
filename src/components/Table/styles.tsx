import { Table as TM, TableContainer as TCM } from '@material-ui/core';
import styled from 'styled-components';

const TableContainer = styled(TCM)`
    min-width: 280,
    overflow-x: 'auto'
`;

const Table = styled(TM)`
    min-width: 280px,
    width: '100%'
`;

const PaginationController = styled.div`
    flex-shrink: 0;
    margin-left: 2.5rem;
`;

export {
    TableContainer,
    Table,
    PaginationController,
};
