import { Button as BMT, TextField as TMT } from '@material-ui/core';
import styled from 'styled-components';
import { colors } from '../../shared/styles';

const TextField = styled(TMT)`
    width: 100%;
`;

const Button = styled(BMT)`
    height: 3rem;
    width: 10rem;
    color:${colors.white}!important;
    background-color:${colors.lightgreen} !important;
    font-weight: bold;
    font-size: 1.5rem;
    &:hover {
        background-color:${colors.green} !important;
    }
`;

export {
    Button,
    TextField,
};
