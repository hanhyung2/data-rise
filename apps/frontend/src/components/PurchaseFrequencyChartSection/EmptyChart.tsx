import styles from './PurchaseFrequencyChartSection.module.css';

const EmptyChart = () => {
  return (
    <div className={styles.empty}>
      <p className='body'></p>
    </div>
  );
};

export default EmptyChart;
