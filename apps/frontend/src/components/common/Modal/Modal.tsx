import * as S from './Modal.styled.ts';

import { ReactNode, MouseEvent } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <S.Backdrop onClick={onClose}>
      <S.Contents onClick={(event: MouseEvent) => event.stopPropagation()}>{children}</S.Contents>
    </S.Backdrop>
  );
};

export default Modal;
