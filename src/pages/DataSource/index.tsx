import { Grid, Tooltip } from '@material-ui/core';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Layout from '../../components/Layout';
import {
 Header, Subheader, Subtitle, Title,
} from '../../shared/styles';
import { Button, TextField } from './styles';

export interface IDataSourceProps {
title?: string;
}

type Inputs = {
    example: string,
    exampleRequired: string,
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
  const [paramType, setParamType] = useState<string>('EUR');
    const {
      handleSubmit,
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    const handleParameters = () => {
      console.log('parameters');
    };

    const handleChange = (ev:any) => {
      setParamType(ev.target.value);
    };

    const handleDelete = () => {
      console.log('delete params');
    };
  return (
    <Layout title="New Data Source">
      <Header>
        <Title>
          New DataSources
        </Title>
        <Button onClick={() => handleParameters()}>New Connection</Button>
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
    </Layout>
  );
};

export default DataSource;
