import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PurchaseFrequencyChartSection, CustomerTable } from '@/components';
import { Layout } from '@/layout';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: true,
      retry: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          <PurchaseFrequencyChartSection />
        </div>
        <CustomerTable />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
