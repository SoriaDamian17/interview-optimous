import { TextField as TMT } from '@material-ui/core';
import styled from 'styled-components';
import { Button } from '../../shared/styles';

const TextField = styled(TMT)`
    width: 100%;
`;

const ButtonSubmit = styled(Button)`
justify-content: flex-end;
`;

export {
    TextField,
    ButtonSubmit,
};
