import { useGetPurchaseFrequency } from '@/hooks/api';
import { format } from 'date-fns';
import { useMemo } from 'react';

import { renderToString } from 'react-dom/server';

import Chart from 'react-apexcharts';

import type { ApexOptions } from 'apexcharts';

import EmptyChart from './EmptyChart';
import PurchaseFrequencyChartTooltip from './PurchaseFrequencyChartTooltip.tsx';
import * as S from './PurchaseFrequencyChartSection.styled.ts';

interface PurchaseFrequencyChartProps {
  startDate: Date | null;
  endDate: Date | null;
}

const PurchaseFrequencyChart = ({ startDate, endDate }: PurchaseFrequencyChartProps) => {
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

  const series = [
    {
      name: 'purchase',
      data:
        data?.map((item) => ({
          x: item.range,
          y: item.count,
        })) ?? [],
    },
  ];

  const isEmpty = data?.map((item) => item.count).every((count) => count === 0);

  const options: ApexOptions = useMemo(
    () => ({
      chart: {
        background: 'transparent',
        animations: {
          enabled: false,
        },
        sparkline: {
          enabled: true,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      states: {
        hover: {
          filter: {
            type: 'none',
          },
        },
        active: {
          filter: {
            type: 'none',
          },
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          columnWidth: '35%',
          colors: {
            backgroundBarRadius: 4,
          },
        },
      },
      tooltip: {
        enabled: true,
        followCursor: true,
        custom: ({ dataPointIndex }: { dataPointIndex: number; seriesIndex: number }) => {
          return renderToString(
            <PurchaseFrequencyChartTooltip series={series} dataPointIndex={dataPointIndex} />,
          );
        },
      },
    }),
    [series],
  );

  if (isEmpty) {
    return <EmptyChart />;
  }

  return (
    <S.ChartWrapper>
      <Chart series={series} type='bar' options={options} height='300px' />
    </S.ChartWrapper>
  );
};

export default PurchaseFrequencyChart;
