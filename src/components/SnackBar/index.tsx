import { IconButton } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { Message, Snackbar } from './styles';

export interface SnackBarProps {
    message:string,
    // eslint-disable-next-line no-unused-vars
    onClose: (flag:boolean) => void,
}

const SnackBar: React.FC<SnackBarProps> = ({ message, onClose }) => (
  <Snackbar
    aria-describedby="client-snackbar"
    message={(
      <Message>
        <CheckCircleIcon />
        {message}
      </Message>
    )}
    action={[
      <IconButton
        key="close"
        aria-label="Close"
        color="inherit"
        onClick={() => onClose(false)}
      >
        <CloseIcon />
      </IconButton>,
    ]}
  />
);

export default SnackBar;
