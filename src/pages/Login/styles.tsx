import { Box as BMT } from '@material-ui/core';
import styled from 'styled-components';

import { Header as HeaderP } from '../../shared/styles';

const Box = styled(BMT)`
justify-contener: center;
align-items: center;
`;
const Header = styled(HeaderP)`
    justify-content: center;
`;

export {
    Box,
    Header,
};
