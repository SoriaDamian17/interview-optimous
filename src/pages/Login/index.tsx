import {
 Container, Grid, TextField,
} from '@material-ui/core';
import { Helmet } from 'react-helmet-async';
import { useSnackbar, VariantType } from 'notistack';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { AuthApi } from '../../service/Auth';
import { Title, Button } from '../../shared/styles';
import { Box, Header } from './styles';

type Inputs = {
    inputName: string,
    inputPassword: string,
    isRequired: string,
};

const Login: React.FC = ():JSX.Element => {
    const history = useHistory();
    const { enqueueSnackbar } = useSnackbar();
    const {
        handleSubmit, register,
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const { inputName, inputPassword } = data;
        AuthApi.post('/auth/token', {
            username: inputName,
            password: inputPassword,
        }).then(
            (resp) => {
              localStorage.setItem('NXtoken', resp.data.data.token);
              history.push('/home');
            },
        ).catch(() => {
            const variant: VariantType = 'error';
            enqueueSnackbar('Username or Password are incorrects!', { variant });
        });
    };

    return (
      <Box>
        <Helmet>
          <title>Sign In</title>
        </Helmet>
        <Container maxWidth="sm">
          <Header>
            <Title>
              Sign In
            </Title>
          </Header>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid
              container
              spacing={3}
              direction="column"
              alignItems="center"
              justify="center"
            >
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="username"
                  label="Username"
                  type="text"
                  variant="outlined"
                  {...register('inputName', { required: true })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="password"
                  label="Password"
                  type="password"
                  variant="outlined"
                  {...register('inputPassword', { required: true })}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit">
                  Sign in
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Box>
    );
};

export default Login;
