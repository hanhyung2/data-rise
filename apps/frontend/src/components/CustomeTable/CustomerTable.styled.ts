import styled, { css } from 'styled-components';

import { COLOR, TYPOGRAPHY } from '@/foundation';

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid ${COLOR.GRAY[400]};
  border-radius: 8px;
`;

export const TableDisplaySection = styled.div`
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
