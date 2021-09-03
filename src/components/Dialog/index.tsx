import {
 Dialog, DialogContent, DialogTitle,
} from '@material-ui/core';
import { ReactNode } from 'react';

export interface IModalProps {
  children: ReactNode,
  title: string,
  open: boolean,
  // eslint-disable-next-line no-unused-vars
  onClose: (flag:boolean) => void,
}

const DialogUI: React.FC<IModalProps> = ({
 children, title, open, onClose,
}):JSX.Element => {
    const handleClose = ():void => {
        onClose(true);
    };
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          {children}
        </DialogContent>
      </Dialog>
    );
};

export default DialogUI;
