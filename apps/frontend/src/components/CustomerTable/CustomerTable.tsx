import { SortBy } from '@/types';
import { useState } from 'react';
import * as S from './CustomerTable.styled.ts';

import { useDebounceState } from '@/hooks';

import Table from './Table.tsx';
import DisplaySection from './DisplaySection.tsx';
import { CustomerTableContext } from './CustomerTable.context.ts';

const CustomerTable = () => {
  const [searchValue, setSearchValue, debounceSearchValue] = useDebounceState('', 250);
  const [sortBy, setSortBy] = useState<SortBy>('asc');

  return (
    <CustomerTableContext.Provider
      value={{ searchValue, setSearchValue, debounceSearchValue, sortBy, setSortBy }}
    >
      <S.TableWrapper>
        <DisplaySection />
        <Table />
      </S.TableWrapper>
    </CustomerTableContext.Provider>
  );
};

export default CustomerTable;
