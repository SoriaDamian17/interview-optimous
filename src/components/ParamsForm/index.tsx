import {
    Grid, IconButton, TextField, Tooltip,
} from '@material-ui/core';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import DeleteIcon from '@material-ui/icons/Delete';

export interface IOption {
    value: string | number | undefined,
    label: string,
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

type Inputs = {
    inputParamName: string,
    inputParamType: string,
    inputParamDefault: string,
    isRequired: string,
};

const ParamsForm:React.FC = ():JSX.Element => {
    const [paramType] = useState<string>('String');
    const {
        handleSubmit, register,
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    // const handleChange = (ev:any) => {
    //     setParamType(ev.target.value);
    // };

    const handleDelete = () => {
        console.log('delete params');
    };

    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container>
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
                SelectProps={{
                native: true,
                }}
                variant="outlined"
                {...register('inputParamType')}
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
          </Grid>
        </form>
      </>
    );
};

export default ParamsForm;
