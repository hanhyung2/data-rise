import styled, { CSSObject } from 'styled-components';

import { TYPOGRAPHY } from '@/foundation';

export const Tag = styled.div<{
  $variant: keyof typeof TYPOGRAPHY;
  $color?: CSSObject['color'];
  $customCSS?: CSSObject;
}>`
  ${({ $variant }) => TYPOGRAPHY[$variant as keyof typeof TYPOGRAPHY]};
  color: ${({ $color }) => $color};

  ${({ $customCSS }) => $customCSS};
`;
