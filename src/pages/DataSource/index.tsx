import { DialogActions, Grid, Tooltip } from '@material-ui/core';
import { useContext, useEffect, useState } from 'react';
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
import { ConnectionContext, ICContext, IConnection } from '../../context/ConnectionContext';
import { DataSourceContext, IDContext } from '../../context/DataSourceContext';
import { IBodyConnection, IBodyDataSource } from '../../service/Nexus';

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
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const { datasource, setDataSource } = useContext<IDContext>(DataSourceContext);
  const { connections, setConnections } = useContext<ICContext>(ConnectionContext);
  const [open, setOpen] = useState<boolean>(false);
  const [paramType, setParamType] = useState<string>('String');
  const {
    handleSubmit, register, formState: { errors },
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
    // NexusApi.post('data-sources', newDataSource).then((resp) => {
    //   console.log(resp);
    // });
    setDataSource((prev) => [...prev, newDataSource]);
    const variant: VariantType = 'success';
    enqueueSnackbar('Create DataSource', { variant });
    history.push('/');
  };

  const onSubmitConnection: SubmitHandler<InputsConnection> = (data) => {
    console.log(data);
    const { inputConnection } = data;
    const newConnect:IBodyConnection = {
      title: inputConnection,
      type: 'SQL',
      connection_data: 'Server=serverNameTest;Database=databaseName;UserId=userIdTest;Password=passwordTest;Port=portTest',
    };
    // NexusApi.post('connections', newConnect).then((resp) => {
    //   // const { data }:IDataSource[] = resp;
    //   // setDataSource(data);
    //   console.log(resp);
    // });
    setConnections((prev) => [...prev, newConnect]);
    setOpen(!open);
    const variant: VariantType = 'success';
    enqueueSnackbar('Create Connection', { variant });
  };

  const handleParameters = () => {
    console.log('parameters');
  };

  const handleChange = (ev:any) => {
    setParamType(ev.target.value);
  };

  const handleDelete = () => {
    console.log('delete params');
  };

  useEffect(() => {
    console.log(datasource);
    console.log(connections);
    console.log(errors);
  }, [connections, datasource]);

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
              label="Type"
              className="select-control"
              value={formatData(connections)}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
              {...register('inputConnectionId')}
            >
              {connections.map((option:IConnection) => (
                <option key={option.title} value={option.title}>
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
              <IconButton aria-label="delete" onClick={() => handleDelete()}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item xs={12} justifyContent="flex-end">
            <ButtonSubmit type="submit">Save</ButtonSubmit>
          </Grid>
        </Grid>
      </form>
      <DialogUI title="Create new connection" open={open} onClose={setOpen}>
        <form autoComplete="off" onSubmit={handleSubmit2(onSubmitConnection)}>
          <Grid container alignItems="center">
            <Grid item xs={12} spacing={3}>
              <TextField
                fullWidth
                id="connectionName"
                label="Name"
                type="text"
                variant="outlined"
                {...register2('inputConnection', { required: true })}
              />
            </Grid>
            <Grid item xs={12} spacing={3}>
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
