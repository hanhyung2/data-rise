import { ChangeEvent } from 'react';

import * as S from './CustomerTable.styled.ts';
import { useCustomerTableContext } from './CustomerTable.context.ts';

import { AiOutlineSortAscending, AiOutlineSortDescending } from 'react-icons/ai';

const DisplaySection = () => {
  const { searchValue, setSearchValue, sortBy, setSortBy } = useCustomerTableContext();

  const handleSearchValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setSearchValue(value);
  };

  return (
    <S.DisplaySection>
      <S.Input
        value={searchValue}
        onChange={handleSearchValueChange}
        placeholder='검색어를 입력해주세요'
      />
      <S.SortWrapper>
        <S.SortButton onClick={() => setSortBy('asc')} disabled={sortBy === 'asc'}>
          <AiOutlineSortAscending size={20} />
        </S.SortButton>
        <S.SortButton onClick={() => setSortBy('desc')} disabled={sortBy === 'desc'}>
          <AiOutlineSortDescending size={20} />
        </S.SortButton>
      </S.SortWrapper>
    </S.DisplaySection>
  );
};

export default DisplaySection;
