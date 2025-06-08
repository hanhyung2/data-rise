import { useGetPurchaseFrequency } from '@/hooks/api';
import { format } from 'date-fns';
import { useState } from 'react';
import PurchaseFrequencyChart from './PurchaseFrequencyChart.tsx';

import * as S from './PurchaseFrequencyChartSection.styled.ts';
import { Text, Calendar } from '@/components/common';

const PurchaseFrequencyChartSection = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const { data } = useGetPurchaseFrequency({
    params: {
      from: startDate ? format(startDate, 'yyyy-MM-dd') : undefined,
      to: endDate
        ? format(endDate, 'yyyy-MM-dd')
        : startDate
          ? format(startDate, 'yyyy-MM-dd')
          : undefined,
    },
  });

  return (
    <S.Wrapper>
      <S.Header>
        <Text as='h4' variant='heading'>
          구매내역
        </Text>
        <Calendar
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
      </S.Header>
      <PurchaseFrequencyChart data={data ?? []} />
    </S.Wrapper>
  );
};

export default PurchaseFrequencyChartSection;
