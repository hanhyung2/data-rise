import * as S from './PurchaseFrequencyChartSection.styled.ts';

import { Text } from '@/components/common';

const EmptyChart = () => {
  return (
    <S.EmptyChart>
      <Text variant='body'>구매 내역이 없어요.</Text>
    </S.EmptyChart>
  );
};

export default EmptyChart;
