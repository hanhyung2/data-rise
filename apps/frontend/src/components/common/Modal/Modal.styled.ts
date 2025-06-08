import styled from 'styled-components';

import { COLOR } from '@/foundation';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const Contents = styled.div`
  background-color: ${COLOR.WHITE};
  border-radius: 12px;
  padding: 24px;
  min-width: 320px;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;
