import { SortBy } from '@/types';
import { createContext, useContext, Dispatch, SetStateAction } from 'react';

type CustomerTableContextType = {
  searchValue: string;
  debounceSearchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  sortBy: SortBy;
  setSortBy: Dispatch<SetStateAction<SortBy>>;
};

export const CustomerTableContext = createContext<CustomerTableContextType | undefined>(undefined);

export const useCustomerTableContext = () => {
  const context = useContext(CustomerTableContext);

  if (!context) {
    throw new Error('useCustomerTableContext must be used within a CustomerTableProvider');
  }

  return context;
};
