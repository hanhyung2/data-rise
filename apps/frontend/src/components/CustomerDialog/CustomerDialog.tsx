import { Modal } from '@/components/common';
import { Customer } from '@/types';

import Contents from './Contents';

import * as S from './CustomerDialog.styled.ts';

import { Text } from '@/components/common';
import { AiOutlineClose } from 'react-icons/ai';

interface CustomerDialogProps {
  customer: Customer;
  isOpen: boolean;
  onClose: () => void;
}

const CustomerDialog = ({ customer, isOpen, onClose }: CustomerDialogProps) => {
  const { id, name } = customer;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <S.ModalHeader>
        <Text as='h3' variant='heading'>
          {name}고객님의 구매 목록
        </Text>
        <div onClick={onClose} style={{ cursor: 'pointer' }}>
          <AiOutlineClose size={24} />
        </div>
      </S.ModalHeader>
      <Contents customerId={id} />
    </Modal>
  );
};

export default CustomerDialog;
