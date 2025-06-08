import './App.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PurchaseFrequencyChartSection, CustomerTable } from '@/components';

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
      <PurchaseFrequencyChartSection />
      <CustomerTable />
    </QueryClientProvider>
  );
}

export default App;
