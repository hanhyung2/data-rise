import styled from 'styled-components';

import { COLOR, TYPOGRAPHY } from '@/foundation';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  border: 1px solid ${COLOR.GRAY[400]};
  border-radius: 8px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const EmptyChart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${COLOR.GRAY[100]};
`;

export const ChartWrapper = styled.div`
  width: 100%;

  .apexcharts-yaxis-label {
    ${TYPOGRAPHY['body']};
  }

  .apexcharts-xaxis-label {
    ${TYPOGRAPHY['body']};
  }
`;

export const TooltipWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 9px;
  background: ${COLOR.WHITE};
  border-radius: 10px;
`;

export const Tooltip = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  width: 100%;
  padding: 0;
`;

export const ChartContents = styled.div`
  width: 100%;
  height: 300px;
`;
