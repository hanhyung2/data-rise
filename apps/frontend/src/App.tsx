import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PurchaseFrequencyChartSection, CustomerTable } from '@/components';
import { Layout } from '@/layout';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
    },
    mutations: {
      retry: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <div>
          <PurchaseFrequencyChartSection />
        </div>
        <CustomerTable />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
