import { useGetPurchaseFrequency } from '@/hooks/api';
import { formatISO } from 'date-fns';
import { useState } from 'react';
import PurchaseFrequencyChart from './PurchaseFrequencyChart.tsx';

import * as S from './PurchaseFrequencyChartSection.styled.ts';
import { Text } from '@/components/common';

const PurchaseFrequencyChartSection = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const { data } = useGetPurchaseFrequency({
    params: {
      to: startDate ? formatISO(startDate) : undefined,
      from: endDate ? formatISO(endDate) : undefined,
    },
  });

  return (
    <S.Wrapper>
      <S.Header>
        <Text as='h4' variant='heading'>
          구매내역
        </Text>
      </S.Header>
      <PurchaseFrequencyChart data={data ?? []} />
    </S.Wrapper>
  );
};

export default PurchaseFrequencyChartSection;
