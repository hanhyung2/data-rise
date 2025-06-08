import { useMemo } from 'react';

import Chart from 'react-apexcharts';

import type { ApexOptions } from 'apexcharts';

import { PurchaseFrequencyModel } from '@/models';

import EmptyChart from './EmptyChart';

interface PurchaseFrequencyChartProps {
  data: PurchaseFrequencyModel[];
}

const PurchaseFrequencyChart = ({ data }: PurchaseFrequencyChartProps) => {
  const series = [
    {
      name: 'purchase',
      data: data.map((item) => ({
        x: item.count,
        y: item.range,
      })),
    },
  ];

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
      grid: {
        show: false,
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
      xaxis: {
        labels: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
    }),
    [],
  );

  if (data.length === 0) {
    return <EmptyChart />;
  }

  return <Chart series={series} type='bar' options={options} height='126px' />;
};

export default PurchaseFrequencyChart;
