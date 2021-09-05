import { Button as BMT, TextField as TMT } from '@material-ui/core';
import styled from 'styled-components';
import { Button, colors } from '../../shared/styles';

const TextField = styled(TMT)`
    width: 100%;
`;

const ButtonSecundary = styled(BMT)`
    height: 3rem;
    width: 100%;
    max-width: 10rem;
    color: ${colors.lightgreen}!important;
    border: none!important;
    background-color: none!important;
`;

const ButtonSubmit = styled(Button)`
    justify-content: flex-end;
`;

export {
    TextField,
    ButtonSecundary,
    ButtonSubmit,
};
