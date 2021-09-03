import { Grid, Tooltip } from '@material-ui/core';
import { useContext, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Layout from '../../components/Layout';
import {
 Header, Subheader, Subtitle, Title,
 Button,
} from '../../shared/styles';
import { TextField } from './styles';
import DialogUI from '../../components/Dialog';
import { ConnectionContext, ICContext, IConnection } from '../../context/ConnectionContext';

export interface IDataSourceProps {
title?: string;
}

type Inputs = {
  inputConnection: string,
  isRequired: string,
};

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

const DataSource: React.FC<IDataSourceProps> = ():JSX.Element => {
  const { connections, setConnections } = useContext<ICContext>(ConnectionContext);
  const [open, setOpen] = useState<boolean>(false);
  const [paramType, setParamType] = useState<string>('String');
    const {
      handleSubmit, register,
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
    const onSubmitConnection: SubmitHandler<Inputs> = (data) => {
      console.log(data);
      const newConnect:IConnection = {
        title: data.inputConnection,
        type: 'SQL',
        connectionData: 'Server=serverNameTest;Database=databaseName;UserId=userIdTest;Password=passwordTest;Port=portTest',
      };
      setConnections((prev) => [...prev, newConnect]);
      setOpen(!open);
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
      console.log(connections);
    }, [connections]);
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
              name="title"
              type="text"
              // InputLabelProps={{ shrink: true }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="code"
              label="Code"
              name="code"
              type="text"
              // InputLabelProps={{ shrink: true }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="code"
              label="Code"
              name="code"
              type="text"
              // InputLabelProps={{ shrink: true }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="query"
              label="Query"
              name="query"
              type="text"
              multiline
              rows={6}
              // InputLabelProps={{ shrink: true }}
              variant="outlined"
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
              name="Param_name"
              type="text"
              // InputLabelProps={{ shrink: true }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="filled-select-currency-native"
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
              {typeParams.map((option) => (
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
              name="default_value"
              type="text"
              // InputLabelProps={{ shrink: true }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <Tooltip title="Delet Param">
              <IconButton aria-label="delete" onClick={() => handleDelete()}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item xs={12} direction="row" justifyContent="flex-end">
            <Button type="submit">Save</Button>
          </Grid>
        </Grid>
      </form>
      <DialogUI title="Create new connection" open={open} onClose={setOpen}>
        <form autoComplete="off" onSubmit={handleSubmit(onSubmitConnection)}>
          <Grid container alignItems="center">
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="connectionName"
                label="Name"
                type="text"
              // InputLabelProps={{ shrink: true }}
                variant="outlined"
                {...register('inputConnection', { required: true })}
              />
            </Grid>
            <Grid item xs={12}>
              <Button onClick={() => setOpen(!open)} color="primary">
                Cancel
              </Button>
              <Button type="submit">
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </DialogUI>
    </Layout>
  );
};

export default DataSource;
