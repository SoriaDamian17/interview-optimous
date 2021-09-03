import { ReactNode } from 'react';
import { Modal } from './styles';

export interface IModalProps {
    open: boolean,
    onClose: () => void,
    children: ReactNode,
}

const ModalUI: React.FC<IModalProps> = ({ children, open, onClose }) => {
    const handleClose = ():void => {
        onClose();
    };
    return (
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        {children}
      </Modal>
    );
};

export default ModalUI;
