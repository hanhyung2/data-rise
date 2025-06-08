import { Customer } from '@/types';
import { useState } from 'react';

import { useGetCustomers } from '@/hooks/api';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import * as S from './CustomerTable.styled.ts';

import { CustomerDialog } from '@/components/CustomerDialog';

const { accessor } = createColumnHelper<Customer>();

const columns = [
  accessor('name', {
    header: '이름',
    cell: (info) => info.getValue(),
  }),
  accessor('count', {
    header: '구매 횟수',
    cell: (info) => info.getValue(),
  }),
  accessor('totalAmount', {
    header: '총 구매 금액',
    cell: (info) => info.getValue(),
  }),
];

const Table = () => {
  const { data } = useGetCustomers({
    params: {},
  });

  const table = useReactTable({
    data: data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const [selectedCustomer, setSelectedCustomer] = useState<number | null>(null);

  const handleRowClick = (customer: Customer) => {
    setSelectedCustomer(customer);
  };

  return (
    <>
      <S.Table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <S.TH key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </S.TH>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <S.TR key={row.id} onClick={() => handleRowClick(row.original)}>
              {row.getVisibleCells().map((cell) => (
                <S.TD key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </S.TD>
              ))}
            </S.TR>
          ))}
        </tbody>
      </S.Table>
      {selectedCustomer && (
        <CustomerDialog
          customer={selectedCustomer}
          onClose={() => setSelectedCustomer(null)}
          isOpen={true}
        />
      )}
    </>
  );
};

export default Table;
