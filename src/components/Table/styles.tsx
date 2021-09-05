import { Table as TM } from '@material-ui/core';
import styled from 'styled-components';

const Scroll = styled.div`
    min-width: 20rem;
    max-height: 35rem;
    // overflow: auto
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
    Scroll,
    Table,
    PaginationController,
};
