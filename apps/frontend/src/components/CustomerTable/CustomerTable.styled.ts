import styled, { css } from 'styled-components';

import { COLOR, TYPOGRAPHY } from '@/foundation';

export const TableWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid ${COLOR.GRAY[400]};
  border-radius: 8px;
`;

export const DisplaySection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 16px;
`;

export const Table = styled.table`
  border-collapse: collapse;
`;

export const TR = styled.tr<{ $hasBorder?: boolean }>`
  cursor: pointer;

  &:hover td {
    background-color: ${COLOR.GRAY[75]};
  }

  ${({ $hasBorder }) =>
    $hasBorder &&
    css`
      border-bottom: 1px solid ${COLOR.GRAY[400]};
    `}
`;

export const TH = styled.th`
  ${TYPOGRAPHY.body};
  text-align: start;
  padding: 8px 16px;
`;

export const TD = styled.td`
  ${TYPOGRAPHY.body};
  padding: 8px 16px;
  background-color: transparent;
`;

export const Input = styled.input`
  ${TYPOGRAPHY.body};
  width: 300px;
  height: 30px;
  border: 1px solid ${COLOR.GRAY[400]};
  border-radius: 4px;
`;

export const SortWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const SortButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: ${COLOR.GRAY[100]};
    color: ${COLOR.GRAY[800]};
    cursor: not-allowed;
  }
`;
