import { Button as BMT, Paper as PMT } from '@material-ui/core';
import styled from 'styled-components';
import { colors } from '../../shared/styles';

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    alig-items: center;
`;

const Paper = styled(PMT)`
    margin: 2rem auto;
    padding: 1rem;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

const Button = styled(BMT)`
    height: 3rem;
    color:${colors.white}!important;
    background-color:${colors.lightgreen} !important;
    font-weight: bold;
    font-size: 1.5rem;
    &:hover {
        background-color:${colors.green} !important;
    }
`;

export {
    Paper,
    Button,
    Header,
};
