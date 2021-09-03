import { Paper as PMT } from '@material-ui/core';
import styled from 'styled-components';

const Paper = styled(PMT)`
    margin: 2rem auto;
    padding: 1rem;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

export {
    Paper,
};
