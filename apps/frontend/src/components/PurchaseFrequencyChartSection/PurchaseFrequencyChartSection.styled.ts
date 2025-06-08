import styled from 'styled-components';

import { COLOR } from '@/foundation';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
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
