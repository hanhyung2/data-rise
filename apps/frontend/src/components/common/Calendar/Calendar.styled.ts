import styled, { css } from 'styled-components';

import { COLOR, TYPOGRAPHY } from '@/foundation';

export const CalendarWrapper = styled.div`
  position: relative;
`;

export const CalendarButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;
  height: 30px;
  padding: 0 8px;
  border: 1px solid ${COLOR.GRAY[800]};
  border-radius: 8px;
`;

export const CalendarPopover = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
  padding: 16px;
  background-color: ${COLOR.WHITE};
  border: 1px solid ${COLOR.GRAY[200]};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  z-index: 999;
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

export const CalendarMoveButton = styled.button`
  border: none;
`;

export const DayWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 50px);
  grid-row-gap: 15px;
`;

export const CalendarPopoverFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 0 30px;
`;

export const CalendarItem = styled.div<{
  $isSunday: boolean;
  $isSelectedDate?: boolean;
  $isRange?: boolean;
}>`
  display: flex;
  justify-content: center;

  ${({ $isSunday }) =>
    $isSunday &&
    css`
      color: ${COLOR.RED[500]};
    `}

  ${({ $isSelectedDate, $isRange }) => {
    if ($isSelectedDate) {
      return css`
        background-color: ${COLOR.PURPLE[200]};
      `;
    }

    if ($isRange) {
      return css`
        background-color: ${COLOR.PURPLE[100]};
      `;
    }
  }}
`;

export const ResetButton = styled.button`
  ${TYPOGRAPHY.body};
  color: ${COLOR.PURPLE[700]};
`;
