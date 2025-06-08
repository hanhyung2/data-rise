import { Text } from '@/components/common';

import * as S from './CustomerTable.styled.ts';

const EmptyTable = () => {
  return (
    <S.EmptyTable>
      <Text variant='body'>회원 목록이 없어요.</Text>
    </S.EmptyTable>
  );
};

export default EmptyTable;
