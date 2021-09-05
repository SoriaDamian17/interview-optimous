import { DialogActions, Grid, Tooltip } from '@material-ui/core';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useSnackbar, VariantType } from 'notistack';
import { useHistory } from 'react-router';
import Layout from '../../components/Layout';
import {
 Header, Subheader, Subtitle, Title,
 Button,
} from '../../shared/styles';
import { ButtonSecundary, ButtonSubmit, TextField } from './styles';
import DialogUI from '../../components/Dialog';
import { IConnection } from '../../context/ConnectionContext';
import { IBodyConnection, IBodyDataSource, NexusApi } from '../../service/Nexus';
import useConnection from '../../hook/useConnection';
import useDataSource from '../../hook/useDataSource';
// import ParamsForm from '../../components/ParamsForm';

interface IOption {
  value: string | number | undefined,
  label: string,
}

type Inputs = {
  inputTitle: string,
  inputCode: string,
  inputQuery: string,
  inputConnectionId: number,
  // Input Params
  inputParamName: string,
  inputParamDefault: string,
  isRequired: string,
};

type InputsConnection = {
  // Dialog Connection
  inputConnection: string,
  isRequired: string,
}

const typeParams = [
  {
    value: 'String',
    label: 'string',
  },
  {
    value: 'Integer',
    label: 'integer',
  },
  {
    value: 'Date',
    label: 'date',
  },
];

function formatData(rows:IConnection[]) {
  const options:IOption[] = [];
  rows.map((r:IConnection) => options.push({
      value: r.id,
      label: r.title,
    }));
}

const DataSource: React.FC = ():JSX.Element => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const { setDataSource } = useDataSource();
  const { connections, setConnections } = useConnection();
  // const [forms, setForm] = useState<JSX.Element[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [paramType, setParamType] = useState<string>('String');
  const {
    handleSubmit, register,
  } = useForm<Inputs>();
  const {
    handleSubmit: handleSubmit2, register: register2,
  } = useForm<InputsConnection>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const {
      inputTitle, inputCode, inputQuery, inputConnectionId,
      inputParamName, inputParamDefault,
    } = data;
    const newDataSource:IBodyDataSource = {
      title: inputTitle,
      code: inputCode,
      query: inputQuery,
      connection_id: inputConnectionId,
      parameters: [
        {
          name: inputParamName,
          type: 'string',
          default_value: inputParamDefault,
        },
      ],
    };
    NexusApi.post('data-sources', newDataSource).then(() => {
      setDataSource((prev) => [...prev, newDataSource]);
      const variant: VariantType = 'success';
      enqueueSnackbar('Create DataSource', { variant });
      history.push('/Home');
    }).catch((resp) => {
      const variant: VariantType = 'error';
      const message = resp.message.errors ? resp.message.errors[0] : 'Could not create record';
      enqueueSnackbar(message, { variant });
    });
  };

  const onSubmitConnection: SubmitHandler<InputsConnection> = (dataForm) => {
    const { inputConnection } = dataForm;
    const newConnect:IBodyConnection = {
      title: inputConnection,
      type: 'SQL',
      connection_data: 'Server=serverNameTest;Database=databaseName;UserId=userIdTest;Password=passwordTest;Port=portTest',
    };
    NexusApi.post('connections', newConnect).then((resp) => {
      const { data } = resp;
      setConnections((prev) => [...prev, { ...newConnect, id: data.data.id }]);
      setOpen(!open);
      const variant: VariantType = 'success';
      enqueueSnackbar('Create Connection', { variant });
    });
  };

  const handleParameters = () => {
    console.log('Create Form Params');
    // setForm([...forms, <ParamsForm />]);
  };

  const handleChange = (ev:any) => {
    setParamType(ev.target.value);
  };

  return (
    <Layout title="New Data Source">
      <Header>
        <Title>
          New DataSources
        </Title>
        <Button onClick={() => setOpen(true)}>New Connection</Button>
      </Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="title"
              label="Title"
              type="text"
              variant="outlined"
              {...register('inputTitle', { required: true })}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="code"
              label="Code"
              type="text"
              variant="outlined"
              {...register('inputCode', { required: true })}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="select-connection"
              select
              label="Connection"
              className="select-control"
              value={formatData(connections)}
              SelectProps={{
                native: true,
              }}
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              {...register('inputConnectionId')}
            >
              <option key="default" value="00">
                Select Connection
              </option>
              {connections.map((option:IConnection) => (
                <option key={option.id} value={option.id}>
                  {option.title}
                </option>
          ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="query"
              label="Query"
              type="text"
              multiline
              rows={6}
              variant="outlined"
              {...register('inputQuery', { required: true })}
            />
          </Grid>
          <Grid item xs={12}>
            <Subheader>
              <Subtitle>
                Parameters
              </Subtitle>
              <Button onClick={() => handleParameters()}>Add Parameters</Button>
            </Subheader>
          </Grid>
          {/* {forms.map((paramForm) => <paramForm />)} */}
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="param_name"
              label="Name"
              type="text"
              variant="outlined"
              {...register('inputParamName', { required: true })}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="select-type-params"
              select
              label="Type"
              className="select-control"
              value={paramType}
              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
            >
              {typeParams.map((option:IOption) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
          ))}
            </TextField>
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="default_value"
              label="Default Value"
              type="text"
              variant="outlined"
              {...register('inputParamDefault', { required: false })}
            />
          </Grid>
          <Grid item xs={1}>
            <Tooltip title="Delet Param">
              <IconButton aria-label="delete" onClick={() => console.log('Remove Param Form')}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item xs={12}>
            <ButtonSubmit type="submit">Save</ButtonSubmit>
          </Grid>
        </Grid>
      </form>
      <DialogUI title="Create new connection" open={open} onClose={setOpen}>
        <form autoComplete="off" onSubmit={handleSubmit2(onSubmitConnection)}>
          <Grid container spacing={2} justifyContent="space-between" alignItems="center">
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="connectionName"
                label="Name"
                type="text"
                variant="outlined"
                {...register2('inputConnection', { required: true })}
              />
            </Grid>
            <Grid item xs={12}>
              <DialogActions>
                <ButtonSecundary onClick={() => setOpen(!open)}>
                  Cancel
                </ButtonSecundary>
                <Button type="submit">
                  Save
                </Button>
              </DialogActions>
            </Grid>
          </Grid>
        </form>
      </DialogUI>
    </Layout>
  );
};

export default DataSource;
