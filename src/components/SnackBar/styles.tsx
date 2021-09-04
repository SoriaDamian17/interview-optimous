import { SnackbarContent } from '@material-ui/core';
import styled from 'styled-components';
import { colors } from '../../shared/styles';

const Snackbar = styled(SnackbarContent)`
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: ${colors.lightgreen}!important;
`;
const Message = styled.span`
    display: flex;
    align-items: center;
`;
export {
    Snackbar,
    Message,
};
