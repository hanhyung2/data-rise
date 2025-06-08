import { Series } from '@/types';

import { Text } from '@/components/common';

import * as S from './PurchaseFrequencyChartSection.styled.ts';

interface PurchaseFrequencyChartTooltipProps {
  series: Series;
  dataPointIndex: number;
}

const PurchaseFrequencyChartTooltip = ({
  series,
  dataPointIndex,
}: PurchaseFrequencyChartTooltipProps) => {
  const targetData = series[0].data[dataPointIndex];

  return (
    <S.TooltipWrapper>
      <S.Tooltip>
        <Text variant='body'>금액 범위 {targetData.x}</Text>
        <Text variant='body'>구매 횟수: {targetData.y.toLocaleString()}회</Text>
      </S.Tooltip>
    </S.TooltipWrapper>
  );
};

export default PurchaseFrequencyChartTooltip;
