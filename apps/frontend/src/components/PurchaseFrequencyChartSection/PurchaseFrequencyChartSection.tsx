import { useState } from 'react';
import PurchaseFrequencyChart from './PurchaseFrequencyChart.tsx';

import * as S from './PurchaseFrequencyChartSection.styled.ts';
import { Text, Calendar, ErrorBoundary } from '@/components/common';

const PurchaseFrequencyChartSection = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

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
      <S.ChartContents>
        <ErrorBoundary>
          <PurchaseFrequencyChart startDate={startDate} endDate={endDate} />
        </ErrorBoundary>
      </S.ChartContents>
    </S.Wrapper>
  );
};

export default PurchaseFrequencyChartSection;
