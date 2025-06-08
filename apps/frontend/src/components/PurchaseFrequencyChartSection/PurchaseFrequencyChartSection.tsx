import { useGetPurchaseFrequency } from '@/hooks/api';
import { formatISO } from 'date-fns';
import { useState } from 'react';
import PurchaseFrequencyChart from './PurchaseFrequencyChart.tsx';

import styles from './PurchaseFrequencyChartSection.module.css';

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
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h4 className='heading'>구매내역</h4>
      </div>
      <PurchaseFrequencyChart data={data ?? []} />
    </section>
  );
};

export default PurchaseFrequencyChartSection;
