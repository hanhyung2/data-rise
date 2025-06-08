import { COLOR, TYPOGRAPHY } from '@/foundation';
import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  height: 100%;
`;

export const ResetButton = styled.button`
  ${TYPOGRAPHY.body};
  color: ${COLOR.PURPLE[700]};
`;
